import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Stack,
} from '@chakra-ui/react'
import { FastField, Form, Formik } from 'formik'
import { CardAuth, scheme } from '../../components/Register/CardAuth'

export const RegisterPage = () => {
  return (
    <CardAuth title="Register" makeAccount={false}>
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
                  mb="28px"
                />
                <FormErrorMessage>{meta.error}</FormErrorMessage>
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
