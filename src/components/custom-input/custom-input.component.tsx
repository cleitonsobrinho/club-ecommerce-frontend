import React, { FunctionComponent, InputHTMLAttributes } from 'react'
import { CustomInputContainer } from './custom-input.styles'

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
    hasError?: boolean
}

const CustomInpunt: FunctionComponent<CustomInputProps> = React.forwardRef(
  (props, ref) => {
    return <CustomInputContainer {...props} ref={ref as any}/>
  }
)

CustomInpunt.displayName = 'CustomInput'

export default CustomInpunt
