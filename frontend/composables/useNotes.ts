interface Note {
  _id?: string
  title: string
  content: string
}

export const useNotes = () => {
  const config = useRuntimeConfig()
  const { getToken } = useAuth()

  const createNote = async (note: Note) => {
    try {
      const response = await $fetch<Note>(`${config.public.apiBase}/notes`, {
        method: 'POST',
        body: note,
        headers: {
          'Authorization': `Bearer ${getToken()}`
        }
      })
      return response
    } catch (error: any) {
      throw new Error(error.data?.message || 'Ошибка при создании заметки')
    }
  }

  return {
    createNote
  }
} 