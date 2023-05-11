import { FunctionComponent, useContext, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { collection, getDocs, query, where } from '@firebase/firestore'
import { UserContext } from './contexts/user.context'
import { onAuthStateChanged } from '@firebase/auth'

// Pages
import HomePage from './pages/home/home.page'
import LoginPage from './pages/login/login.page'
import SignUpPage from './pages/sign-up/sign-up.page'

// Utilities
import { auth, db } from './config/firebase.config'
import { userConverter } from './converters/firestore.converters'
import Loading from './components/loading/loading.component'

const App: FunctionComponent = () => {
  const { isAuthenticated, loginUser, logoutUser } = useContext(UserContext)
  const [isInitializing, setIsInitializing] = useState(true)

  onAuthStateChanged(auth, async (user) => {
    const isSigningOut = isAuthenticated && !user

    if (isSigningOut) {
      logoutUser()
      return setIsInitializing(false)
    }

    const isSigningIn = !isAuthenticated && user

    if (isSigningIn) {
      const querySnapshot = await getDocs(query(collection(db, 'users').withConverter(userConverter), where('id', '==', user.uid)
      ))

      const userFromFireStore = querySnapshot.docs[0]?.data()

      loginUser(userFromFireStore)

      return setIsInitializing(false)
    }

    setIsInitializing(false)
  })

  if (isInitializing) return <Loading />

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/sign-up' element={<SignUpPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
