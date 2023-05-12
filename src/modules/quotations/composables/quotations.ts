import { onMounted, onUnmounted, ref } from 'vue'

const API_ENDPOINT = 'https://api.hgbrasil.com/finance?key=ea971b34'

const useQuotations = () => {
  const controller = new AbortController()

  const isLoading = ref(true)
  const quotations = ref([])

  const fetchQuotations = async () => {
    try {
      isLoading.value = true
      const response = await fetch(API_ENDPOINT, { signal: controller.signal })
      const quotations = await response.json()
      console.log('quotations', quotations)
    } catch (error: any) {
      console.log('useQuotations error: ', error)
    } finally {
      isLoading.value = false
    }
  }

  onMounted(() => {
    fetchQuotations()
  })

  onUnmounted(() => {
    controller.abort()
  })

  return { quotations, fetchQuotations, isLoading }
}

export default useQuotations
