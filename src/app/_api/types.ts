import type { SelectOption } from '../_types'

export type RecipesFilters = {
   cuisine: SelectOption[]
   type: SelectOption[]
   tools: SelectOption[]
   ingredients: SelectOption[]
   intolerance: SelectOption[]
   sort?: SelectOption
}

export type RecipesParams = {
   apiKey?: string
   addRecipeInformation: boolean
   number: number
   cuisine?: string
   type?: string
   equipment?: string
   includeIngredients?: string
   intolerances?: string
   sort?: string
}
