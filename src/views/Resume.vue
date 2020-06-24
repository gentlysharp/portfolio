<template>
  <section id="section1" class="mx-auto max-w-800">
    <v-container class="mt-12 pt-12">
      <v-card flat>
        <v-card-title
          v-for="(title, i) in intro.titles"
          :key="i.title"
          class="display-3 pa-3 font-weight-bold"
        >{{ title }}</v-card-title>
        <br />
        <v-card-text
          v-for="(text, i) in intro.texts"
          :key="i.text"
          class="headline ma-0 pa-1 pl-3 font-weight-bold"
        >{{ text }}</v-card-text>
      </v-card>

      <p class="display-3 ml-2 mt-10">Work Experience.</p>

      <v-row>
        <v-col cols="12" md="12">
          <v-card flat>
            <v-card-title>주식회사 도트만</v-card-title>
            <v-card-subtitle>Frontend Developer</v-card-subtitle>
            <v-card-text>2018.11 ~ 현재</v-card-text>
          </v-card>
        </v-col>

        <v-col v-for="(project,i) in projects" :key="i.project" cols="12" md="12">
          <v-card flat>
            <v-card-title>{{project.title}}</v-card-title>
            <v-card-subtitle>{{project.period}}</v-card-subtitle>
          </v-card>

          <v-card flat>
            <v-card-title>Description</v-card-title>
            <v-card-subtitle>{{project.detail}}</v-card-subtitle>
          </v-card>

          <v-card flat>
            <v-card-title>SPEC</v-card-title>
            <ul v-for="(spec,i) in project.spec" :key="i">
              <li>{{spec}}</li>
            </ul>
          </v-card>
        </v-col>
      </v-row>

      <p class="display-3 ml-2 mt-10">Skills.</p>

      <doughnut-chart :chartdata="chartdata"></doughnut-chart>

      <p class="display-3 ml-2 mt-10">Contact.</p>
      <p>메일 기능 구현할것</p>
    </v-container>
  </section>
</template>

<script>
export default {
  name: "Resume",
  components: {
    DoughnutChart: () => import("@/components/chart/DoughnutChart")
  },
  data: () => ({
    id: 2,
    intro: {
      titles: [`안녕하세요 :)`, `한상협 입니다.`],
      texts: [
        "배움과 성장에 관심이 가득한 2년차 프론트엔드 주니어 개발자입니다.",
        "새로운 기술에 대해 호기심이 많고, 자기개발에 큰 가치를 느낍니다.",
        "끊임없이 발전해 나가는 기술들을 새련된 방법으로 코드에 적용할 방법을 연구합니다."
      ]
    },
    projects: [],
    chartdata: {
      labels: ["Html 5", "Css 3", "Javascript", "Java"],
      datasets: [
        {
          backgroundColor: ["#ff6384", "#00B0FF", "#FDD835", "#DD1B16"],
          data: [20, 15, 40, 15]
        }
      ],
      options: {
        responsive: true,
        maintainAspectRatio: false,
        tooltips: {
          enabled: false
        },
        legend: {
          position: "bottom"
        }
      }
    }
  }),
  created() {
    this.projects = this.$t("resume.projects");
    console.log(this.projects);
  }
};
</script>

<style></style>
