<template>
  <ul>
    <todo-item v-for="(todo, index) in todos"
               :key="index"
               :index="index"
               :todo="todo"
    />
  </ul>
</template>

<script>
import TodoItem from "@/components/todolist/TodoItem";

export default {
  name: "TodoList",
  components: {TodoItem},
  props: {
    todos: Array
  },

}
</script>

<style scoped>
ul {
  list-style-type: none;
}
</style>