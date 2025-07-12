<template>
  <div class="bg-zinc-100 min-h-screen w-full">
    <!-- Header -->
    <div class="bg-white py-4 shadow-sm">
      <div class="flex justify-between items-center px-4 max-w-screen-xl mx-auto">
        <!-- Logo -->
        <nuxt-picture
          src="/images/logo.png"
          :img-attrs="{
            id: 'logo',
            class: 'w-16 rounded',
          }"
        />

        <!-- Mobile Menu -->
        <div class="md:hidden flex items-center gap-2 border border-zinc-400 rounded-full px-3 py-1 hover:border-cyan-600">
          <button class="pt-1 hover:text-cyan-600">
            <icon
              name="mdi:menu"
              size="17"
            />
          </button>
          <nuxt-picture
            src="/images/avatar.webp"
            :img-attrs="{
              id: 'avatar',
              class: 'w-6 rounded',
            }"
          />
        </div>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center gap-5">
          <!-- Search -->
          <div class="relative w-[200px]">
            <!-- Icon Search -->
            <icon
              name="mdi:magnify"
              class="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400"
              size="18"
            />

            <!-- Input Search -->
            <input
              type="search"
              placeholder="Search"
              class="pl-9 pr-3 py-1 w-full ring-1 ring-zinc-200 rounded-sm focus:ring-cyan-500 hover:ring-cyan-500 focus:outline-none text-sm"
            >
          </div>

          <!-- Avatar -->
          <div class="flex items-center gap-1 hover:bg-zinc-100 rounded-full py-1 px-2 mt-[-3px]">
            <nuxt-picture
              src="/images/avatar.webp"
              :img-attrs="{
                id: 'avatar',
                class: 'w-6 h-6 rounded object-cover',
              }"
            />
            <button
              type="button"
              class="pt-1 hover:text-cyan-600"
            >
              <icon
                name="mdi:chevron-down"
                size="17"
              />
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Content -->
    <div class="mt-5 px-5 max-w-screen-xl mx-auto">
      <slot />
    </div>
  </div>
</template>
