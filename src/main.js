import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '@/assets/style.css'
import '@/assets/custom.css'
import '@/assets/grape.css'
import '@/assets/plugins.css'
import '@/assets/urbanist.css'


const app = createApp(App)
app.use(router)
app.mount('#app')
