export interface PageMenu {
   links: PageMenuLinks
}

export interface PageMenuLinks {
   [key: string]: PageMenuItem
}

export interface PageMenuItem {
   title: string
   isActive?: boolean
   target: string
   scrollTo?: (string) => void
}
