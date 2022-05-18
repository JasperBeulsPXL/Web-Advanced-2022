<template>
  <h1>You have {{ count }} tasks to do</h1>
</template>

<script>
export default {
  name: "Header",
  props: {
    count: Number
  }
}
</script>

<style scoped>

</style>