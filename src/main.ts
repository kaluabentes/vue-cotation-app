import { createApp } from 'vue'
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { FaChartLine } from 'oh-vue-icons/icons'
import '@fontsource/poppins/400.css'
import '@fontsource/poppins/500.css'
import '@fontsource/poppins/600.css'
import '@fontsource/poppins/700.css'

import App from '@/App.vue'
import router from '@/router'
import '@/assets/global.css'

addIcons(FaChartLine)

const app = createApp(App)

app.use(router)

app.component('v-icon', OhVueIcon)

app.mount('#app')
