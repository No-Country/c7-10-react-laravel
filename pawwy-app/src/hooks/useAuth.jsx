import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { buildFormikErrors } from '../utils/utils/builFormikErrors'
import { useUser } from './useUser'

export const useAuth = (type = 'login') => {
  const { setUser } = useUser()
  const navigate = useNavigate()

  console.log(type)
  async function handleSubmit(values, formikBag) {
    console.log(values, formikBag)
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/${type}`,
        {
          ...values,
        }
      )

      localStorage.setItem('access_token', data.access_token)
      setUser({ ...data.user, status: true })
      navigate('/')
    } catch (error) {
      const errors = buildFormikErrors(error?.response?.data?.errors)
      formikBag.setErrors(errors)
      localStorage.removeItem('access_token')
    }
  }
  return { handleSubmit }
}
