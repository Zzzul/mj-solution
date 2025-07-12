<template>
  <div class="flex bg-zinc-100 min-h-screen">
    <aside class="w-64 bg-white border-r border-zinc-50 min-h-screen hidden md:block">
      <div class="p-4 flex items-center">
        <nuxt-picture
          src="/images/logo.png"
          :img-attrs="{
            id: 'logo',
            class: 'w-16 rounded',
          }"
        />
      </div>
      <nav class="px-4 text-sm text-zinc-600">
        <ul class="space-y-2 mt-4">
          <li>
            <nuxt-link
              to="/"
              class="flex items-center gap-2 px-2 py-2 rounded bg-cyan-100 hover:bg-cyan-200 text-cyan-800 font-semibold"
            >
              <icon
                name="mdi:view-dashboard"
                size="18"
              />
              Dashboard
            </nuxt-link>
          </li>

          <li>
            <div class="flex flex-col gap-1">
              <div
                class="flex items-center justify-between px-2 py-2 rounded hover:bg-zinc-100 hover:text-cyan-600 cursor-pointer"
                @click="isWriteOpen = !isWriteOpen"
              >
                <div class="flex items-center gap-2">
                  <icon
                    name="mdi:pencil-outline"
                    size="18"
                  />
                  Write
                </div>
                <icon
                  name="mdi:chevron-down"
                  size="18"
                  :class="isWriteOpen ? 'rotate-180 transition-transform' : 'transition-transform'"
                />
              </div>

              <ul
                v-show="isWriteOpen"
                class="ml-6 space-y-1 text-zinc-500"
              >
                <li>
                  <a
                    href="#"
                    class="block px-2 py-1 rounded hover:bg-zinc-100 hover:text-cyan-600"
                  >New Article</a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-2 py-1 rounded hover:bg-zinc-100 hover:text-cyan-600"
                  >List Article</a>
                </li>
              </ul>
            </div>
          </li>

          <li>
            <a
              href="#"
              class="flex items-center gap-2 px-2 py-2 rounded hover:bg-zinc-100 hover:text-cyan-600"
            >
              <icon
                name="mdi:file-document-outline"
                size="18"
              />
              Published
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center gap-2 px-2 py-2 rounded hover:bg-zinc-100 hover:text-cyan-600"
            >
              <icon
                name="mdi:file"
                size="18"
              />
              Draft
            </a>
          </li>
        </ul>
      </nav>
    </aside>

    <div class="flex-1 flex flex-col w-full">
      <div class="bg-white py-4 shadow-sm px-4">
        <div class="w-full flex justify-between items-center md:hidden">
          <nuxt-picture
            src="/images/logo.png"
            :img-attrs="{ id: 'logo', class: 'w-16 rounded' }"
          />

          <div class="flex items-center gap-2 border border-zinc-400 rounded-full px-3 py-1 hover:border-cyan-600">
            <!-- hamburger menu -->
            <button class="pt-1 hover:text-cyan-600">
              <icon
                name="mdi:menu"
                size="17"
              />
            </button>
            <nuxt-picture
              src="/images/avatar.webp"
              :img-attrs="{ id: 'avatar', class: 'w-6 rounded' }"
            />
          </div>
        </div>

        <div class="hidden md:flex md:justify-end items-center gap-5 ml-auto">
          <div class="relative w-[200px]">
            <icon
              name="mdi:magnify"
              class="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400"
              size="18"
            />
            <input
              type="search"
              placeholder="Search"
              class="pl-9 pr-3 py-1 w-full ring-1 ring-zinc-200 rounded-sm focus:ring-cyan-500 hover:ring-cyan-500 focus:outline-none text-sm"
            >
          </div>

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
              @click="isAvatarOpen = !isAvatarOpen"
            >
              <icon
                name="mdi:chevron-down"
                size="18"
                :class="isAvatarOpen ? 'rotate-180 transition-transform' : 'transition-transform'"
              />
            </button>
          </div>
        </div>
      </div>

      <div class="p-5">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const isWriteOpen = ref(false)

const isAvatarOpen = ref(false)
</script>
