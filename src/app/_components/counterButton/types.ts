import type { Dispatch } from 'react'

export type CounterButtonProps = {
   isNegative?: boolean
   counter: number
   setCounter: Dispatch<React.SetStateAction<number>>
}
