import { BsGoogle } from 'react-icons/bs'
import { FiLogIn } from 'react-icons/fi'

// Components
import Header from '../../components/header/header.component'
import CustomButton from '../../components/custom-button/custom-button.component'

// Styles
import { LoginContainer, LoginHeadline, LoginInputContainer, LoginSubtitle, LoginContent } from './login.styles'
import CustomInpunt from '../../components/custom-input/custom-input.component'
import { useForm } from 'react-hook-form'

const LoginPage = () => {
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm()

  const handleSubmitPress = (data: any) => {
    console.log({ data })
  }

  return (
        <>
           <Header />

           <LoginContainer>
                <LoginContent>
                <LoginHeadline>Entre com sua conta </LoginHeadline>

                <CustomButton startIcon={<BsGoogle size={18} /> } >Entrar com Google</CustomButton>

                <LoginSubtitle> ou entre com seu e-mail</LoginSubtitle>

                <LoginInputContainer>
                  <p>E-mail</p>
                  <CustomInpunt
                     hasError={!!errors?.email}
                     placeholder='Digite seu e-mail'
                  {...register('email', { required: true })}/>
                </LoginInputContainer>

                <LoginInputContainer>
                  <p>Senha</p>
                  <CustomInpunt
                    hasError={!!errors?.password}
                    placeholder='Digite sua senha'
                  {...register('password', { required: true })}/>
                </LoginInputContainer>

                <CustomButton
                   startIcon={<FiLogIn size={18} />}
                    onClick={() => handleSubmit(handleSubmitPress)()}>Entrar</CustomButton>
                </LoginContent>

           </LoginContainer>
        </>
  )
}

export default LoginPage
