import axios from 'axios'

export const getVideos = async () => {
   const response = await axios.get(
      'https://gsfcdevgroup.azurewebsites.net/api/GetGSFCDevGroupSessions'
   )
   const data = response.data
   return data
}
