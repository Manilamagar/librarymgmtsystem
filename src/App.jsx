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
import StudentDashboard from './dashboard/Studentdashboard/Studentdashboard'
import MyBooks from './dashboard/Studentdashboard/Mybooks'
import Fines from './dashboard/Studentdashboard/Fines'
import ReadingHistory from './dashboard/Studentdashboard/Readinghistory'
import RecommendedBooks from './dashboard/Studentdashboard/RecommendBooks'
import NewArrivals from './dashboard/Studentdashboard/Newarrival'
import AdminDashboard from './dashboard/Admindashboard/Admindashboard'
import ManageUsers from './dashboard/Admindashboard/Manageusers'
import BookInventory from './dashboard/Admindashboard/Bookinventory'
import Reports from './dashboard/Admindashboard/Reports'

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
        <Route path='/studentdashboard' element={<StudentDashboard />} />
        <Route path='/mybooks' element={<MyBooks />} />
        <Route path='/fines' element={<Fines />} />
        <Route path='/users' element={<ManageUsers />} />
        <Route path='/reports' element={<Reports />} />
        <Route path='/bookinventory' element={<BookInventory />} />
        <Route path='/newarrival' element={<NewArrivals />} />
        <Route path='/admindashboard' element={<AdminDashboard />} />
        <Route path='/recommend' element={<RecommendedBooks />} />
        <Route path='/readinghistory' element={<ReadingHistory />} />
        <Route path='/librariandashboard' element={<LibrarianDashboard />} />
        <Route path='/Slidebar' element={<Slidebar />} />
        {/* <Route path='/biometric' element={<BiometricSetup />} /> */}
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
