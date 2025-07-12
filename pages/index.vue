<template>
  <div>
    <mj-breadcrumb />

    <dashboard-summary />

    <dashboard-chart />

    <dashboard-draft :drafts="drafts" v-for="(d, i) in ['Last Draft', 'Last Projects']" :key="i" :header="d" />
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
