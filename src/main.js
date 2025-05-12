import { createApp } from 'vue'
import { createPinia } from 'pinia'

// --- INICIO CÓDIGO AGREGADO ---
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
// --- FIN CÓDIGO AGREGADO ---

import App from './App.vue'
import router from './router'

// --- INICIO CÓDIGO AGREGADO ---
const vuetify = createVuetify({
  components,
  directives,
})
// --- FIN CÓDIGO AGREGADO ---

const app = createApp(App)

// --- INICIO CÓDIGO AGREGADO ---
app.use(vuetify) // Asegúrate que esta línea se añada
// --- FIN CÓDIGO AGREGADO ---

app.use(createPinia())
app.use(router)

app.mount('#app')