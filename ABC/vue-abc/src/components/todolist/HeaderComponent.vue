<template>
  <h1>You have {{ count }} todos</h1>
</template>

<script>
export default {
  name: "HeaderComponent",
  props: {
    count: Number
  }
}
</script>

<style scoped>

</style>