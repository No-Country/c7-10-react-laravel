import {
  Box,
  Button,
  Flex,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react'
import { Link, useNavigate } from 'react-router-dom'

import logo from '../../assets/images/logo.png'
import facebookIcon from '../../assets/icons/facebook.svg'
import helpIcon from '../../assets/icons/help.svg'
import instagramIcon from '../../assets/icons/instagram.svg'
import userIcon from '../../assets/icons/user.svg'
import { useUser } from '../../hooks/useUser'
import axios from 'axios'

export const Navbar = () => {
  const { user, setUser } = useUser()
  const navigate = useNavigate()

  async function handleLogout() {
    const accessToken = localStorage.getItem('access_token')
    try {
      await axios.get(`${import.meta.env.VITE_API_URL}/logout`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      localStorage.removeItem('access_token')
      setUser({ status: false })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Flex
      justifyContent="space-between"
      align="center"
      maxW="960px"
      height="80px"
      margin="auto"
    >
      <Link to={'/'}>
        <Image src={logo} width="158px" height="45px" />
      </Link>

      <Flex gap="10px">
        <Flex align="center">
          <Menu>
            {/* opciones */}
            <MenuButton>
              <Image
                width="45"
                height="45px"
                src={userIcon}
                alt="user icon"
                marginInlineEnd="14px"
              />
            </MenuButton>

            <MenuList>
              <MenuItem>Perfil</MenuItem>
              <MenuItem>Soporte</MenuItem>
              <MenuItem>Billetera</MenuItem>
              <MenuItem>Configuración</MenuItem>
              {user.status ? (
                <MenuItem onClick={handleLogout}>Cerrar Sesión</MenuItem>
              ) : (
                <MenuItem onClick={() => navigate('login')}>
                  Iniciar Sesión
                </MenuItem>
              )}
            </MenuList>
          </Menu>
          <Box
            as={Link}
            to={user.status ? 'profile' : 'login'}
            fontSize="1.25rem"
            fontWeight="700"
          >
            {user.status ? user.name : 'Inicia sesión'}
          </Box>
        </Flex>

        <Flex align="center">
          <Image
            width="45"
            height="45px"
            src={helpIcon}
            alt="help icon"
            marginInlineEnd="14px"
          />
          <Box as={Link} fontSize="1.25rem" fontWeight="700">
            Soporte
          </Box>
        </Flex>

        <Flex align="center">
          <Image
            width="45"
            height="45px"
            src={instagramIcon}
            alt="instagram icon"
          />
        </Flex>

        <Flex align="center">
          <Image
            width="45"
            height="45px"
            src={facebookIcon}
            alt="facebook icon"
          />
        </Flex>
      </Flex>
    </Flex>
  )
}
