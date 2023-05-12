import { USERS_STORAGE_KEY } from '../constants'
import User from '../models/User'

const useSignUp = () => {
  const signUp = (userData: User) => {
    const localUsers = localStorage.getItem(USERS_STORAGE_KEY)

    if (localUsers) {
      const users = JSON.parse(localUsers)
      const newUsers = [...users, userData]
      localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(newUsers))
      return
    }

    localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify([userData]))
  }

  const verifyEmailExists = (email: string) => {
    const localUsers = localStorage.getItem(USERS_STORAGE_KEY)

    if (!localUsers) {
      return false
    }

    const users = JSON.parse(localUsers) as User[]
    const existingUser = users.find((user) => user.email === email)

    return Boolean(existingUser)
  }

  return { signUp, verifyEmailExists }
}

export default useSignUp
