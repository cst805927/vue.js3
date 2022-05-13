<template>
  <NewsList />
</template>

<script lang="ts">
  import { Options, Vue } from 'vue-class-component';
  import NewsList from './components/NewsList.vue';

  @Options({
      components: {
          NewsList,
      },
  })
  export default class App extends Vue {}
</script>

<style>
</style>
