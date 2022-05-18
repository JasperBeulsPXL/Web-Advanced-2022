<template>
  <div class="building-item">
    <h2>{{ title }}</h2>
    <label>Gold: {{ gold }}</label>
    <label>resources needed: {{ steel }} steel, {{ ammunition }} ammunition</label>
    <input type="button"
           value="Build this building"
           @click="buyBuilding"
    >
  </div>
</template>

<script>
export default {
  name: "BuildingItem",
  data() {
    return {
      gold: 5000,
      steel: 100,
      ammunition: 100
    }
  },
  props: {
    title: String
  },
  methods: {
    buyBuilding(event) {
      alert(`${this.title} building successfully bought!`);
      console.log(event)
      let newGoldValue = this.gold + 500;
    }
  }
}
</script>

<style scoped>
.building-item {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-evenly;
}

</style>