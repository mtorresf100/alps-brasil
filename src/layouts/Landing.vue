<template>
    <v-app>
        <landing-core-app-bar></landing-core-app-bar>
        <landing-parallax>
            <landing-jumbotron :src="bg" opacity="0.1">
                <v-container class="fill-height justify-center" style="width: 100%">
                    <v-row align="center" class="text-center" justify="center">
                      <v-overlay v-if="$vuetify.breakpoint.mdAndUp" :style="styles" opacity="0.8">
                      </v-overlay>
                        <v-col class="mb-10">
                            <landing-heading>
                              <span class="indigo--text">Fed</span>
                              <span class="red--text">Ex</span>
                            </landing-heading>
                          <v-divider style="border-color: white"></v-divider>
                            <landing-sub-heading>
                              ALPS Brasil
                            </landing-sub-heading>
                        </v-col>
                    </v-row>
                </v-container>
            </landing-jumbotron>
        </landing-parallax>
        <router-view></router-view>
        <landing-footer></landing-footer>
        <UpdateAvailable></UpdateAvailable>
    </v-app>
</template>

<script>
  export default {
    name: "Landing",
    components: {
      LandingCoreAppBar: () => import("@/components/landing/core/AppBar"),
      LandingParallax: () => import("@/components/landing/Parallax"),
      LandingHeading: () => import("@/components/landing/Heading"),
      LandingSubHeading: () => import("@/components/landing/Subheading"),
      LandingJumbotron: () => import("@/components/landing/Jumbotron"),
      LandingFooter: () => import("@/components/landing/core/Footer"),
      UpdateAvailable: () => import("@/components/base/UpdateAvailable"),
    },
    data: () => ({
      bg: require('@/assets/bg.jpg'),
      title: process.env.VUE_APP_TITLE
    }),
    computed: {
      styles() {
        return this.$vuetify.breakpoint.mdAndUp ?
        {
          height: '300px',
          marginTop: '15%',
          zIndex: -1
        }
        : {}
      }
    },
  }
</script>


<style lang="sass" scoped>

</style>
