export default defineNuxtRouteMiddleware((to) => {
  const nuxtApp = useNuxtApp()
  
  if (!nuxtApp.ssrContext) {
    const token = localStorage.getItem('token')
    if (!token) {
      return navigateTo('/auth/login')
    }
  }
}) 