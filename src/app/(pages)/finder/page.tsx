'use client'

import FilteringTab from '@/components/filteringBar'
import ListOfRecipes from '@/components/listOfRecipes'
import ScrollTop from '@/components/scrollTop'
import { useState } from 'react'
import type { RecipeItem } from '@/types'
import type { RecipesFilters } from '@/api'

const Finder = () => {
   const [filters, setFilters] = useState<RecipesFilters>({
      cuisine: [],
      type: [],
      tools: [],
      ingredients: [],
      intolerance: [],
      sort: undefined,
   })
   const [data, setData] = useState<RecipeItem[]>([])

   return (
      <div className="container">
         <h2 className="mt-5 mb-3">Let's explore some recipes! 👨🏻‍🍳</h2>
         <div className="row">
            <FilteringTab filters={filters} setFilters={setFilters} />
            <ListOfRecipes data={data} setData={setData} filters={filters} />
         </div>
         <ScrollTop />
      </div>
   )
}
export default Finder
