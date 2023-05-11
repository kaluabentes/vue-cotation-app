import { createApp } from 'vue'

import App from '@/App.vue'
import router from '@/router'
import '@/assets/global.css'
import '@fontsource/poppins'

const app = createApp(App)

app.use(router)

app.mount('#app')
