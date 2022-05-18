<template>
  <div class="todo-view">
    <Header :count="todos.length"/>
    <to-do-list :tasks="todos" @remove-todo="removeTodo"/>
    <submit-form class="submit-form" @add-todo="addTodo"/>
  </div>
</template>

<script>
import Header from "@/components/todo/Header";
import ToDoList from "@/components/todo/ToDoList";
import SubmitForm from "@/components/todo/SubmitForm";

export default {
  name: "ToDoView",
  components: {SubmitForm, ToDoList, Header},
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
    removeTodo(index) {
      this.todos.splice(index, 1);
    },
    addTodo(newTodo) {
      this.todos.push(newTodo);
    }
  }
}
</script>

<style scoped>
div.todo-view {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.submit-form {
  display: flex;
  flex-direction: row;
}
</style>