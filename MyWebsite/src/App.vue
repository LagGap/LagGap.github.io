<script>
export default {
  data() {
    return {
      count: 0,
      message: "allo",
      isVisible: true
    }
  },
  methods: {
    increment() {
      this.count++
    },
    changeMessageVisibility() {
      this.isVisible = !this.isVisible
    }
  },
}
</script>

<template>
  <header>
    <h1 v-if="isVisible">{{ message }}</h1>
    <button @click="increment">Count is : {{ count }}</button>
    <button @click="changeMessageVisibility">Change Message Visibility</button>
  </header>
</template>
