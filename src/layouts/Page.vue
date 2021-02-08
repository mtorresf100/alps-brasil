<template>
    <v-app>
        <PageCoreAppBar absolute></PageCoreAppBar>
        <PageView></PageView>
        <PageFooter absolute dark></PageFooter>
    </v-app>
</template>

<script>
  export default {
    name: "Page",
    components: {
      PageCoreAppBar: () => import("@/components/landing/core/AppBar"),
      PageView: () => import("@/components/page/core/PageView"),
      PageFooter: () => import("@/components/landing/core/Footer"),
    },
  }
</script>

<style scoped>

</style>
