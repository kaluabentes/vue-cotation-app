import { createApp } from 'vue'

import App from '@/App.vue'
import router from '@/router'
import '@/assets/global.css'
import '@fontsource/poppins/400.css'
import '@fontsource/poppins/500.css'
import '@fontsource/poppins/600.css'
import '@fontsource/poppins/700.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
