<template>
  <div class="hello">
    <h1>{{ message }}</h1>
    <button @click="clicked">Click</button>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'hello',
    data() {
      return {
        message: 'Vue-Typescript-Starter',
      }
    },

    computed: {
      fullMessage() {
        return `${this.message} from Typescript`;
      }
    },


    created() {
      console.log('created');
    },

    methods: {
      clicked() {
        console.log('clicked 1');
      }
    }
  }
</script>

