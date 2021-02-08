<template>
  <v-snackbar
    v-model="snackWithButtons"
    :timeout="-1"
    bottom
    left
  >
    Nueva Versión Disponible
    <template v-slot:action="{ attrs }">
      <v-btn
        aria-label="Recargar"
        dark
        text
        color="info"
        @click.native="refreshApp"
      >
        Recargar
      </v-btn>
      <v-btn
        aria-label="Cerrar"
        icon
        @click="snackWithButtons = false"
      >
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  name: "NewUpdateAvailable",
  data: () => ({
    refreshing: false,
    registration: null,
    snackWithButtons: false,
  }),
  methods: {
    showRefreshUI(e) {
      // Display a snackbar inviting the user to refresh/reload the app due
      // to an app update being available.
      // The new service worker is installed, but not yet active.
      // Store the ServiceWorkerRegistration instance for later use.
      this.registration = e.detail;
      this.snackWithButtons = true;
    },
    refreshApp() {
      this.snackWithButtons = false;
      this.clearAll();
      window.location.reload();
      // Protect against missing registration.waiting.
      // Make sure we only send a 'skip waiting' message if the SW is waiting
      if (!this.registration || !this.registration.waiting) return
      // Send message to SW to skip the waiting and activate the new SW
      this.registration.waiting.postMessage({ type: 'SKIP_WAITING' })

    },
    clearAll() {
      if(window.navigator && navigator.serviceWorker) {
        navigator.serviceWorker.getRegistrations()
          .then(function(registrations) {
            for(let registration of registrations) {
              registration.unregister();
            }
          });
      }
      if (window.caches) {
        window.caches.keys().then(function(names) {
          for (let name of names)
            window.caches.delete(name);
        });
      }
    }
  },
  created() {
    if ( document ) {
      // Listen for swUpdated event and display refresh snackbar as required.
      document.addEventListener('swUpdated', this.showRefreshUI, { once: true });
    }

    if ( navigator.serviceWorker ) {
      // Refresh all open app tabs when a new service worker is installed.
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        if (this.refreshing) return;
        this.refreshing = true;
        this.clearAll();
        window.location.reload();
      });
    }

  },
}
</script>

<style scoped>

</style>
