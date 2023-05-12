import { createApp } from 'vue'
import { OhVueIcon } from 'oh-vue-icons'
import '@fontsource/poppins/400.css'
import '@fontsource/poppins/500.css'
import '@fontsource/poppins/600.css'
import '@fontsource/poppins/700.css'

import App from '@/App.vue'
import router from '@/router'
import '@/styles/global.css'
import '@/lib/infra/icons'

const app = createApp(App)

app.use(router)

app.component('v-icon', OhVueIcon)

app.mount('#app')
