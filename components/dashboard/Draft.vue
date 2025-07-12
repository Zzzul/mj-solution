<template>
  <div class="mt-4">
    <mj-card>
      <div class="flex justify-start items-center gap-2 mb-5">
        <p class="text-sm text-zinc-500 font-semibold">
          {{ header }}
        </p>
        <div class="bg-cyan-500 px-1 rounded text-white text-sm">
          20
        </div>
      </div>

      <div class="flex flex-col text-sm">
        <template
          v-for="(d, i) in drafts"
          :key="i"
        >
          <div class="flex justify-start gap-3 md:gap-4 md:mb-2">
            <div>
              <nuxt-picture
                :src="d.thumbnail"
                :img-attrs="{
                  id: 'logo',
                  class: 'text-center mx-auto w-32 h-20 rounded-sm object-cover md:h-24',
                }"
              />
              <button class="text-zinc-600 text-xl font-semibold md:hidden hover:text-cyan-500">
                ...
              </button>
            </div>
            <div class="flex-1">
              <div class="flex justify-between gap-2 items-center">
                <nuxt-link
                  to="#"
                  class="font-semibold hover:underline text-zinc-700 hover:text-zinc-800"
                >
                  {{ d.title }}
                </nuxt-link>
                <!-- desktop -->
                <button class="text-zinc-600 text-xl font-semibold hidden md:block hover:text-cyan-500 mt-[-25px]">
                  ...
                </button>
              </div>
              <p class="mt-2 text-zinc-700">
                {{ d.content }}
              </p>
              <p class="mt-2 text-zinc-500 text-xs font-thin">
                {{ d.date }}
              </p>
            </div>
          </div>
          <hr
            v-if="i < drafts.length - 1"
            class="mt-3 mb-4"
          >
        </template>
      </div>
    </mj-card>
  </div>
</template>

<script lang="ts" setup>
import type { Draft } from '~/types/draft.types'

defineProps({
  drafts: {
    type: Array as PropType<Draft[]>,
    required: true,
  },
  header: {
    type: String,
    required: true,
  },
})
</script>
