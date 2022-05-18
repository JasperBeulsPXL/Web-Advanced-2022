<template>
  <div>
    <img alt="" src="">
    <h2>{{ movie.title }}</h2>
    <input type="text">
  </div>
</template>

<script>
export default {
  name: "MovieCard",
  props: {
    movie: Object
  }
}
</script>

<style scoped>

</style>