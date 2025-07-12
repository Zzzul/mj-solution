<template>
  <div class="mt-4">
    <mj-card>
      <div class="flex justify-between items-center">
        <p class="text-sm text-zinc-500 font-semibold">
          Analytics Summary
        </p>
        <select
          id="year"
          name="year"
          class="ring-1 ring-zinc-200 rounded-sm py-1 px-3 focus:ring-cyan-500 hover:ring-cyan-500 focus:outline-none text-zinc-700 text-sm"
          placeholder="Year"
        >
          <option
            value=""
            selected
            disabled
          >
            Years
          </option>
          <option value="2022">
            2022
          </option>
        </select>
      </div>
    </mj-card>
  </div>
</template>
