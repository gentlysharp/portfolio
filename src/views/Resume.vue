<template>
  <section id="section1" class="mx-auto max-w-800">
    <v-container class="mt-12 pt-12">
      <v-card flat>
        <v-card-title
          v-for="(title,i) in intro.titles"
          :key="i"
          class="display-3 pa-2 font-weight-bold"
        >{{title}}</v-card-title>

        <br />
        <v-card-text
          v-for="(text,i) in intro.texts"
          :key="i"
          class="headline ma-0 pa-0 pl-3 font-weight-500"
        >{{text}}</v-card-text>
      </v-card>

      <p class="display-3"></p>
    </v-container>
  </section>
</template>

<script>
export default {
  name: "Resume",
  data: () => ({
    id: 2,
    intro: {
      titles: [`안녕하세요 :)`, `한상협 입니다.`],
      texts: [
        "프론트엔드 개발자 2년차 주니어 개발자입니다.",
        "배움과 성장에 관심이 많고, 자기개발하는 것을 좋아합니다.",
        "새로운 기술에 대해 호기심이 많으며, 계속해서 발전해 나가는",
        "기술들을 새련된 방법으로 코드에 적용할 방법을 연구합니다."
      ]
    },
    experience: {
      title: "Work Experience.",
      projects: [
        {
          company: "주식회사 도트만",
          title: "헬스네비 약국 컨텐츠 관리 시스템",
          description: [""],
          tasks: [
            "약국 관리 시스템 질환 정보 관리관련 CRUD 기능 개발",
            "각 약국의 정보 관리 CRUD 기능 개발"
          ]
        }
      ]
    },
    skil: {
      languages: ["Javascript", "HTML 5", "CSS 3", "JAVA"],
      frameworks: ["Vue JS", "Spring Boot"]
    }
  })
};
</script>

<style>
</style>