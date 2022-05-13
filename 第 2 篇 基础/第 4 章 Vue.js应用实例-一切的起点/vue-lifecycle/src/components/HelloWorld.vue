<template>
  <div class="app">
   Counter: {{count}}
   <button @click="plusOne()">+</button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';


export default class HelloWorld extends Vue {
  count = 0;
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >


</style>
