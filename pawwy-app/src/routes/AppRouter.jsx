import { createBrowserRouter } from 'react-router-dom'
import { ErrorPage } from '../Pages/ErrorPage'
import { HomePage } from '../Pages/Home/HomePage'
import { LoginPage } from '../Pages/Login/LoginPage'
import { RegisterPage } from '../Pages/Register/RegisterPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
    errorElement: <ErrorPage />,
  },
])
