export type SelectOption = { value?: string; label: string }

export type RecipeItem = {
   aggregateLikes: number
   cheap: boolean
   cookingMinutes: number
   creditsText: string
   cuisines: string[]
   dairyFree: boolean
   diets: string[]
   dishTypes: string[]
   gaps: string
   glutenFree: boolean
   healthScore: number
   id: number
   image: string
   imageType: string
   lowFodmap: boolean
   occasions: string[]
   preparationMinutes: number
   pricePerServing: number
   readyInMinutes: number
   servings: number
   sourceName: string
   sourceUrl: string
   spoonacularScore: number
   spoonacularSourceUrl: string
   summary: string
   sustainable: boolean
   title: string
   vegan: boolean
   vegetarian: boolean
   veryHealthy: boolean
   veryPopular: boolean
   weightWatcherSmartPoints: number
}
