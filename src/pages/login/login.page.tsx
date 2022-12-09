import { BsGoogle } from 'react-icons/bs'
import { FiLogIn } from 'react-icons/fi'
import { useForm } from 'react-hook-form'
import validator from 'validator'

// Components
import Header from '../../components/header/header.component'
import CustomButton from '../../components/custom-button/custom-button.component'
import { InputErrorMessageContainer } from '../../components/input-error-message/input-error-message'
import CustomInpunt from '../../components/custom-input/custom-input.component'

// Styles
import { LoginContainer, LoginHeadline, LoginInputContainer, LoginSubtitle, LoginContent } from './login.styles'

const LoginPage = () => {
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm()

  const handleSubmitPress = (data: any) => {
    console.log({ data })
  }

  console.log(errors)
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
                  {...register('email', {
                    required: true,
                    validate: (value) => {
                      return validator.isEmail(value)
                    }
                  })}/>

                  {errors?.email?.type === 'required' && (
                    <InputErrorMessageContainer>O e-mail é obrigatório.</InputErrorMessageContainer>
                  )}

                  {errors?.email?.type === 'validate' && (
                    <InputErrorMessageContainer>Por favor, insira um e-mail válido.</InputErrorMessageContainer>
                  )}
                </LoginInputContainer>

                <LoginInputContainer>
                  <p>Senha</p>
                  <CustomInpunt
                    hasError={!!errors?.password}
                    placeholder='Digite sua senha'
                  {...register('password', { required: true })}/>

                  {errors?.password?.type === 'required' && (
                    <InputErrorMessageContainer>A senha é obrigatória.</InputErrorMessageContainer>
                  )}
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
