<template>
  <h1>Buildings</h1>

  <div v-for="building in buildings" :key="building.id">
    <building-item :title="building.title"/>
  </div>
</template>

<script>
import BuildingItem from "@/components/BuildingItem";

export default {
  name: "Buildings",
  components: {BuildingItem},
  data() {
    return {
      buildings: [
        {id: 1, title: 'Astartes Barracks'},
        {id: 2, title: 'Psyker Barracks'}
      ]
    }
  }
}
</script>

<style scoped>

</style>