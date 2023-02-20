/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */



import store from './store/index'
// Install the store instance as a plugin




// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'


// Plugins

import { registerPlugins } from '@/plugins'

const app = createApp(App)
app.use(store)


registerPlugins(app)
app.mount('#app')
