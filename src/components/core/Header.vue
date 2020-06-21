<template>
  <div>
    <v-app-bar class="app-bar" app color="white" height="80" hide-on-scroll>
      <!-- icon 클릭시 left drawer true로 되면서 열림 -->
      <v-app-bar-nav-icon @click="toggleDrawer" class="d-flex d-sm-flex d-md-none" />
      <v-card flat min-width="300" @click="route('/')">
        <v-card-text class="headline grey--text text--darken-3 font-weight-bold">I'm Sanghyup Han</v-card-text>
      </v-card>
      <!-- <v-spacer class="d-flex d-sm-flex d-md-none"></v-spacer> -->
      <v-spacer></v-spacer>

      <v-tabs class="d-flex flex-row-reverse mr-12" color="#f04c23" v-model="location">
        <v-tab
          v-for="menu in this.$context.menus"
          :key="menu.id"
          @click="route(menu.path)"
        >{{menu.title}}</v-tab>
      </v-tabs>
      <!-- <v-spacer></v-spacer> -->
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "CoreHeader",
  title: "",
  // menus: [ // 메뉴 예시
  //   { id: 0, title: "HOME", path: "/" },
  //   { id: 1, title: "SOLUTION", path: "/solution" },
  // ]
  props: {
    menus: Array
  },
  components: {},
  data: () => ({
    location: 0 // 화면이 켜지면 tabs가 처음 선택되는 값
  }),
  methods: {
    toggleDrawer() {
      this.drawer = true;
      // drawer를 여는 토글 버튼이 클릭되면 toggleDrawer 이벤트를 버스를 통해 내보낸다.
      this.$eventBus.$emit("toggleDrawer", this.drawer);
      // console.log(this.$eventBus);
    },
    route(path) {
      this.$router.push({ path: path }); // routing 을 하드코딩이 아닌 프로그래밍으로 처리할 수 있다.
    }
  },
  mounted() {
    // 페이지 새로고침 시 v-tabs가 항상 첫번째 요소를 가르키므로,
    // 현재 location의 path를 탭을 가르키도록 설정한다.
    this.location = this.menus.filter(
      f => f.path === window.location.pathname
    )[0].id;
  },
  created: function() {
    this.$eventBus.$on("initTab", value => {
      this.location = value;
    });
  }
};
</script>
<style>
a:link,
a:active,
a:hover,
a:visited {
  color: inherit;
  text-decoration: none;
}
.sm-logo {
  max-width: 150px;
}
</style>