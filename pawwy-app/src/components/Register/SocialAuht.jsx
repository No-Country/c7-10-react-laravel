import { Button, Image, Stack } from '@chakra-ui/react'
import googleIcon from '../../assets/icons/auth-icons/google.svg'
import facebookIcon from '../../assets/icons/auth-icons/facebook.svg'

export const SocialAuht = () => {
  return (
    <Stack spacing="18px" marginBlockStart="16px">
      <Button
        _hover={{
          backgroundColor: 'blackAlpha.800',
        }}
        alignItems="center"
        backgroundColor="black"
        color="white"
        fontSize="1.25rem"
        fontWeight="400"
        height="40px"
        justifyItems="center"
        lineHeight="20px"
        rounded="14px"
      >
        <Image src={googleIcon} alt="" marginRight="6px" />
        Iniciar sesión con Google
      </Button>

      <Button
        _hover={{
          backgroundColor: 'blackAlpha.800',
        }}
        alignItems="center"
        backgroundColor="black"
        color="white"
        fontSize="1.25rem"
        fontWeight="400"
        height="40px"
        justifyItems="center"
        lineHeight="20px"
        rounded="14px"
      >
        <Image src={facebookIcon} alt="" marginRight="6px" />
        Iniciar sesión con Facebook
      </Button>
    </Stack>
  )
}
