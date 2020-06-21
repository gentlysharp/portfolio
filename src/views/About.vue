<template>
  <div>
    <section id="section1" class="mx-auto max-w-800">
      <v-container class="mt-12 pt-12">
        <v-card flat>
          <v-card-title class="display-1">{{title}}</v-card-title>
          <v-card-text>{{date}}</v-card-text>
        </v-card>
        <hr />

        <v-card class="my-3" flat>
          <v-card-title class="display-1">{{intro.title}}</v-card-title>
          <v-card-text
            v-for="(content,i) in intro.contents"
            :key="i"
            class="ma-0 pa-1 pl-4"
          >{{content}}</v-card-text>
        </v-card>

        <hr />

        <v-card class="d-flex" flat>
          <v-spacer></v-spacer>

          <v-avatar class="ma-12" size="150">
            <img :src="avatar" alt="Han" />
          </v-avatar>
          <v-card flat>
            <v-card-text class="headline font-weight-bold mt-12 pa-0 pt-5">Sang Hyup Han</v-card-text>
            <v-card-text class="title pa-0 mt-0">주니어지만 개발자다운 포트폴리오를 만들고 싶었습니다.</v-card-text>
            <v-btn v-for="(s ,i) in this.$context.sns" :key="i" :href="s.href" large icon>
              <v-icon>{{s.icon}}</v-icon>
            </v-btn>
          </v-card>
        </v-card>
      </v-container>
    </section>
  </div>
</template>

<script>
export default {
  name: "About",
  data: () => ({
    id: 1,
    title: "About",
    avatar: require("@/assets/images/about/about-avatar.jpg"),
    intro: {
      title: "#첫줄",
      contents: [
        `경력 기술서를 쓰다. 문득 생각이 들었다. `,
        `"프론트 엔드 개발자의 기량을 보여주기에 이런 이력서 형식이 적합한가"  `,
        `"아니.. 나 개발자인데? "`,
        `뜬금없고 허세가득한 주니어 개발자 부심이 발동했다. `,
        `그러다 이내 다시 고심에 빠졌다. `,
        `"그럼 어떻게..?"`,
        `어떻게라는 질문을 만나면 늘 그렇듯 구글링.. ㅎㅎ `,
        `다른 개발자들 이력서가 눈에들어온다.`,
        `깔끔한 디자인, 멋진 인스타그램 페이지, 깨알같은 블로그까지...`,
        `"그래. 저정도는 해야 프론트엔드 개발자라고 할수있지!"`,
        `시작이었다.`
      ]
    },

    date: "created date"
  })
};
</script>

<style>
</style>