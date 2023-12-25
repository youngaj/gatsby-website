import axios from 'axios'
import dayjs from 'dayjs'
import { DevGroupVideo, YouTubeVideo } from '../models'

export const getVideos = async (): Promise<DevGroupVideo[]> => {
   const response = await axios.get(
      'https://gsfcdevgroup.azurewebsites.net/api/GetGSFCDevGroupSessions'
   )
   const data: DevGroupVideo[] = response.data.map((x) => {
      return formatVideo(x)
   })
   return data
}

export const formatVideo = (video: YouTubeVideo): DevGroupVideo | undefined => {
   if (video) {
      const devGroupVideo: DevGroupVideo = {
         ...video,
         day: dayjs(video.publishedAt).format('D'),
         monthYear: dayjs(video.publishedAt).format('MMM-YYYY'),
      }
      return devGroupVideo
   }
}
