export interface YouTubeVideo {
   id: string
   link: string
   kind: string
   publishedAt: string
   channel: string
   channelTitle: string
   title: string
   description: string
   thumbnails: {
      default: YouTubeThumbnail
      medium: YouTubeThumbnail
      high: YouTubeThumbnail
   }
}

export interface YouTubeThumbnail {
   url: string
   width: number
   height: number
}

export interface DevGroupVideo extends YouTubeVideo {
   day: string
   monthYear: string
}
