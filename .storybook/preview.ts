import { Preview, setup } from '@storybook/vue3'
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { FaChartLine } from 'oh-vue-icons/icons'
import '@fontsource/poppins/400.css'
import '@fontsource/poppins/500.css'
import '@fontsource/poppins/600.css'
import '@fontsource/poppins/700.css'

import '@/assets/global.css'

addIcons(FaChartLine)

setup((app) => {
  app.component('v-icon', OhVueIcon)
})

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  }
}

export default preview
