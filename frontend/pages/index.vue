<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <header class="bg-white shadow">
      <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex-shrink-0 flex items-center">
            <h1 class="text-xl font-bold">Notes App</h1>
          </div>
          <div class="flex items-center space-x-4">
            <NuxtLink
              to="/auth/login"
              class="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              Войти
            </NuxtLink>
            <NuxtLink
              to="/auth/register"
              class="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700"
            >
              Регистрация
            </NuxtLink>
          </div>
        </div>
      </nav>
    </header>

    <!-- Main content -->
    <main>
      <!-- Hero section -->
      <div class="py-24 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center">
            <h2 class="text-4xl font-extrabold text-gray-900 sm:text-5xl">
              Управляйте своими заметками легко
            </h2>
            <p class="mt-6 text-xl text-gray-500">
              Создавайте, редактируйте и организуйте ваши заметки в одном месте
            </p>
          </div>
        </div>
      </div>

      <!-- Features -->
      <div class="py-24 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 gap-12 sm:grid-cols-3">
            <div class="text-center">
              <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <h3 class="mt-4 text-lg font-medium text-gray-900">Простой интерфейс</h3>
              <p class="mt-2 text-base text-gray-500">
                Интуитивно понятный интерфейс для создания и управления заметками
              </p>
            </div>

            <div class="text-center">
              <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                </svg>
              </div>
              <h3 class="mt-4 text-lg font-medium text-gray-900">Безопасность</h3>
              <p class="mt-2 text-base text-gray-500">
                Надежная защита ваших заметок с помощью JWT-авторизации
              </p>
            </div>

            <div class="text-center">
              <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                </svg>
              </div>
              <h3 class="mt-4 text-lg font-medium text-gray-900">Организация</h3>
              <p class="mt-2 text-base text-gray-500">
                Удобное управление и организация ваших заметок
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="bg-indigo-700">
        <div class="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 class="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span class="block">Готовы начать?</span>
            <span class="block text-indigo-200">Создайте свой аккаунт прямо сейчас.</span>
          </h2>
          <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div class="inline-flex rounded-md shadow">
              <NuxtLink
                to="/auth/register"
                class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
              >
                Начать бесплатно
              </NuxtLink>
            </div>
            <div class="ml-3 inline-flex rounded-md shadow">
              <NuxtLink
                to="/auth/login"
                class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Войти в аккаунт
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template> 