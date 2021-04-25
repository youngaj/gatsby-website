export type Blog = {
   date: Date
   title: string
   slug: string
}

export interface Video {
   id: string
   link: string
   title: string
   description: string
   publishedAt: Date
}

export enum TabEnum {
   Starred = 'Starred',
   Queue = 'Queue',
   Subscribed = 'Subscribed',
}
export interface Tab {
   title: string
   count: number
   value: TabEnum
}
