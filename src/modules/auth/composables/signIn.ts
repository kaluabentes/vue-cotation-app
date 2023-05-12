import { useRouter } from 'vue-router'
import { USERS_STORAGE_KEY, USER_STORAGE_KEY } from '../constants'
import User from '../models/User'

interface Credentials {
  email: string
  password: string
}

const useSignIn = () => {
  const router = useRouter()

  const signIn = (credentials: Credentials) => {
    const localUsers = localStorage.getItem(USERS_STORAGE_KEY)

    if (!localUsers) {
      throw new Error('Usuário não encontrado')
    }

    const users = JSON.parse(localUsers) as User[]
    const user = users.find((user) => user.email === credentials.email)

    if (!user) {
      throw new Error('Usuário não encontrado')
    }

    if (user.password !== credentials.password) {
      throw new Error('Senha inválida')
    }

    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user))
    router.push({ name: 'dashboard' })
  }

  return { signIn }
}

export default useSignIn
