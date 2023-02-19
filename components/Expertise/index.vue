<template>
  <div id="expertise" class="py-28">
    <p class="text-h2 mb-4 text-center font-medium">Expertise</p>
    <div class="mx-auto max-w-[700px] grid md:grid-cols-2 gap-4">
      <div
        v-for="(data, i) in expertise"
        :key="i"
        class="p-10 hover:ring hover:ring-primary hover:ring-inset flex flex-col items-center"
      >
        <div>
          <img :src="data.image" :alt="data.name" class="mb-4 h-[150px]" />
        </div>
        <p class="text-subtitle-2">
          {{ data.name }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
const expertise = [
  {
    name: 'Brand Identity',
    image: '/images/brandIcon.png',
  },
  {
    name: 'Illustrations',
    image: '/images/illustrationIcon.png',
  },
  {
    name: 'Graphics',
    image: '/images/graphicsIcon.png',
  },
  {
    name: 'Web',
    image: '/images/webIcon.png',
  },
]
</script>
