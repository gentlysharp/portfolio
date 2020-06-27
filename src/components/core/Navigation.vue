<template >
  <v-navigation-drawer
    class="left-drawer"
    v-model="drawer"
    :clipped="$vuetify.breakpoint.lgAndUp"
    app
    width="100%"
  >
    <v-list dense>
      <v-list-item class="justify-center d-flex d-sm-flex d-md-none d-lg-none d-xl-none">
        <v-card-text class="headline grey--text text--darken-3 font-weight-bold">Han's Portfolio</v-card-text>
        <img class="mb-3" :src="logo" width="180px" alt />
        <v-spacer></v-spacer>
        <v-btn icon @click="drawer = !drawer">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-list-item>

      <v-divider></v-divider>
      <template v-for="menu in menus">
        <v-list-item :key="menu.title" @click="route(menu.path)" link>
          <v-list-item-action>
            <v-icon>{{ menu.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ menu.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "CoreNavigation",
  data: () => ({
    logo: "",
    drawer: false,
    menus: []
  }),

  methods: {
    route(path) {
      this.$router.push({ path: path });
    }
  },
  created() {
    this.menus = this.$context.menus;
    console.log(this.menus);

    // drawer가 클릭되면 발생하는 toggleDrawer 리스너를 생성한다.
    this.$eventBus.$on("toggleDrawer", toggle => {
      console.log("toggle");

      this.drawer = toggle;
    });
  }
};
</script>

<style scoped>
.left-drawer {
  z-index: 1000;
}
</style>