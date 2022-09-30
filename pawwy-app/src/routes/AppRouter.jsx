import { createBrowserRouter } from 'react-router-dom'
import { ErrorPage } from '../Pages/ErrorPage'
import { HomePage } from '../Pages/Home/HomePage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
])
