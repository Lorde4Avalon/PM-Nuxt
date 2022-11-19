export default defineNuxtRouteMiddleware((to, from) =>{  
  console.log(useCookie('user'));
  
  if (!useCookie('user')) {
    return navigateTo('/login')
  }
})