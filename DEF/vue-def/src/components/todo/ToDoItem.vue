<template>
  <li>
    <p>{{ todo }}</p>
    <a @click="removeTodo">X</a>
  </li>
</template>

<script>
export default {
  name: "ToDoItem",
  props: {
    todo: String,
    index: Number
  },
  methods: {
    removeTodo(event) {
      event.preventDefault();
      this.$emit('removeTodo', this.index);
    }
  }
}
</script>

<style scoped>
li {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

a {

}
</style>