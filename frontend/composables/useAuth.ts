interface AuthData {
  email: string
  password: string
}

export const useAuth = () => {
  const config = useRuntimeConfig()
  const router = useRouter()

  const register = async (data: AuthData) => {
    try {
      const response = await $fetch<{ token: string, email: string }>(
        `${config.public.apiBase}/auth/register`,
        {
          method: 'POST',
          body: data,
        }
      )

      localStorage.setItem('token', response.token)
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

      localStorage.setItem('token', response.token)
      return response
    } catch (error: any) {
      throw new Error(error.data?.message || 'Неверный email или пароль')
    }
  }

  return {
    register,
    login
  }
} 