import '../counterButton/counterButton.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import type { CounterButtonProps } from './types'

const CounterButton = ({
   isNegative = false,
   counter,
   setCounter,
}: CounterButtonProps) => (
   <span className="articleButton">
      {isNegative ? (
         <button onClick={() => counter && setCounter(counter - 1)}>
            <FontAwesomeIcon icon={faMinus} />
         </button>
      ) : (
         <button onClick={() => setCounter(counter + 1)}>
            <FontAwesomeIcon icon={faPlus} />
         </button>
      )}
   </span>
)

export default CounterButton
