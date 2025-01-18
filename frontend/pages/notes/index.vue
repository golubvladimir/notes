<template>
  <div class="min-h-screen bg-gray-100">
    <!-- Header -->
    <header class="bg-white shadow">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex">
            <div class="flex-shrink-0 flex items-center">
              <h1 class="text-xl font-bold text-gray-900">Мои заметки</h1>
            </div>
          </div>
          <div class="flex items-center">
            <button
              class="ml-4 text-gray-500 hover:text-gray-700"
              @click="handleLogout"
            >
              Выйти
            </button>
          </div>
        </div>
      </div>
    </header>

    <!-- Main content -->
    <main class="py-6">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex gap-6">
          <!-- Left sidebar with notes list -->
          <div class="w-1/3 bg-white rounded-lg shadow">
            <div class="p-4 border-b">
              <button
                class="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Новая заметка
              </button>
            </div>
            <div class="divide-y divide-gray-200">
              <!-- Note list item (active) -->
              <div class="p-4 bg-indigo-50 cursor-pointer hover:bg-indigo-50">
                <h3 class="text-sm font-medium text-gray-900">Заголовок активной заметки</h3>
                <p class="mt-1 text-sm text-gray-500 line-clamp-2">
                  Текст активной заметки...
                </p>
                <p class="mt-1 text-xs text-gray-400">12 января 2024</p>
              </div>

              <!-- Note list items -->
              <div
                v-for="i in 5"
                :key="i"
                class="p-4 cursor-pointer hover:bg-gray-50"
              >
                <h3 class="text-sm font-medium text-gray-900">Заголовок заметки {{ i }}</h3>
                <p class="mt-1 text-sm text-gray-500 line-clamp-2">
                  Текст заметки {{ i }}...
                </p>
                <p class="mt-1 text-xs text-gray-400">11 января 2024</p>
              </div>
            </div>
          </div>

          <!-- Right content area -->
          <div class="flex-1 bg-white rounded-lg shadow">
            <div class="p-6">
              <!-- Note title -->
              <input
                type="text"
                placeholder="Заголовок заметки"
                class="block w-full text-2xl font-bold border-0 border-b border-transparent bg-white focus:border-indigo-600 focus:ring-0"
              />

              <!-- Editor toolbar -->
              <div class="flex items-center space-x-4 my-4 pb-4 border-b border-gray-200">
                <button
                  class="p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </button>
                <div class="h-4 w-px bg-gray-200"></div>
                <button
                  class="p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <!-- Note content -->
              <textarea
                placeholder="Начните вводить текст заметки..."
                class="block w-full h-[calc(100vh-300px)] resize-none border-0 bg-white focus:ring-0"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ['auth']
})

const { logout } = useAuth()

// Теперь logout будет работать
const handleLogout = () => {
  logout()
}
</script>

<style scoped>
/* Убираем стандартные стили для textarea */
textarea {
  outline: none;
}
</style> 