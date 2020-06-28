<template>
  <div>
    <section id="section1" class="mx-auto max-w-800">
      <v-container class="mt-5">
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
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1000"
          >{{ text }}</v-card-text>
        </v-card>

        <p class="display-3 ml-2 mt-10 font-weight-bold">Work Experience.</p>

        <v-row>
          <v-col cols="12" md="12" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
            <v-card flat>
              <v-card-title class="headline font-weight-bold">
                <v-icon class="mr-2" color="#f04c23">mdi-office-building</v-icon>주식회사 도트만
              </v-card-title>
              <v-card-subtitle class="title pb-0 mx-8">Frontend Developer</v-card-subtitle>
              <v-card-text class="mx-8">2018.11 ~ 현재</v-card-text>
            </v-card>
            <v-divider></v-divider>
          </v-col>

          <v-col v-for="(project,i) in projects" :key="i.project" cols="12" md="12">
            <v-card flat>
              <v-card-title class="headline font-weight-bold">
                <v-icon class="mr-2" color="#f04c23">mdi-folder-zip-outline</v-icon>
                {{project.title}}
              </v-card-title>
              <v-card-subtitle class="subtitle-1">{{project.period}}</v-card-subtitle>
            </v-card>

            <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
              <v-card flat>
                <v-card-title class="title font-weight-bold">Description</v-card-title>
                <v-card-subtitle>{{project.detail}}</v-card-subtitle>
              </v-card>

              <v-card flat>
                <v-card-title>Project SPEC</v-card-title>
                <ul v-for="(spec,i) in project.spec" :key="i">
                  <li>{{spec}}</li>
                </ul>
              </v-card>
            </div>
            <v-divider class="mt-10"></v-divider>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <section id="section2" class="mx-auto max-w-800">
      <v-container>
        <p class="display-3 ml-2 font-weight-bold">Skills.</p>
        <doughnut-chart
          :chartdata="chartdata"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="1000"
        ></doughnut-chart>
        <v-divider class="mt-10"></v-divider>
      </v-container>

      <v-container>
        <v-row>
          <v-col
            v-for="(skill,i) in skills"
            :key="i.project"
            cols="12"
            md="12"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1000"
          >
            <v-card flat>
              <v-card-title class="headline pb-5 font-weight-bold">
                <v-icon class="mr-2" :color="skill.color">{{skill.icon}}</v-icon>
                {{skill.title}}
              </v-card-title>
              <v-card-subtitle>{{skill.description}}</v-card-subtitle>
            </v-card>
            <v-divider class="mt-10"></v-divider>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <section id="section3" class="mx-auto max-w-800">
      <v-container>
        <v-card flat>
          <v-card-title class="display-3 font-weight-bold">English Skill.</v-card-title>

          <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
            <v-card-text class="subtitle-1 py-1">Experience: {{english.experience}}</v-card-text>
            <v-card-text class="subtitle-1 py-0">Trem: {{english.term}}</v-card-text>
            <v-card-text class="subtitle-1 py-0">Level: {{english.level}}</v-card-text>
            <v-card-text>{{english.description}}</v-card-text>
          </div>
        </v-card>
        <v-divider class="mt-10"></v-divider>
      </v-container>
    </section>
    <section id="section4" class="mx-auto max-w-800">
      <v-container>
        <v-card flat>
          <v-card-title class="display-3 font-weight-bold">Contact.</v-card-title>
          <v-card-text
            class="subtitle-1 ml-2"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1000"
          >Email: sanghyuphan33@gmail.com</v-card-text>
          <div class="ml-3">
            <v-btn v-for="(s ,i) in this.$context.sns" :key="i" :href="s.href" large icon>
              <v-icon>{{s.icon}}</v-icon>
            </v-btn>
          </div>
        </v-card>
      </v-container>
    </section>
  </div>
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
        "기본적인 지식들과 빠르게 발전해 나가는 기술 트렌드를 바탕으로 새련된 코드를 구성할 방법에 대해 연구합니다."
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
    this.skills = this.$t("resume.skills");
    this.english = this.$t("resume.english");
  }
};
</script>

<style></style>
