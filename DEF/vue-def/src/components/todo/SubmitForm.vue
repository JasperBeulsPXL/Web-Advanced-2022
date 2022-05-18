<template>
  <div class="submit-form">
    <input v-model="newTodo" type="text"/>
    <input type="button"
           value="Submit"
           @click="submitHandler"
    />
  </div>
</template>

<script>
export default {
  name: "SubmitForm",
  data() {
    return {
      newTodo: ''
    }
  },
  methods: {
    submitHandler() {
      this.$emit('myEvent',
          {
            newTodo: this.newTodo,
            amount: 5
          }
      );
    }
  }
}
</script>

<style scoped>
div.submit-form {
  display: flex;
  flex-direction: row;
}
</style>