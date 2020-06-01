import { useEffect, useState } from 'react'

//-- helps calculate the window size
let defaultWidth
let defaultHeight
if (typeof window !== `undefined`) {
   defaultHeight = window.innerHeight
   defaultWidth = window.innerWidth
}

const useWindowSize = () => {
   const [dimensions, setDimensions] = useState({
      windowHeight: defaultHeight,
      windowWidth: defaultWidth,
   })
   useEffect(() => {
      const handler = () =>
         setDimensions({
            windowHeight: window.innerHeight,
            windowWidth: window.innerWidth,
         })
      window.addEventListener(`resize`, handler)
      return () => window.removeEventListener(`resize`, handler)
   }, [])
   return dimensions
}

export default useWindowSize
