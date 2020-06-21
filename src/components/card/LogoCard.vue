<template>
  <v-card @click="initTab" to="/">
    <v-img class="d-none d-sm-none d-md-flex logo" max-height="100%" src></v-img>
  </v-card>
</template>

<script>
export default {
  name: "LogoCard",
  methods: {
    initTab() {
      // header-bar에서 tabs의 값이 number를 기준으로 이동하기 때문에
      // 홈 로고를 클릭하면 tab을 초기화 한다.
      this.$eventBus.$emit("initTab", 0);
    }
  }
};
</script>

<style scoped>
.logo {
  z-index: 999;
  position: fixed;
  top: 10px;
  left: 10px;
}
</style>