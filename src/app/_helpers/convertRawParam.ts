import type { SelectOption } from '@/types'

export const convertRawParam = (item: SelectOption[]) => {
   return item
      .map((filter) => {
         return filter.value
      })
      .join(',+')
}
