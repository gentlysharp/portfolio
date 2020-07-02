<template>
  <v-app>
    <logo-card />

    <core-navigation />

    <core-header />

    <core-view />

    <core-footer />

    <go-top-btn />
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {
    CoreHeader: () => import("@/components/core/Header.vue"),
    CoreNavigation: () => import("@/components/core/Navigation"),
    CoreView: () => import("@/components/core/View"),
    CoreFooter: () => import("@/components/core/Footer.vue"),
    LogoCard: () => import("@/components/card/LogoCard"),
    GoTopBtn: () => import("@/components/button/GoTopBtn")
  },
  methods: {
    initTab() {
      // header-bar에서 tabs의 값이 number를 기준으로 이동하기 때문에
      // 홈 로고를 클릭하면 tab을 초기화 한다.
      this.$eventBus.$emit("initTab", 0);
    }
  },
  created: function() {
    // this.$vuetify.theme.dark = true;
  }
};
</script>
<style scoped>
</style>

