<template>
  <v-app-bar
          v-bind="$attrs"
          :dark="dark"
          elevate-on-scroll
          v-scroll="onScroll"
          fixed
          :color="color"
  >
    <v-container class="px-0 text-right d-flex align-center">
      <v-toolbar-title
              class="font-weight-light hidden-xs-only"
              v-text="title"
      />

      <v-spacer />

      <v-btn
              tag="a"
              v-for="(item, i) in items"
              :key="i"
              :href="item.to"
              @click="item.action"
              min-height="48"
              min-width="40"
              text
      >
        <v-icon
                :left="$vuetify.breakpoint.mdAndUp"
                size="20"
                v-text="item.icon"
        />

        <span class="hidden-sm-and-down" v-text="item.text" />
      </v-btn>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  name: "LandingCoreAppBar",

  data: (vm) => ({
    dark: true,
    color: "transparent",
    items: [],
    titles: {
      "/": "Inicio",
    },
  }),
  methods: {
    onScroll: function () {
      let color = this.$vuetify.theme.isDark ? "" : "white";
      this.color = window.scrollY > 100 ? color : "transparent";
      this.dark = !(window.scrollY > 100);
    },
  },
  computed: {
    title() {
      return this.titles[this.$route.path] || "Inicio";
    },
  },
};
</script>
