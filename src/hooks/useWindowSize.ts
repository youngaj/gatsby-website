import { useState, useEffect } from 'react'

// Hook
export function useWindowSize() {
   const isSSR = typeof window === 'undefined'
   const [windowSize, setWindowSize] = useState({
      width: isSSR ? 1200 : window?.innerWidth,
      height: isSSR ? 800 : window?.innerHeight,
   })

   useEffect(() => {
      function handleResize() {
         // Set window width/height to state
         setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
         })
      }

      // Add event listener
      window.addEventListener('resize', handleResize)

      // Call handler right away so state gets updated with initial window size
      handleResize()

      // Remove event listener on cleanup
      return () => window.removeEventListener('resize', handleResize)
   }, []) // Empty array ensures that effect is only run on mount

   return windowSize
}
