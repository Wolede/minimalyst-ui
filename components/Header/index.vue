<template>
  <header class="container mx-auto py-8">
    <nav class="flex justify-between items-center">
      <NuxtLink to="/#">
        <img class="h-20" src="/images/logoPrimary.png" alt="minimalyst logo" />
      </NuxtLink>
      <div>
        <NuxtLink to="/#about" class="mr-2 hover:text-primary">
          About
        </NuxtLink>
        <NuxtLink to="/#expertise" class="hover:text-primary">
          Expertise
        </NuxtLink>
      </div>
    </nav>
  </header>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
