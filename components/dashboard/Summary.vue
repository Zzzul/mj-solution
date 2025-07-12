<template>
  <div class="grid grid-cols-2 md:flex md:flex-col gap-4">
    <mj-card class="md:py-8">
      <div class="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div class="h-8 w-8 bg-blue-100 p-2 rounded flex items-center justify-center md:order-2 md:w-14 md:h-14 mt-1 md:mt-0 hover:bg-blue-200">
          <icon
            name="mdi:note-plus-outline"
            class="text-purple-600 md:text-2xl hover:text-purple-700"
          />
        </div>

        <div class="mt-2 md:mt-0">
          <h4 class="text-zinc-700 font-semibold md:text-lg">
            25
          </h4>
          <h4 class="text-zinc-400 text-xs mt-1 md:text-sm">
            Total Publish
          </h4>
        </div>
      </div>
    </mj-card>

    <mj-card class="md:py-8">
      <div class="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div class="h-8 w-8 bg-cyan-100 p-2 rounded flex items-center justify-center md:order-2 md:w-14 md:h-14 mt-1 md:mt-0 hover:bg-cyan-200">
          <icon
            name="mdi:eye-outline"
            class="text-cyan-600 md:text-2xl hover:text-cyan-700"
          />
        </div>

        <div class="mt-2 md:mt-0">
          <h4 class="text-zinc-700 font-semibold md:text-lg">
            298
          </h4>
          <h4 class="text-zinc-400 text-xs mt-1 md:text-sm">
            Total Views
          </h4>
        </div>
      </div>
    </mj-card>
  </div>
</template>
