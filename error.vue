<template>
  <div>
    <h1>{{ error.statusCode }}</h1>
    <h4>Sorry!</h4>
    <p>{{ error.message }}</p>
    <button @click="handleError">Go back home</button>
  </div>
</template>

<script setup>
defineProps({
  error: Object,
})
const handleError = () => clearError({ redirect: '/' })
</script>

<style lang="scss" scoped></style>
