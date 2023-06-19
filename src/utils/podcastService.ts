import axios from 'axios'
import dayjs from 'dayjs'
import { info } from '../data/info'
import { PodcastData, AppearanceEpisode, PodCast } from '../models/podcast'

export const getPodcastInfo = async (): Promise<PodcastData> => {
   const response = await axios.get(
      'https://andrepodcasts.azurewebsites.net/api/PodcastQueue'
   )

   const data: PodcastData = response.data
   //retrieve appearances
   data.podcasts.forEach(
      (x) => (x.lastEpisodePublished = new Date(x.lastEpisodePublished))
   )
   const appearanceIds = info.me.podcastAppearances.map((x) => x.uuid)
   data.queue = data.queue.map((x) => {
      const podcastUuid =
         typeof x.podcast === 'string' ? x.podcast : x.podcast?.uuid
      x.podcast = _getPodcast(data.podcasts, podcastUuid)
      return x
   })
   data.starred = data.starred.map((x) => {
      x.podcast = _getPodcast(data.podcasts, x.podcastUuid)
      return x
   })
   data.appearances = data.starred
      .filter((x) => appearanceIds.includes(x.uuid))
      .map((x) => {
         const episodeInfo = info.me.podcastAppearances.find(
            (episode) => episode.uuid === x.uuid
         )
         const appearance: AppearanceEpisode = {
            ...x,
            description: episodeInfo?.description || x.showNotes,
            topic: episodeInfo?.topic || x.title,
            url: episodeInfo?.url || x.showNotes,
            published: new Date(x.published),
         }
         return appearance
      })
      .sort((a, b) => b.published.getTime() - a.published.getTime())

   return data
}

export const getStarredEpisodes = async () => {
   const data = await getPodcastInfo()
   return data.starred
}

export const getShowNotes = async (episodeUuid) => {
   const response = await axios.get(
      `https://podcast-api.pocketcasts.com/episode/show_notes/${episodeUuid}`
   )
   const notes = response.data
   return notes
}

function _getPodcast(
   podcasts: PodCast[],
   podcastUuid?: string
): PodCast | undefined {
   const podcast = podcasts.find((x) => x.uuid === podcastUuid)
   return podcast
}

export const _getListeningTimeInHours = (
   timeInSeconds: number | undefined
): number => {
   if (!timeInSeconds) return 0
   const timeInHours = Math.floor(timeInSeconds / 60 / 60)
   return timeInHours
}

export const _getListeningStartDate = (
   dateStr: string | Date | undefined
): string => {
   const date = dayjs(dateStr)
   const monthYear = date.format('MMMM YYYY')
   return monthYear
}
