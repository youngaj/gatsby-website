export const getSubset = (items: [], num: number) => {
   let subset = []
   if (items) {
      subset = items.slice(0, num)
   }
   return subset
}
