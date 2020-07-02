<template>
  <div>
    <section id="blog-section1" class="mx-auto max-w-800">
      <v-container class="mt-5">
        <v-card class="d-flex justify-space-between" flat>
          <v-card flat>
            <v-card-title class="display-1">{{$t('blog.title')}}</v-card-title>
            <v-card-text>{{$t('blog.subtitle')}}</v-card-text>
          </v-card>

          <v-card flat>
            <v-card-title class="ma-5">게시글 {{count}}</v-card-title>
          </v-card>
        </v-card>
        <hr />
      </v-container>

      <v-row>
        <v-col cols="8">
          <v-card flat>
            <v-list three-line>
              <template v-for="(item, index) in items">
                <v-subheader v-if="item.header" :key="item.header" v-text="item.header"></v-subheader>

                <v-divider v-else-if="item.divider" :key="index"></v-divider>

                <v-list-item v-else :key="item.title">
                  <v-list-item-content>
                    <v-list-item-title v-html="item.title"></v-list-item-title>
                    <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </template>
            </v-list>
          </v-card>
        </v-col>

        <v-col cols="4">
          <v-card flat>
            <v-list flat>
              <v-subheader>menus</v-subheader>
              <v-list-item-group v-model="model">
                <v-list-item v-for="(item, i) in listItems" :key="i">
                  <v-list-item-icon>
                    <v-icon v-text="item.icon"></v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title v-text="item.text"></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>

            <v-list flat>
              <v-subheader>menus</v-subheader>
              <v-list-item-group v-model="model">
                <v-list-item v-for="(item, i) in listItems" :key="i">
                  <v-list-item-icon>
                    <v-icon v-text="item.icon"></v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title v-text="item.text"></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-card>
        </v-col>
      </v-row>
    </section>
  </div>
</template>

<script>
export default {
  data: () => ({
    count: 0,
    model: 1,
    listItems: [
      {
        icon: "mdi-inbox",
        text: "Inbox"
      },
      {
        icon: "mdi-star",
        text: "Star"
      },
      {
        icon: "mdi-send",
        text: "Send"
      },
      {
        icon: "mdi-email-open",
        text: "Drafts"
      }
    ],

    items: [
      { header: "Today" },
      {
        title: "Brunch this weekend?",
        subtitle:
          "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
      },
      { divider: true },
      {
        title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
        subtitle:
          "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend."
      },
      { divider: true },
      {
        title: "Oui oui",
        subtitle:
          "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?"
      },
      { divider: true },
      {
        title: "Birthday gift",
        subtitle:
          "<span class='text--primary'>Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?"
      },
      { divider: true },
      {
        title: "Recipe to try",
        subtitle:
          "<span class='text--primary'>Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos."
      },
      { divider: true },
      {
        title: "Recipe to try",
        subtitle:
          "<span class='text--primary'>Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos."
      },
      { divider: true },
      {
        title: "Recipe to try",
        subtitle:
          "<span class='text--primary'>Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos."
      },
      { divider: true }
    ]
  }),
  created() {
    console.log(this.$t("blog"));
  }
};
</script>

<style>
</style>