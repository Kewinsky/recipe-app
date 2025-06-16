import axios from 'axios'
import { convertRawParam } from '@/helpers'
import type { RecipesFilters, RecipesParams } from './types'

export const getRecipes = async (number = 10, filters: RecipesFilters) => {
   const params: RecipesParams = {
      apiKey: process.env.NEXT_PUBLIC_API_KEY,
      addRecipeInformation: true,
      number: number,
   }

   params.cuisine = filters?.cuisine.length
      ? convertRawParam(filters.cuisine)
      : ''
   params.type = filters?.type.length ? convertRawParam(filters.type) : ''
   params.equipment = filters?.tools.length
      ? convertRawParam(filters.tools)
      : ''
   params.includeIngredients = filters?.ingredients.length
      ? convertRawParam(filters.ingredients)
      : ''
   params.intolerances = filters?.intolerance.length
      ? convertRawParam(filters.intolerance)
      : ''
   params.sort = filters?.sort ? filters.sort.value : ''

   return await axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/complexSearch`, {
         params: params,
      })
      .then((response) => {
         return response.data
      })
      .catch((error) => {
         return Promise.reject(error)
      })
}
