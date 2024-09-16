import './plugins/css/bootstrap.min.css'
import './plugins/js/bootstrap.bundle.min.js'
import './plugins/css/homeStyle.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCartShopping)

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.mount('#app')
