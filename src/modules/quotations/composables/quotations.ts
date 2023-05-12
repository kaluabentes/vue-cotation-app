import { onMounted, onUnmounted, ref } from 'vue'
import adaptQuotations from '../adapters/adaptQuotations/adaptQuotations'
import data from '../data'
import Quotation from '../models/Quotation'

const API_ENDPOINT = 'https://api.hgbrasil.com/finance?key=ea971b34&format=json-cors'

const useQuotations = () => {
  const controller = new AbortController()

  const isLoading = ref(true)
  const quotations = ref<Quotation[]>([])

  const fetchQuotations = async () => {
    try {
      isLoading.value = true
      const response = await fetch(API_ENDPOINT, { signal: controller.signal })
      const quotationsResponse = await response.json()
      quotations.value = adaptQuotations(quotationsResponse)
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
