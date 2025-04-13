import type { SelectOption } from '@/types'

export const CUISINE: SelectOption[] = [
   { value: 'american', label: 'American' },
   { value: 'chinese', label: 'Chinese' },
   { value: 'european', label: 'European' },
   { value: 'greek', label: 'Greek' },
   { value: 'mexican', label: 'Mexican' },
   { value: 'thai', label: 'Thai' },
]

export const TYPE: SelectOption[] = [
   { value: 'breakfast', label: 'Breakfast' },
   { value: 'dessert', label: 'Dessert' },
   { value: 'fingerfood', label: 'Fingerfood' },
   { value: 'main course', label: 'Main course' },
   { value: 'soup', label: 'Soup' },
   { value: 'snack', label: 'Snack' },
]

export const TOOLS: SelectOption[] = [
   { value: 'blender', label: 'Blender' },
   { value: 'bowl', label: 'Bowl' },
   { value: 'frying pan', label: 'Frying Pan' },
   { value: 'pan', label: 'Pan' },
   { value: 'pot', label: 'Pot' },
   { value: 'stove', label: 'Stove' },
]

export const INGREDIENTS: SelectOption[] = [
   { value: 'apple', label: 'Apple' },
   { value: 'bacon', label: 'Bacon' },
   { value: 'beans', label: 'Beans' },
   { value: 'beef', label: 'Beef' },
   { value: 'bread', label: 'Bread' },
   { value: 'carp', label: 'Carp' },
   { value: 'carrots', label: 'Carrots' },
   { value: 'cheese', label: 'Cheese' },
   { value: 'chicken base', label: 'Chicken' },
   { value: 'dried tomatoes', label: 'Dried Tomatoes' },
   { value: 'egg substitute', label: 'Egg' },
   { value: 'fish', label: 'Fish' },
   { value: 'garlic', label: 'Garlic' },
   { value: 'hazelnuts', label: 'Hazelnuts' },
   { value: 'jalapeno', label: 'Jalapeno' },
   { value: 'kiwis', label: 'Kiwi' },
   { value: 'lamb', label: 'Lamb' },
   { value: 'milk', label: 'Milk' },
   { value: 'onion', label: 'Onion' },
   { value: 'pasta', label: 'Pasta' },
]

export const INTOLERANCE: SelectOption[] = [
   { value: 'dairy', label: 'Dairy' },
   { value: 'egg', label: 'Egg' },
   { value: 'gluten', label: 'Gluten' },
   { value: 'grain', label: 'Grain' },
   { value: 'peanut', label: 'Peanut' },
   { value: 'seafood', label: 'Seafood' },
   { value: 'soy', label: 'Soy' },
   { value: 'wheat', label: 'Wheat' },
]

export const SORTING_OPTIONS: SelectOption[] = [
   { value: 'time', label: 'Time' },
   { value: 'price', label: 'Price' },
   { value: 'servings', label: 'Servings' },
   { value: undefined, label: 'Default' },
]
