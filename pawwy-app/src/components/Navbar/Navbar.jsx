import { Box, Button, Flex, Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

import logo from '../../assets/images/logo.png'
import facebookIcon from '../../assets/icons/facebook.svg'
import helpIcon from '../../assets/icons/help.svg'
import instagramIcon from '../../assets/icons/instagram.svg'
import userIcon from '../../assets/icons/user.svg'

export const Navbar = () => {
  return (
    <Flex
      justifyContent="space-between"
      align="center"
      maxW="960px"
      height="80px"
      margin="auto"
    >
      <Image src={logo} width="158px" height="45px" />

      <Flex gap="10px">
        <Flex align="center">
          <Image
            width="45"
            height="45px"
            src={userIcon}
            alt="user icon"
            marginInlineEnd="14px"
          />
          <Box as={Link} fontSize="1.25rem" fontWeight="700">
            Usuario
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
