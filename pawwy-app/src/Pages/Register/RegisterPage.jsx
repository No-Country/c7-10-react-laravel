import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Stack,
} from '@chakra-ui/react'
import axios from 'axios'
import { FastField, Form, Formik } from 'formik'
import { useNavigate } from 'react-router-dom'
import { CardAuth, scheme } from '../../components/Register/CardAuth'
import { useAuth } from '../../hooks/useAuth'
import { buildFormikErrors } from '../../utils/utils/builFormikErrors'

export const RegisterPage = () => {
  // const navigate = useNavigate()
  const { handleSubmit } = useAuth('register')
  // async function handleRegisterSubmit(values, formikBag) {
  //   try {
  //     const { data } = await axios.post(
  //       `${import.meta.env.VITE_API_URL}/register`,
  //       {
  //         ...values,
  //       }
  //     )

  //     localStorage.setItem('access_token', data.access_token)
  //     navigate('/')
  //   } catch (error) {
  //     const errors = buildFormikErrors(error?.response?.data?.errors)
  //     formikBag.setErrors(errors)
  //     localStorage.removeItem('access_token')
  //   }
  // }

  return (
    <CardAuth title="Register" makeAccount={false}>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        onSubmit={handleSubmit}
        validationSchema={scheme}
      >
        {/* form */}
        <Stack as={Form}>
          {/* name */}
          <FastField name="name">
            {({ field, meta }) => (
              <FormControl isInvalid={!!meta.error}>
                <FormLabel>Name:</FormLabel>
                <Input
                  {...field}
                  borderColor="#82A7BF"
                  id="name"
                  placeholder="Tu nombre"
                  rounded="14px"
                  type="text"
                />
                <FormErrorMessage>{meta.error}</FormErrorMessage>
              </FormControl>
            )}
          </FastField>

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
