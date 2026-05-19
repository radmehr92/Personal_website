import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import i18n from './i18n'
import VueMatomo from 'vue-matomo'

const app = createApp(App)


app.use(VueMatomo, {
    host: 'https://aliradmehr.matomo.cloud/',
    siteId: 1,
    enableLinkTracking: true,
    requireConsent: false,
    trackInitialView: true
})


app.use(i18n)


app.mount('#app')
