import { onMounted, onUnmounted, ref } from 'vue'
import adaptQuotations from '../adapters/adaptQuotations/adaptQuotations'
import data from '../data'
import Quotation from '../models/Quotation'

// const API_ENDPOINT = 'https://api.hgbrasil.com/finance?key=ea971b34'

const fakeFetchQuotations = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(data)
    }, 1000)
  })

const useQuotations = () => {
  const controller = new AbortController()

  const isLoading = ref(true)
  const quotations = ref<Quotation[]>([])

  const fetchQuotations = async () => {
    try {
      isLoading.value = true
      // A API segurida está tendo problema de CORS
      // por isso optei por mockar a resposta num fake fetch
      // const response = await fetch(API_ENDPOINT, { signal: controller.signal })
      // const quotations = await response.json()
      const quotationsResponse = await fakeFetchQuotations()
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
