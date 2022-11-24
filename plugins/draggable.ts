import draggable from 'vuedraggable';

export default defineNuxtPlugin(nuxtApp => {
    // Doing something with nuxtApp
    nuxtApp.vueApp.component('draggable', draggable)
})