import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import routers from './router/router'

createApp(App).use(createPinia()).use(routers).mount('#app')
