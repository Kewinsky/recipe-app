'use client'

import RecipeElement from '@/components/recipeElement'
import InfiniteScroll from 'react-infinite-scroller'
import { getRecipes } from '@/api'
import { useEffect, useState } from 'react'
import Loader from '@/components/loader'
import type { ListOfRecipesProps } from './types'

const ListOfRecipes = ({ data, setData, filters }: ListOfRecipesProps) => {
   const [page, setPage] = useState<number>(1)
   const [error, setError] = useState<string>('')
   const [currentItems, setCurrentItems] = useState<number>(10)
   const [totalResults, setTotalResults] = useState<number>()

   const handleData = async (page: number): Promise<void> => {
      await getRecipes(page * 10, filters).then(
         (res) => {
            setError('')
            setCurrentItems(page * 10)
            setPage(page)
            setTotalResults(res.totalResults)
            setData(res.results)
         },
         (error) => {
            setError(error.message)
         },
      )
   }

   useEffect(() => {
      handleData(1)
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [filters])

   return (
      <div className="col-12 col-md-9">
         <InfiniteScroll
            initialLoad={false}
            threshold={500}
            loadMore={() => handleData(page + 1)}
            hasMore={
               !error.length
                  ? totalResults
                     ? currentItems < totalResults
                     : true
                  : false
            }
            loader={<Loader key={0} />}
         >
            {!totalResults || data.length || error.length ? (
               data.map((recipe) => (
                  <RecipeElement recipe={recipe} key={recipe.id} />
               ))
            ) : (
               <p className="text-center my-4">Nothing to show</p>
            )}
         </InfiniteScroll>
         {error.length ? (
            <div className="error text-center text-danger my-4">{error}</div>
         ) : null}
      </div>
   )
}
export default ListOfRecipes
