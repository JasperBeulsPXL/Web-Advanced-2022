<template>
  <h1>Buildings</h1>

  <div v-for="(building,count) in buildings" :key="building.id">
    <building-item :title="building.title"/>
  </div>

</template>

<script>
import BuildingItem from "@/components/BuildingItem";

export default {
  name: "BuildingsView",
  components: {BuildingItem},
  data() {
    return {
      titleToPass: 'Imperial Barracks',
      buildings: [
        {id: 1, title: 'Imperial Barracks'},
        {id: 2, title: 'Astartes Barracks'},
        {id: 3, title: 'Psyker Barracks'}
      ]
    }
  },
}
</script>

<style scoped>

</style>