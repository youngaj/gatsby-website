import axios from 'axios'
import moment from 'moment'

export const getVideos = async () => {
   const response = await axios.get(
      'https://gsfcdevgroup.azurewebsites.net/api/GetGSFCDevGroupSessions'
   )
   const data = response.data.map((x) => {
      x.day = moment(x.publishedAt).format('D')
      x.monthYear = moment(x.publishedAt).format('MMM-YYYY')
      return x
   })
   return data
}
