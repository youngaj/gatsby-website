export enum TabEnum {
   Starred = 'Starred',
   Queue = 'Queue',
   Subscribed = 'Subscribed',
   Appearances = 'Appearances',
}
export interface Tab {
   title: string
   count: number
   value: TabEnum
}
