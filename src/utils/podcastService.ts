import axios from 'axios'
import moment from 'moment'

export const getPodcasts = async () => {
   const response = await axios.get(
      'https://andrepodcasts.azurewebsites.net/api/PodcastQueue'
   )

   const data = response.data
   data.queue = data.queue.map((episode) => {
      episode.day = moment(episode.published).format('DD')
      episode.monthYear = moment(episode.published).format('MMM YYYY')
      return episode
   })
   return data
}
