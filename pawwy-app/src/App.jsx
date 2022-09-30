import { RouterProvider } from 'react-router-dom'
import { router } from './routes/AppRouter'
import { ChakraProvider } from '@chakra-ui/react'

const App = () => {
  return (
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  )
}

export default App
