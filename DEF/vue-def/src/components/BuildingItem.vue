<template>
  <div class="building-item">
    <h2>{{ title }}</h2>
    <label>Gold: {{ gold }}</label>
    <label> resources needed: {{ steel }} steel, {{ ammunition }} ammunition</label>
    <input type="button"
           value="Purchase this building"
           @click="displayMessage('barracks', $event)">

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
    displayMessage(message, event) {
      alert(`${this.title} built ${message}`);
      let elementThatFiredHandler = event.target;
      let addedGold = this.gold + 500;
    }
  }
}
</script>

<style scoped>

</style>