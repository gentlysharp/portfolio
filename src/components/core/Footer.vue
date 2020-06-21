<template>
  <v-footer class="justify-center" height="100" :color="color">
    <div
      class="title font-weight-light white--text text--lighten-1 text-center"
    >Copyright 2020. SangHyup all rights reserved.</div>
  </v-footer>
</template>

<script>
export default {
  name: "CoreFooter",
  data: () => ({
    color: "grey lighten-1"
  })
};
</script>

<style>
</style>