import './plugins/css/bootstrap.min.css'
import './plugins/js/bootstrap.bundle.min.js'
import './plugins/css/homeStyle.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCartShopping, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCartShopping, faArrowLeft)

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

const app = createApp(App)
const pinia = createPinia()
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.use(pinia)
app.mount('#app')
