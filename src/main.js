import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import i18n from './i18n'

// ⬇️ اضافه کردن vue-matomo
import VueMatomo from 'vue-matomo'

const app = createApp(App)

// ⬇️ اتصال به Matomo Cloud
app.use(VueMatomo, {
    host: 'https://aliradmehr.matomo.cloud/', // آدرس پنل Cloud تو
    siteId: 1, // Site ID که توی پنل ساختی
    enableLinkTracking: true,
    requireConsent: false,
    trackInitialView: true
})

// ⬇️ سایر پلاگین‌ها
app.use(i18n)

// ⬇️ mount نهایی
app.mount('#app')
