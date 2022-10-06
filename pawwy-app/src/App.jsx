import { RouterProvider } from 'react-router-dom'
import { router } from './routes/AppRouter'
import { ChakraProvider } from '@chakra-ui/react'
import { useEffect } from 'react'
import theme from './theme/theme'

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  )
}

export default App
