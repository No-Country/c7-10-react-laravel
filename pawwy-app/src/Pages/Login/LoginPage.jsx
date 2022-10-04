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
import { FastField, Form, Formik } from 'formik'

import { CardAuth, scheme } from '../../components/Register/CardAuth'

export const LoginPage = () => {
  return (
    <CardAuth title="Login" makeAccount={true}>
      {/* formulario  */}
      <Formik
        initialValues={{
          email: '',
          password: '',
          remember: false,
        }}
        validationSchema={scheme}
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
