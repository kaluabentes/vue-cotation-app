import { useRouter } from 'vue-router'

import { SESSION_EXPIRE_TIME } from '@/config/constants'
import { USERS_STORAGE_KEY, USER_STORAGE_KEY } from '../constants'
import User from '../models/User'
import useSignOut from './signOut'

interface Credentials {
  email: string
  password: string
}

let expireTimeout: NodeJS.Timeout

const useSignIn = () => {
  const router = useRouter()
  const { signOut } = useSignOut()

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

    sessionStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user))
    clearTimeout(expireTimeout)
    expireTimeout = setTimeout(() => signOut(), SESSION_EXPIRE_TIME)
    router.push({ name: 'dashboard' })
  }

  return { signIn }
}

export default useSignIn
