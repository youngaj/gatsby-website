import axios from 'axios'

export const getPodcasts = async () => {
   const response = await axios.get(
      'https://andrepodcasts.azurewebsites.net/api/PodcastQueue'
   )

   const data = response.data
   return data
}
