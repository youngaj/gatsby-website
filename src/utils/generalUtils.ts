export function getSubset<T>(items: Array<T>, num: number) {
   let subset: Array<T> = []
   if (items) {
      subset = items.slice(0, num)
   }
   return subset
}
