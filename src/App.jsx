import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import { LogIn } from 'lucide-react'
import LoginPage from './authentication/Login'
import RegisterPage from './authentication/Register'
import LibrarianDashboard from './dashboard/libariandashboar/libarian'
import DailyTasks from './dashboard/libariandashboar/Dailytask'
import AddNewTask from './dashboard/libariandashboar/Taskform'
import Display from './dashboard/libariandashboar/Display'
import AddBook from './dashboard/libariandashboar/Addbook'
import Checkout from './dashboard/libariandashboar/Checkout'
import Returns from './dashboard/libariandashboar/Return'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/dailytasks' element={<DailyTasks />} />
        <Route path='/addtask' element={<AddNewTask />} />
        <Route path='/displaybooks' element={<Display />} />
        <Route path='/addbook' element={<AddBook />} />
        <Route path='/return' element={<Returns />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/librariandashboard' element={<LibrarianDashboard />} />
        {/* <Route path='/biometric' element={<BiometricSetup />} /> */}
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
