<template>
  <v-container
    fluid
    class="pa-0 ma-0 white"
    style = "height:100%"
  >
    <v-slide-y-reverse-transition>
      <router-view v-show="show" />
    </v-slide-y-reverse-transition>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      fab: false,
    };
  },
  created() {
    this.show = true;
  },
  methods: {
  },
};
</script>
