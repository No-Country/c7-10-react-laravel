import {
  Button,
  Checkbox,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Link,
  Stack,
} from '@chakra-ui/react'
import axios from 'axios'
import { FastField, Form, Formik } from 'formik'

import { useNavigate } from 'react-router-dom'
import { CardAuth, scheme } from '../../components/Register/CardAuth'
import { useAuth } from '../../hooks/useAuth'
import { useUser } from '../../hooks/useUser'
import { buildFormikErrors } from '../../utils/utils/builFormikErrors'

export const LoginPage = () => {
  const { handleSubmit } = useAuth()

  return (
    <CardAuth title="Login" makeAccount={true}>
      {/* lo de google */}
      <div id="signInDiv"></div>

      {/* formulario  */}
      <Formik
        initialValues={{
          email: '',
          password: '',
          remember: false,
        }}
        validationSchema={scheme}
        onSubmit={handleSubmit}
      >
        {/* form */}
        <Stack as={Form}>
          {/* email */}
          <FastField name="email">
            {({ field, meta }) => (
              <FormControl isInvalid={!!meta.error}>
                <FormLabel>E-mail:</FormLabel>
                <Input
                  {...field}
                  borderColor="#82A7BF"
                  id="email"
                  placeholder="Ejemplo@pawwy.com"
                  rounded="14px"
                  type="email"
                />
                <FormErrorMessage>{meta.error}</FormErrorMessage>
              </FormControl>
            )}
          </FastField>

          {/* password */}
          <FastField name="password">
            {({ field, meta }) => (
              <FormControl isInvalid={!!meta.error}>
                <FormLabel mt="14px">Password:</FormLabel>
                <Input
                  {...field}
                  borderColor="#82A7BF"
                  id="password"
                  placeholder="Mínimo 8 caracteres"
                  rounded="14px"
                  type="password"
                />
                <FormErrorMessage>{meta.error}</FormErrorMessage>
              </FormControl>
            )}
          </FastField>

          {/* remember */}
          <FastField name="remember">
            {({ field, meta }) => (
              <FormControl isInvalid={!!meta.error}>
                <Checkbox {...field} isChecked={field.value} mt="4px">
                  Recordarme
                </Checkbox>
                <Link display="block" mt="14px">
                  ¿Olvidaste tu contraseña?
                </Link>
              </FormControl>
            )}
          </FastField>

          {/* boton para submit */}
          <Button
            _hover={{ backgroundColor: '#c9754b' }}
            backgroundColor="#E48555"
            color="black"
            fontSize="1.25rem"
            fontWeight="700"
            height="40px"
            rounded="14px"
            type="submit"
          >
            Iniciar Sesión
          </Button>
        </Stack>
      </Formik>
    </CardAuth>
  )
}
