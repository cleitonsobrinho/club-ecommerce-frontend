// Utilits
import { BsCart3 } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../../contexts/user.context'
import { signOut } from '@firebase/auth'

// Styles
import {
  HeaderContainer,
  HeaderItems,
  HeaderItem,
  HeaderTitle
} from './header.styles'

// Utilities
import { auth } from '../../config/firebase.config'

const Header = () => {
  const navigate = useNavigate()

  const { isAuthenticated } = useContext(UserContext)

  const handleLogoClick = () => {
    navigate('/')
  }

  const handleLoginClick = () => {
    navigate('/login')
  }

  const handleSignUpClick = () => {
    navigate('/sign-up')
  }
  return (
    <HeaderContainer>
        <HeaderTitle onClick={handleLogoClick}>CLUB CLOTHING</HeaderTitle>

        <HeaderItems>
           <HeaderItem>Explorar</HeaderItem>
           {!isAuthenticated && (
            <>
                <HeaderItem onClick={handleLoginClick}>Login</HeaderItem>
                <HeaderItem onClick={ handleSignUpClick}>Criar Conta</HeaderItem>
            </>
           )}

           {isAuthenticated && (
            <>
                <HeaderItem onClick={ () => signOut(auth)}>Sair</HeaderItem>
            </>
           )}
           <HeaderItem>
             <BsCart3 size={25} />
              <p style={{ marginLeft: 5 }}>5</p>
           </HeaderItem>
        </HeaderItems>
    </HeaderContainer>
  )
}

export default Header
