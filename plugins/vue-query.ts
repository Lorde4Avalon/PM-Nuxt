import { createApp } from 'vue'
import App from '../app.vue'
import { VueQueryPlugin, QueryClient, hydrate } from 'vue-query'

const app = createApp(App)

export default defineNuxtPlugin(nuxtApp => {
    app.use(VueQueryPlugin)
})