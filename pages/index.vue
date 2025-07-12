<template>
  <div class="pb-6">
    <mj-breadcrumb />

    <div class="grid grid-cols-12 gap-4">
      <dashboard-summary class="col-span-12 md:col-span-4" />
      <dashboard-chart class="col-span-12 md:col-span-8" />
    </div>

    <div class="flex flex-col md:flex-row md:gap-4">
      <dashboard-draft
        v-for="(d, i) in ['Last Draft', 'Last Projects']"
        :key="i"
        :drafts="drafts"
        :header="d"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Draft } from '~/types/draft.types'

const drafts = ref<Draft[]>([
  {
    thumbnail: '/images/1.webp',
    title: 'Transforming Jababeka Residence Marketing Gallery...',
    content: 'Jababeka Residence, a leading property developer, is committed..',
    date: '20 May 2025',
  },
  {
    thumbnail: '/images/2.webp',
    title: 'Enhancing Meeting Efficiency at PT Krakatau Bandar Samu...',
    content: 'PT Krakatau Bandar Samudera, a leading logistics and port company...',
    date: '20 May 2025',
  },
])
</script>
