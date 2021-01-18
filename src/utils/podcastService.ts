import axios from 'axios'

export const getPodcastInfo = async () => {
   const response = await axios.get(
      'https://andrepodcasts.azurewebsites.net/api/PodcastQueue'
   )

   const data = response.data
   return data
}

export const getStarredEpisodes = async () => {
   const data = await getPodcastInfo()
   return data.starred
}

export const getShoweNotes = async (episodeUuid) => {
   const response = await axios.get(
      `https://podcast-api.pocketcasts.com/episode/show_notes/${episodeUuid}`
   )
   const notes = response.data
   return notes
}
