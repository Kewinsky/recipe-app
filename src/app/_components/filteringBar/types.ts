import type { Dispatch } from 'react';
import type { RecipesFilters } from '../../_api';

export type FilteringTabProps = {
  filters: RecipesFilters;
  setFilters: Dispatch<React.SetStateAction<RecipesFilters>>;
};
