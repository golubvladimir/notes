interface AuthData {
  email: string
  password: string
}

export const useAuth = () => {
  const config = useRuntimeConfig()
  const router = useRouter()
  const nuxtApp = useNuxtApp()

  const isAuthenticated = () => {
    if (!nuxtApp.ssrContext) {
      return !!localStorage.getItem('token')
    }
    return false
  }

  const getToken = () => {
    if (!nuxtApp.ssrContext) {
      return localStorage.getItem('token')
    }
    return null
  }

  const logout = () => {
    if (!nuxtApp.ssrContext) {
      localStorage.removeItem('token')
      router.push('/auth/login')
    }
  }

  const register = async (data: AuthData) => {
    try {
      const response = await $fetch<{ token: string, email: string }>(
        `${config.public.apiBase}/auth/register`,
        {
          method: 'POST',
          body: data,
        }
      )

      if (!nuxtApp.ssrContext) {
        localStorage.setItem('token', response.token)
      }
      return response
    } catch (error: any) {
      throw new Error(error.data?.message || 'Ошибка при регистрации')
    }
  }

  const login = async (data: AuthData) => {
    try {
      const response = await $fetch<{ token: string, email: string }>(
        `${config.public.apiBase}/auth/login`,
        {
          method: 'POST',
          body: data,
        }
      )

      if (!nuxtApp.ssrContext) {
        localStorage.setItem('token', response.token)
      }
      return response
    } catch (error: any) {
      throw new Error(error.data?.message || 'Неверный email или пароль')
    }
  }

  return {
    register,
    login,
    logout,
    isAuthenticated,
    getToken
  }
} 