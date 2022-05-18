<template>
  <input v-model="newToDo" type="text"/>
  <input type="button" @click="addTodo">
</template>

<script>
export default {
  name: "SubmitTodo",
  emits: ['myEvent'],
  data() {
    return {
      image: 'mijnFoto.jpg',
      newToDo: ''
    }
  },
  methods: {
    addTodo() {
      this.$emit('myEvent', {
        newTodo: this.newToDo,
        amount: 8
      })
    }
  }
}
</script>

<style scoped>

</style>