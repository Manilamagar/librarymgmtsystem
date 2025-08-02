import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import { LogIn } from 'lucide-react'
import LoginPage from './authentication/Login'
import RegisterPage from './authentication/Register'
import BiometricSetup from './authentication/Biometric'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        {/* <Route path='/biometric' element={<BiometricSetup />} /> */}
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
