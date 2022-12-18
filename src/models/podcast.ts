export interface PodcastData {
   queue: Episode[]
   podcasts: PodCast[]
   starred: StarredEpisode[]
   appearances: AppearanceEpisode[]
}

export interface PodCast {
   uuid: string
   title: string
   url: string
   author: string
   description: string
   lastEpisodePublished: Date
}

export interface Episode {
   uuid: string
   podcastUuid: string
   podcast?: PodCast
   showNotes: string
   title: string
   url: string
}

export interface StarredEpisode extends Episode {
   published: Date
   size: string
   episodeNumber: number
   duration: number
   podcastTitle: string
}

export interface AppearanceEpisode extends StarredEpisode {
   topic: string
   description: string
}
