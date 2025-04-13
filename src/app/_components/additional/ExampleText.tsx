import type { ExampleTextProps } from './types'

const ExampleText = ({ maxLength }: ExampleTextProps) => {
   let text =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur nunc sit amet ornare bibendum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut elit lectus, blandit vitae augue quis, commodo accumsan dolor. Ut rutrum urna mi, quis mollis purus facilisis non. Vestibulum sit amet justo ipsum. Phasellus vel dui molestie, consequat tortor id, dignissim sapien. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum tincidunt condimentum arcu nec vulputate. Vivamus volutpat, leo et dictum efficitur, velit leo malesuada libero, vel ultrices purus sem vel orci. Proin mollis nunc quis porta sollicitudin. Vestibulum vehicula ligula non nunc aliquet aliquam. Donec ut risus id ex faucibus bibendum a dictum erat. Mauris bibendum nec tellus ut faucibus. Vivamus et metus malesuada, condimentum augue sit amet, ornare erat. Ut nibh arcu, sollicitudin eu risus eget, accumsan vestibulum diam.'

   if (maxLength) {
      //trim the string to the maximum length
      text = text.slice(0, maxLength)

      //re-trim if we are in the middle of a word
      text = text.slice(0, Math.min(text.length, text.lastIndexOf(' ')))
   }

   return <p>{text}</p>
}

export default ExampleText
