<template>
  <div>
    <mj-card>
      <div class="flex justify-between items-center">
        <p class="text-sm text-zinc-500 font-semibold">
          Analytics Summary
        </p>
        <select
          id="year"
          name="year"
          class="ring-1 ring-zinc-200 rounded-sm py-1 px-3 focus:ring-cyan-500 hover:ring-cyan-500 focus:outline-none text-zinc-700 text-sm"
        >
          <option
            value=""
            selected
            disabled
          >
            Years
          </option>
          <option value="2025">
            2025
          </option>
        </select>
      </div>
      <div class="h-[300px] md:h-[195px]">
        <Bar
          :data="data"
          :options="options"
        />
      </div>
    </mj-card>
  </div>
</template>

<script setup lang="ts">
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js'
import { Bar } from 'vue-chartjs'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const data = {
  labels: [
    'January 2025', 'February 2025', 'March 2025', 'April 2025', 'May 2025', 'June 2025',
    'July 2025', 'August 2025', 'September 2025', 'October 2025', 'November 2025', 'December 2025',
  ],
  datasets: [
    {
      label: 'Project',
      backgroundColor: '#3AAFA9',
      data: [90, 50, 75, 120, 200, 220, 180, 250, 150, 320, 220, 200],
    },
    {
      label: 'News',
      backgroundColor: '#E0F2F0',
      data: [120, 60, 45, 100, 250, 120, 140, 60, 126, 280, 190, 300],
    },
  ],
}

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top',
      align: 'center',
      labels: {
        boxWidth: 20,
        padding: 15,
        textAlign: 'left',
      },
    },
    tooltip: {
      enabled: true,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
}
</script>
