import axios from 'axios'
import moment from 'moment'

export const getVideos = async () => {
   const response = await axios.get(
      'https://gsfcdevgroup.azurewebsites.net/api/GetGSFCDevGroupSessions'
   )
   const data = response.data.map((x) => {
      return formatVideo(x)
   })
   return data
}

export const formatVideo = (video) => {
   if (video) {
      video.day = moment(video.publishedAt).format('D')
      video.monthYear = moment(video.publishedAt).format('MMM-YYYY')
   }
   return video
}
