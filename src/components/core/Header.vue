<template>
  <div>
    <v-app-bar class="app-bar" app color="white" height="80" hide-on-scroll flat>
      <!-- icon 클릭시 left drawer true로 되면서 열림 -->
      <!-- <v-app-bar-nav-icon @click="toggleDrawer" class="d-flex d-sm-flex d-md-none" /> -->
      <v-card class="d-flex" flat min-width="300" @click="route('/')">
        <v-card-text class="headline grey--text text--darken-3 font-weight-bold">I'm Sanghyup Han</v-card-text>
      </v-card>
      <v-spacer></v-spacer>

      <v-tabs class="d-flex flex-row-reverse mr-12" color="#f04c23" v-model="location">
        <v-tab
          v-for="menu in this.$context.menus"
          :key="menu.id"
          @click="route(menu.path)"
        >{{menu.title}}</v-tab>
      </v-tabs>

      <v-icon>{{weather}}</v-icon>
      <v-btn icon @click="translate">
        <v-icon>mdi-google-translate</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "CoreHeader",
  props: {
    menus: Array
  },
  components: {},
  data: () => ({
    location: 0, // 새로고침 시 tabs가 처음 선택되는 값,
    weather: "",
    weathers: {
      sunney: "mdi-weather-sunney",
      night: "mdi-weather-night",
      rainy: "mdi-weather-rainy",
      fog: "mdi-weather-fog",
      windy: "mdi-weather-windy",
      snowy: "mdi-weather-snowy",
      pouring: "mdi-weather-pouring",
      cloudy: "mdi-weather-cloudy",
      nightPartlyCloudy: "mdi-weather-night-partly-cloudy",
      lightning: "mdi-weather-lightning",
      lightningRainy: "mdi-weather-lightning-rainy",
      partlyCloudy: "mdi-weather-partly-cloudy"
    }
  }),
  methods: {
    toggleDrawer() {
      this.drawer = true;
      // drawer를 여는 토글 버튼이 클릭되면 toggleDrawer 이벤트를 버스를 통해 내보낸다.
      this.$eventBus.$emit("toggleDrawer", this.drawer);
    },
    route(path) {
      this.$router.push({ path: path }); // routing 을 하드코딩이 아닌 프로그래밍으로 처리할 수 있다.
    },
    translate() {
      this.language = this.language === "en" ? "ko" : "en";
      this.$i18n.changeLocale(this.language);
    }
  },
  mounted() {
    // 페이지 새로고침 시 v-tabs가 항상 첫번째 요소를 가르키므로,
    // 현재 location의 path를 탭을 가르키도록 설정한다.
    if (window.location.pathname !== "/") {
      this.location = this.$context.menus.filter(
        f => f.path === window.location.pathname
      )[0].id;
    }
    // 페이지가 로드되면 초기 언어를 한글로 설정한다.
    this.$i18n.changeLocale("ko");
  },
  created: function() {
    this.$eventBus.$on("initTab", value => {
      this.location = value;
    });

    this.$rest.api
      .read(
        `/api.openweathermap.org/data/2.5/weather?q=Seoul&APPID=${process.env.VUE_APP_OPEN_WEATHER_APPID}`
      )
      .then(res => {
        switch (res.data.weather[1].icon) {
          case "01d":
            this.weather = this.weathers.sunney;
            break;
          case "01n":
            this.weather = this.weathers.night;
            break;
          case "02d":
            this.weather = this.weathers.partlyCloudy;
            break;
          case "02n":
            this.weather = this.weathers.nightPartlyCloudy;
            break;
          case "03d":
          case "03n":
          case "04d":
          case "04n":
            this.weather = this.weathers.cloudy;
            break;

          case "09d":
          case "09n":
            this.weather = this.weathers.rainy;
            break;

          case "10d":
          case "10n":
            this.weather = this.weathers.pouring;
            break;

          case "11d":
          case "11n":
            this.weather = this.weathers.lightningRainy;
            break;

          case "13d":
          case "13n":
            this.weather = this.weathers.snowy;
            break;

          case "50d":
          case "50n":
            this.weather = this.weathers.fog;
            break;

          default:
            this.weather = this.weathers.sunney;
        }
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