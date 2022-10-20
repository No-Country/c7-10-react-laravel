import { Box, Center, Flex, Heading, Image } from '@chakra-ui/react'
import React from 'react'
import { SocialAuht } from './SocialAuht'
import * as yup from 'yup'

import logo from '../../assets/images/logo.png'
import mascotasImg from '../../assets/images/perro_gato.png'
import { Link, useNavigate } from 'react-router-dom'

export const scheme = yup.object({
  email: yup
    .string()
    .required('E-mail es un obligatorio.')
    .email('El e-mail debe ser un correo valido.'),
  password: yup
    .string()
    .required('La contraseña es obligatorio.')
    .min(8, 'la contraseña debe tener como mínimo 8 caracteres.'),
})

export const CardAuth = ({
  children,
  title = 'título',
  makeAccount = false,
}) => {
  const navigate = useNavigate()

  return (
    <Flex
      alignItems="center"
      flexDirection="column"
      height="100vh"
      justifyContent="center"
    >
      <Box
        border="4px solid #82A7BF"
        paddingBlockStart="40px"
        paddingInline="46px"
        position="relative"
        rounded="20px"
        width="444px"
      >
        {/* Titulo */}
        <Heading
          as={'h2'}
          fontSize="1.625rem"
          fontWeight="700"
          lineHeight="1.625rem"
          marginBlockEnd="22px"
          textAlign="center"
        >
          {title}
        </Heading>
        {/* image */}
        <Image
          alt=""
          insetBlockStart="26px"
          insetInlineStart="-117px"
          position="absolute"
          src={mascotasImg}
        />
        {/* formulario */}
        {children}

        <Box as={'span'} marginBlockStart="26px" display="inline-block">
          También puedes
        </Box>

        {/* autenticacion con redes sociales */}
        <SocialAuht />

        <Box
          as={Link}
          to={makeAccount ? '/register' : '/login'}
          textDecoration="underline"
          textAlign="right"
          fontSize="1.25rem"
          display="block"
          marginBlockStart="26px"
        >
          {makeAccount ? 'Crear una cuenta' : 'Iniciar Sessión'}
        </Box>

        <Center marginBlock="26px">
          <Image
            src={logo}
            onClick={() => navigate('/')}
            _hover={{ cursor: 'pointer' }}
          />
        </Center>
      </Box>
    </Flex>
  )
}
