import Header from '../../components/header/header.component'
import { LoginContainer, LoginHeadline, LoginInputContainer, LoginSubtitle, LoginContent } from './login.styles'

const LoginPage = () => {
  return (
        <>
           <Header />

           <LoginContainer>
                <LoginContent>
                <LoginHeadline>Entre com sua conta </LoginHeadline>

                    {/*  Button */ }

                <LoginSubtitle> ou entre com seu e-mail</LoginSubtitle>

                <LoginInputContainer>{/* Email input */}</LoginInputContainer>
                <LoginInputContainer>{/* password input */}</LoginInputContainer>

                {/* Botton */}
                </LoginContent>

           </LoginContainer>
        </>
  )
}

export default LoginPage
