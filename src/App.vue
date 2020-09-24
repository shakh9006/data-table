<template>
  <div class="data-container">
    <v-app id="inspire">
      <data-table></data-table>
    </v-app>
  </div>
</template>

<script>
  import Table from "./components/Table";
  export default {
    name: 'App',

    components: {
      'data-table': Table,
    },
  }
</script>

<style>
  .data-container {
    margin: 0 10px;
  }
</style>
