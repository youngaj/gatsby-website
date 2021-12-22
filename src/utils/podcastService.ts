import axios from 'axios'
import { info } from '../data/info'

export interface PodcastData {
   queue: Episode[]
   podcasts: PodCast[]
   starred: StarredEpisode[]
   appearances: AppearanceEpisode[]
}

export interface PodCast {
   uuid: string
   title: string
   url: string
   author: string
   description: string
   lastEpisodePublished: Date
}
export interface Episode {
   uuid: string
   podcast: string
   showNotes: string
   title: string
   url: string
}
export interface StarredEpisode extends Episode {
   published: Date
   size: string
   episodeNumber: number
   duration: number
   podcastTitle: string
   podcastUuid: string
}

export interface AppearanceEpisode extends StarredEpisode {
   topic: string
   description: string
}

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
   data.appearances = data.starred
      .filter((x) => appearanceIds.includes(x.uuid))
      .map((x) => {
         const episodeInfo = info.me.podcastAppearances.find(
            (episode) => episode.uuid === x.uuid
         )
         const appearance: AppearanceEpisode = {
            ...x,
            description: episodeInfo.description,
            topic: episodeInfo.topic,
            url: episodeInfo.url,
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
