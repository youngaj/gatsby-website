export interface Info {
   me: AboutMeInfo
   nasa: NASAInfo
}

interface AboutMeInfo {
   firstName: string
   lastName: string
   email: string
   age: number
   workExperience: WorkExperience[]
   social: Social[]
   projects: Project[]
   podcastAppearances: PodcastAppearance[]
}

export interface WorkExperience {
   company: string
   title: string
   start: string
   end: string
   responsibilities: string[]
}

interface Social {
   name: string
   username: string
   link: string
}

interface Project {
   title: string
   description: string
   code?: Code
}

interface Code {
   repo: string
   url: string
}

interface PodcastAppearance {
   uuid: string
   podcastName: string
   topic: string
   description?: string
   url?: string
}

interface NASAInfo {
   lastDay: string
}
