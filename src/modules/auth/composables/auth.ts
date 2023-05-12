import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

import User from '../models/User'
import { USER_STORAGE_KEY } from '../constants'

const useAuth = () => {
  const isLoading = ref(true)
  const user = ref<User | undefined>()
  const router = useRouter()

  const getUser = () => {
    const localUser = sessionStorage.getItem(USER_STORAGE_KEY)

    if (!localUser) {
      router.push({ name: 'signIn' })
    }

    user.value = JSON.parse(localUser!)
  }

  onMounted(() => {
    getUser()
  })

  return { user, isLoading }
}

export default useAuth
