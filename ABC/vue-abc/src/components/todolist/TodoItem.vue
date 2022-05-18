<template>
  <li>
    <p>{{ todo }}</p>
    <a @click="removeTodo(index, $event)">X</a>
  </li>
</template>

<script>
export default {
  name: "TodoItem",
  props: {
    todo: String,
    index: Number
  },
  methods: {
    removeTodo(index, event) {
      event.preventDefault();
      console.log(index);

      // TODO: remove the todo from parent Array
    }
  }
}
</script>

<style scoped>

</style>