<template>
  <v-list-item
    :href="href"
    :rel="href && href !== '#' ? 'noopener' : undefined"
    :to="to"
    :active-class="`${activeColor} ${
      !$vuetify.theme.dark ? 'white' : 'white'
    }--text`"
  >
    <v-list-item-icon
      v-if="text"
      class="v-list-item__icon--text"
      v-text="computedText"
    />

    <v-list-item-icon class="text-center" v-else-if="item.icon">
      <v-icon class="text-center" v-text="item.icon" />
    </v-list-item-icon>

    <v-list-item-content v-if="item.title || item.subtitle">
      <v-list-item-title v-text="item.title" />

      <v-list-item-subtitle v-text="item.subtitle" />
    </v-list-item-content>
  </v-list-item>
</template>

<script>
  import Themeable from "vuetify/lib/mixins/themeable";

export default {
  name: "Item",

  mixins: [Themeable],

  props: {
    item: {
      type: Object,
      default: () => ({
        action: () => ({}),
        href: undefined,
        icon: undefined,
        subtitle: undefined,
        title: undefined,
        to: undefined,
      }),
    },
    text: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    computedText() {
      if (!this.item || !this.item.title) return "";

      let text = "";

      this.item.title.split(" ").forEach((val) => {
        text += val.substring(0, 1);
      });

      return text.toUpperCase();
    },
    href() {
      return this.item.href || (!this.item.to ? "#" : undefined);
    },
    to() {
      return this.item.to
    },
    activeColor: function () {
      return 'primary';
    },
  },
};
</script>
