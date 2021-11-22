<template>
  <v-footer class="ma-0" height="auto">
    <v-container
      fluid
      class="grey lighten-4"
    >
      <v-row justify="center" align="center">
        <v-col md="10" lg="9" sm="11" xl="9" cols="12">
          <v-card-text class="mx-0 px-0" style="height: 40px; position: relative">
            <h1
              class="google-font"
            >FoLST2021</h1>
          </v-card-text>
        </v-col>
      </v-row>
      <v-row justify="center" align="center">
        <v-col md="10" sm="11" xl="9" lg="9" cols="12" class="">
          <div target="_blank"
            rel="noreferrer"
            class="grey--text text--darken-3 mr-4 google-font"
            style="text-decoration:none;"
          >Powered by GeekPie</div>
          <br class="hidden-md-and-up">
          <a
            href="https://www.shanghaitech.edu.cn/"
            class="mr-3 google-font grey--text text--darken-3"
            style="text-decoration:none;"
          >About ShanghaiTech</a>
          <br class="hidden-md-and-up">
          <a
              href="https://slst.shanghaitech.edu.cn/"
              class="mr-3 google-font grey--text text--darken-3"
              style="text-decoration:none;"
          >About SLST</a>
          <a
              href="https://github.com/DevFest-India/devfestindia-2020"
              class="mr-3 google-font grey--text text--darken-3"
              style="text-decoration:none;"
          >Using source code from DevFest-India</a>
          <div>

          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  methods: {
    toTop() {
      this.$vuetify.goTo(0);
    }
  }
};
</script>
