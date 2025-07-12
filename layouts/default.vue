<template>
  <div class="bg-zinc-100 min-h-screen">
    <div class="bg-white py-4 rounded shadow-sm">
      <div class="flex justify-between gap-2 mx-4 items-center">
        <nuxt-picture
          src="/images/logo.png"
          :img-attrs="{
            id: 'logo',
            class: 'text-left mx-auto w-16 rounded',
          }"
        />
        <div class="rounded-full border border-zinc-400 w-18 py-1 px-2 flex gap-2 justify-between items-center my-auto">
          <div class="flex items-center">
            <button class="pt-1">
              <icon
                name="mdi:menu"
                size="17"
              />
            </button>
          </div>
          <div>
            <nuxt-picture
              src="/images/avatar.webp"
              :img-attrs="{
                id: 'avatar',
                class: 'mx-auto w-6 rounded',
              }"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="my-5 mx-4">
      <slot />
    </div>
  </div>
</template>
