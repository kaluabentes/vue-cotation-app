import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

import User from '../models/User'

const STORAGE_KEY = 'vue-quotation-app.user'

const useAuth = () => {
  const isLoading = ref(true)
  const user = ref<User | undefined>()
  const router = useRouter()

  const getUser = () => {
    const localUser = localStorage.getItem(STORAGE_KEY)

    if (!localUser) {
      router.push({ name: 'signIn' })
    }

    user.value = JSON.parse(localUser!)
    isLoading.value = false
  }

  onMounted(() => {
    getUser()
  })

  return { user, isLoading }
}

export default useAuth
