import { RouterProvider, useNavigate } from 'react-router-dom'
import { router } from './routes/AppRouter'
import { Center, ChakraProvider, Spinner } from '@chakra-ui/react'
import '@fontsource/sulphur-point'
import theme from './theme/theme'
import { UserProvider } from './context/UserProvider'
import { useUser } from './hooks/useUser'
import { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
  const { user, setUser } = useUser()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const access_token = localStorage.getItem('access_token')

    axios
      .get(`${import.meta.env.VITE_API_URL}/user`, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      })
      .then((resp) => {
        if (resp.status === 200) {
          setUser({ ...resp.data, status: true })
        }
      })
      .catch(() => {
        localStorage.removeItem('access_token')
        setUser({ status: false })
      })
      .finally(() => setLoading(false))
  }, [])

  // mostrar un espiner si se esta cargando
  if (loading) {
    return (
      <ChakraProvider>
        <Center h="100vh">
          <Spinner />
        </Center>
      </ChakraProvider>
    )
  }

  return (
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  )
}

export default App
