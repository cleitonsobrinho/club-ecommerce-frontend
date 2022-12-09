
import { FunctionComponent } from 'react'

// Styles
import { InputErrorMessageContainer } from './input-error-message'

const InputErrorMessage: FunctionComponent = ({ children }) => {
  return <InputErrorMessageContainer>{children}</InputErrorMessageContainer>
}

export default InputErrorMessage
