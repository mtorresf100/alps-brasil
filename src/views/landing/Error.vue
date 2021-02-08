<template>
    <v-main
            align="center"
            fill-height
            class="error-page"
    >
        <v-row
                class="text-center"
                justify="center"
        >
            <v-col cols="auto">
                <h1 class="font-weight-black mb-6">{{ code }}</h1>
                <h4 class="description white--text mb-12">{{ text }}</h4>
                <v-btn :to="{name: 'Home'}" color="primary">Ir a Inicio</v-btn>
            </v-col>
        </v-row>
    </v-main>
</template>

<script>
  export default {
    name: "Error",
    props: {
      code: {
        type: [Number, String],
        default: 404
      },
      text: {
        type: [String],
        default: '¡Oop! Al parecer estás perdido.'
      }
    }
  }
</script>

<style lang="scss">
    .error-page {
        h1, .h1 {
            font-size: 12rem !important;
            color: white;
            line-height: 1.15em !important;
        }
    }
    @media (max-width: 991px) {
        .error-page {
            h1, .h1 {
                font-size: 9rem !important;
            }
        }
    }
</style>
