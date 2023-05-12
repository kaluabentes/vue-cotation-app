import { useRouter } from 'vue-router'
import { USER_STORAGE_KEY } from '../constants'

const useSignOut = () => {
  const router = useRouter()

  const signOut = () => {
    localStorage.removeItem(USER_STORAGE_KEY)
    router.push({ name: 'signIn' })
  }

  return { signOut }
}

export default useSignOut
