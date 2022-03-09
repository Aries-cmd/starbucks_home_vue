import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import "./assets/css/base.css"
import "animate.css"

createApp(App).use(store).use(router).mount('#app')
