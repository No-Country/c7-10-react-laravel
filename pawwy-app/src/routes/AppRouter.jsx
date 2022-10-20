import { createBrowserRouter } from 'react-router-dom'
import { ErrorPage } from '../Pages/ErrorPage'
import { RootPage } from '../Pages/RootPage'
import { LoginPage } from '../Pages/Login/LoginPage'
import { RegisterPage } from '../Pages/Register/RegisterPage'
import { HomePage } from '../Pages/Home/HomePage'
import { UserProvider } from '../context/UserProvider'
import { ProtectedRoute } from './ProtectedRoute'
import { SearchPage } from '../Pages/Search/SearchPage'
import { PetCare } from '../Pages/PetCare/PetCare'

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
      {
        path: 'search',
        element: <SearchPage />,
      },
      {
        path: 'cuidador/:cuidadorId',
        element: <PetCare />,
        errorElement: <ErrorPage />,
      },
    ],
  },
  {
    path: 'login',
    element: (
      <ProtectedRoute>
        <LoginPage />
      </ProtectedRoute>
    ),
  },
  {
    path: 'register',
    element: (
      <ProtectedRoute>
        <RegisterPage />
      </ProtectedRoute>
    ),
  },
])

// createBrowserRouter([
//   {
//     path: '/',
//     element: <RootPage />,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         index: true,
//         element: <HomePage />,
//       },
//     ],
//   },
//   {
//     path: '/login',
//     element: <LoginPage />,
//     errorElement: <ErrorPage />,
//   },
//   {
//     path: '/register',
//     element: <RegisterPage />,
//     errorElement: <ErrorPage />,
//   },
// ],)
