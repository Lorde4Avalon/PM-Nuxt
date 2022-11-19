export default defineNuxtRouteMiddleware((to, from) => {
  if (to.name !== 'login' && !useCookie('user').value) {
    process.client && console.log('please login');
    return navigateTo('/login')
  }
  const userCookie: any = useCookie('user').value
  if (to.name !== 'login' && !userCookie.authToken) {
    process.client && console.log('please login');
    return navigateTo('/login')
  }
  console.log(userCookie);
})