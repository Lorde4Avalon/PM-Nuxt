// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],
    css: ['~/styles/global.css'],
    imports: {
        dirs: ['stores'],
    },
    router: {
        
    },
    runtimeConfig: {
        apiBase: '',
        apiToken: ''
    },
    plugins: ['~/plugins/persistedstate.ts']
})
