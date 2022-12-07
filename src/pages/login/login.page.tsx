import { BsGoogle } from 'react-icons/bs'
import { FiLogIn } from 'react-icons/fi'

// Components
import Header from '../../components/header/header.component'
import CustomButton from '../../components/custom-button/custom-button.component'

// Styles
import { LoginContainer, LoginHeadline, LoginInputContainer, LoginSubtitle, LoginContent } from './login.styles'

const LoginPage = () => {
  return (
        <>
           <Header />

           <LoginContainer>
                <LoginContent>
                <LoginHeadline>Entre com sua conta </LoginHeadline>

                <CustomButton startIcon={<BsGoogle size={18} /> } >Entrar com Google</CustomButton>

                <LoginSubtitle> ou entre com seu e-mail</LoginSubtitle>

                <LoginInputContainer>{/* Email input */}</LoginInputContainer>
                <LoginInputContainer>{/* password input */}</LoginInputContainer>

                <CustomButton startIcon={<FiLogIn size={18} />}>Entrar</CustomButton>
                </LoginContent>

           </LoginContainer>
        </>
  )
}

export default LoginPage
