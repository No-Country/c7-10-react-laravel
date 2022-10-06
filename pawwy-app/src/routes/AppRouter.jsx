import { createBrowserRouter } from 'react-router-dom'
import { ErrorPage } from '../Pages/ErrorPage'
import { RootPage } from '../Pages/RootPage'
import { LoginPage } from '../Pages/Login/LoginPage'
import { RegisterPage } from '../Pages/Register/RegisterPage'
import { HomePage } from '../Pages/Home/HomePage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
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
