<template>
  <div>
    <section id="section1" class="mx-auto max-w-800">
      <v-container class="mt-12 pt-12">
        <v-card flat>
          <v-card-title class="display-1">{{$t('about.title')}}</v-card-title>
          <v-card-text>{{$t('about.date')}}</v-card-text>
        </v-card>
        <hr />

        <v-card class="my-3" flat>
          <v-card-title class="display-1">{{$t('about.subtitle')}}</v-card-title>
          <v-card-text
            v-for="(text,i) in $t('about.texts')"
            :key="i"
            class="ma-0 pa-1 pl-4"
          >{{text}}</v-card-text>
        </v-card>
        <hr />

        <v-card class="d-flex" flat>
          <div class="my-5 ml-3">
            <v-avatar class size="150">
              <img :src="avatar" alt="Han" />
            </v-avatar>
          </div>

          <v-card class="ml-3" flat>
            <v-card-text class="headline mt-5 pb-0 font-weight-bold">{{$t('profile.name')}}</v-card-text>
            <v-card-text class="title py-1">{{$t('profile.message')}}</v-card-text>
            <div class="ml-2">
              <v-btn v-for="(s ,i) in this.$context.sns" :key="i" :href="s.href" large icon>
                <v-icon>{{s.icon}}</v-icon>
              </v-btn>
            </div>
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
    date: "created date"
  })
};
</script>

<style>
</style>