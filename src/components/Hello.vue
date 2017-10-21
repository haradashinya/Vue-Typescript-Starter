<template>
  <div class="hello">
    <h1>Vue-Typescript-Starter</h1>
    <button @click="clicked">Click</button>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'hello',
    data() {
      return {
      }
    },
    computed: {
    },
    created() {
    },
    methods: {
      clicked() {
        alert('Hello world')
      }
    }
  }
</script>
