import axios from 'axios'
import dayjs from 'dayjs'

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
      video.day = dayjs(video.publishedAt).format('D')
      video.monthYear = dayjs(video.publishedAt).format('MMM-YYYY')
   }
   return video
}
