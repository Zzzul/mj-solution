<template>
  <div class="flex items-center justify-center h-screen mx-5">
    <div class="bg-white rounded px-6 pt-10 pb-5 m-auto shadow-sm">
      <NuxtPicture
        src="/images/logo.png"
        :img-attrs="{
          'id': 'logo',
          'class': 'text-center mx-auto w-32 mb-10 rounded',
          'style': 'display: block',
          'data-my-data': 'my-value',
        }"
      />
      <h3 class="text-xl text-cyan-400 font-semibold">
        Login
      </h3>

      <p class="mt-4 text-base">
        Thankyou for get back to
        <span class="text-cyan-500">MJ Solution Photobooth</span>
      </p>

      <form @submit.prevent="login">
        <div class="mt-6">
          <label
            for="username"
            class="text-sm mb-1 block"
          >Username</label>
          <input
            id="username"
            v-model="credentials.username"
            type="text"
            class="w-full ring-1 ring-zinc-200 rounded-sm p-2 focus:ring-cyan-500 hover:ring-cyan-500 focus:outline-none"
            placeholder="Email or username"
          >
        </div>

        <div class="mt-3">
          <label
            for="password"
            class="text-sm mb-1 block"
          >Password</label>
          <div class="relative">
            <input
              id="password"
              v-model="credentials.password"
              :type="showPassword ? 'text' : 'password'"
              class="w-full ring-1 ring-zinc-200 rounded-sm p-2 pr-10 focus:ring-cyan-500 hover:ring-cyan-500 focus:outline-none"
              placeholder="Password"
            >
            <span
              class="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer text-zinc-500 hover:text-cyan-500"
              @click="togglePassword"
            >
              <Icon
                :name="showPassword ? 'mdi:eye' : 'mdi:eye-off'"
                size="20"
              />
            </span>
          </div>
        </div>

        <button
          type="submit"
          class="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-2 mt-8 rounded-sm"
        >
          Sign In
        </button>
      </form>

      <p class="text-sm text-cyan-500 mt-10 text-center">
        By MJ Solution Indonesia
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'guest',
})

type Credential = {
  username: string
  password: string
}

const credentials = ref<Credential>({
  username: '',
  password: '',
})

const showPassword = ref(false)
const togglePassword = () => {
  showPassword.value = !showPassword.value
}

const login = () => {
  console.log(credentials.value)

  navigateTo('/')
}
</script>
