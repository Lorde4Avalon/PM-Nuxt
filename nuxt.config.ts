// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],
    css: ['~/styles/global.css'],
    imports: {
        dirs: ['stores'],
    },
    runtimeConfig: {
        apiBase: ''
    },
    plugins: ['~/plugins/persistedstate.ts']
})
