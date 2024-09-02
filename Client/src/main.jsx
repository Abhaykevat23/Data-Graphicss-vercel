import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Header from './component/Header.jsx'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Footer from './component/Footer.jsx' 
import About from './Pages/About.jsx'
import Login from './Pages/Login.jsx'
import SignUp from './Pages/SignUp.jsx'
import Analytics from './Pages/Analytics.jsx'
import ForgetPassword from './Pages/ForgetPassword.jsx'
import ChangePassword from './Pages/ChangePassword.jsx'
import HowToUse from './Pages/HowToUse.jsx'

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([{
  path: '/',
  element: <Layout />,
  children: [
    {
      path:'/',
      element:<App />
    },
    {
      path:'/about',
      element:<About />
    },
    {
      path:'/analytics',
      element:<Analytics />
    },
    {
      path:'/login',
      element:<Login />
    },
    {
      path:'/signup',
      element:<SignUp />
    },
    {
      path:'/password',
      element:<ForgetPassword />
    },
    {
      path:'/changepassword',
      element:<ChangePassword />
    },
    {
      path:'/howtouse',
      element:<HowToUse />
    },
  ]
}])


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
