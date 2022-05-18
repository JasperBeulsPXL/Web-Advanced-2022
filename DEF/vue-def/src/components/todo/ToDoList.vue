<template>
  <ul>
    <to-do-item v-for="(todo,index) in tasks" :key="index"
                :index="index" :todo="todo"
                @remove-todo="removeTodo"
    />
  </ul>
</template>

<script>
import ToDoItem from "@/components/todo/ToDoItem";

export default {
  name: "ToDoList",
  components: {ToDoItem},
  props: {tasks: Array},
  methods: {
    removeTodo(index) {
      this.$emit('removeTodo', index);
    }
  }
}
</script>

<style scoped>
ul {
  width: 400px;
}

li {
  display: flex;
  flex-direction: row;
}
</style>