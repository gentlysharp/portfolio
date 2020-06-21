<template >
  <v-navigation-drawer
    class="left-drawer"
    v-model="drawer"
    :clipped="$vuetify.breakpoint.lgAndUp"
    app
  >
    <v-list dense>
      <v-list-item class="justify-center d-flex d-sm-flex d-md-none d-lg-none d-xl-none">
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

  // props: {
  //   menus: Array
  // },
  data: () => ({
    logo: "",
    drawer: true,
    menus: [
      // 메뉴 예시
      { id: 0, icon: "mdi-home", title: "HOME", path: "/" },
      {
        id: 1,
        icon: "mdi-lightbulb-on-outline",
        title: "Menu1"
      }
    ]
  }),
  created: function() {
    // console.log(this.$router);

    // drawer가 클릭되면 발생하는 toggleDrawer 리스너를 생성한다.
    this.$eventBus.$on("toggleDrawer", toggle => {
      this.drawer = toggle;
    });
  },
  methods: {
    route(path) {
      this.$router.push({ path: path });
    }
  }
};
</script>

<style scoped>
.left-drawer {
  z-index: 1000;
}
</style>