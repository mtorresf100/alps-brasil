<template>
    <v-app>
        <dashboard-core-app-bar v-model="expandOnHover" />

        <dashboard-core-drawer :expand-on-hover.sync="expandOnHover" />

        <dashboard-core-view />
    </v-app>
</template>

<script>
  export default {
    name: "Dashboard",
    components: {
      DashboardCoreAppBar: () => import("@/components/dashboard/core/AppBar"),
      DashboardCoreDrawer: () => import("@/components/dashboard/core/Drawer"),
      DashboardCoreView: () => import("@/components/dashboard/core/View"),
    },

    data: () => ({
      expandOnHover: false,
    }),
  }
</script>

<style scoped>

</style>
