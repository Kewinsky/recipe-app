import type { Dispatch } from 'react'
import type { RecipeItem } from '../../_types'
import type { RecipesFilters } from '../../_api'

export type ListOfRecipesProps = {
   data: RecipeItem[]
   setData: Dispatch<React.SetStateAction<RecipeItem[]>>
   filters: RecipesFilters
}
