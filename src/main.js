import './plugins/css/bootstrap.min.css'
import './plugins/js/bootstrap.bundle.min.js'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCartShopping, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

library.add(faCartShopping, faArrowLeft)

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import { createMyRouter } from './router'

const app = createApp(App)
const router = createMyRouter()
const pinia = createPinia()
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.use(pinia)
app.use(VueSweetalert2)
app.mount('#app')
