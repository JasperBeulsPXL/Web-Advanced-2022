<template>
  <header-component :count="todos.length"/>
  <todo-list :todos="todos"/>
  <submit-todo @my-event="handleMyEvent"/>
</template>

<script>
import HeaderComponent from "@/components/todolist/HeaderComponent";
import TodoList from "@/components/todolist/TodoList";
import SubmitTodo from "@/components/todolist/SubmitTodo";

export default {
  name: "ToDoView",
  components: {SubmitTodo, HeaderComponent, TodoList},
  data() {
    return {
      todos: [
        'Task 1',
        'Task 2',
        'Task 3',
      ]
    }
  },
  methods: {
    handleMyEvent({newTodo, amount}) {
      // handling of the event
      console.log(newTodo);
      console.log(amount);

      this.todos.push(newTodo);
    }
  }
}
</script>

<style scoped>

</style>