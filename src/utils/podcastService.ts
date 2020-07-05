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
