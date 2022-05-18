<template>
  <movie-card v-for="movie in movies"
              :key="movie"
              :movie="movie"
  />
</template>

<script>
import MovieCard from "@/components/movielist/MovieCard";

export default {
  name: "MovieListView",
  components: {MovieCard},
  data() {
    return {
      movies: [
        {
          title: 'V for vendetta',
          rating: 5,
          imgSrc: 'vfv.jpg'
        },
        {title: 'B', rating: 5, imgSrc: 'vfv.jpg'},
        {title: 'B', rating: 5, imgSrc: 'vfv.jpg'},
      ]
    }
  }
}
</script>

<style scoped>

</style>