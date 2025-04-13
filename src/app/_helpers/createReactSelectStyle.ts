import type { StylesConfig } from 'react-select'

export const createReactSelectStyle = (): StylesConfig => ({
   control: () => ({
      alignItems: 'center',
      backgroundColor: 'hsl(0, 0%, 100%)',
      borderColor: 'hsl(0, 0%, 80%)',
      borderRadius: '4px',
      borderStyle: 'solid',
      borderWidth: '1px',
      cursor: 'pointer',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      minHeight: '38px',
      outline: '0!important',
      position: 'relative',
      transition: 'all 100ms',
      boxSizing: 'border-box',
   }),
})
