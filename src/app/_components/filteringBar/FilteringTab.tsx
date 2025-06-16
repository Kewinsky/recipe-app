import './filteringTab.scss'
import Select from 'react-select'
import {
   CUISINE,
   TYPE,
   TOOLS,
   INGREDIENTS,
   INTOLERANCE,
   SORTING_OPTIONS,
} from '@/const'
import { createReactSelectStyle } from '@/helpers'
import type { FilteringTabProps } from './types'
import type { SelectOption } from '../../_types'

const FilteringTab = ({ filters, setFilters }: FilteringTabProps) => {
   const styles = createReactSelectStyle()

   return (
      <div className="col-12 col-md-3">
         <div className="filteringTab p-3 shadow">
            <Select
               options={CUISINE}
               placeholder="Select cuisine"
               className="mb-2 filteringTabSelect"
               isMulti
               styles={styles}
               value={filters.cuisine}
               onChange={(val) =>
                  setFilters((prev) => ({
                     ...prev,
                     cuisine: val as SelectOption[],
                  }))
               }
            />
            <Select
               options={TYPE}
               placeholder="Select type"
               className="mb-2 filteringTabSelect"
               isMulti
               styles={styles}
               value={filters.type}
               onChange={(val) =>
                  setFilters((prev) => ({
                     ...prev,
                     type: val as SelectOption[],
                  }))
               }
            />

            <Select
               options={TOOLS}
               placeholder="Select tools"
               className="mb-2 filteringTabSelect"
               isMulti
               styles={styles}
               value={filters.tools}
               onChange={(val) =>
                  setFilters((prev) => ({
                     ...prev,
                     tools: val as SelectOption[],
                  }))
               }
            />

            <Select
               options={INGREDIENTS}
               placeholder="Select ingredients"
               className="mb-2 filteringTabSelect"
               isMulti
               styles={styles}
               value={filters.ingredients}
               onChange={(val) =>
                  setFilters((prev) => ({
                     ...prev,
                     ingredients: val as SelectOption[],
                  }))
               }
            />

            <Select
               options={INTOLERANCE}
               placeholder="Select intolerance"
               className="mb-2 filteringTabSelect"
               isMulti
               styles={styles}
               value={filters.intolerance}
               onChange={(val) =>
                  setFilters((prev) => ({
                     ...prev,
                     intolerance: val as SelectOption[],
                  }))
               }
            />

            <Select
               options={SORTING_OPTIONS}
               placeholder="Sort"
               className="mb-2 filteringTabSelect"
               styles={styles}
               value={filters.sort}
               onChange={(val) =>
                  setFilters((prev) => ({
                     ...prev,
                     sort: val as SelectOption,
                  }))
               }
            />
         </div>
      </div>
   )
}
export default FilteringTab
