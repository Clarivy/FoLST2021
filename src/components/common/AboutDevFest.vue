<template>
  <div class="">
    <v-dialog v-model="dialog" width="700" scrollable>
      <template v-slot:activator="{ on }">
        <v-btn outlined color="indigo" depressed dark v-on="on"
          >See More Info About DevFest</v-btn
        >
      </template>

      <v-card class="white" v-if="dialog">
        <v-card-text class="pa-5">
          <v-container>
            <v-row>
              <v-col md="12" cols="12">
                <p class="google-font" style="font-size:110%">
                  DevFest 2020 brings together thousands of developers globally
                  for the largest virtual weekend of community-led technical
                  learning and a shared passion for Google technologies on Oct
                  16-18. The magic of DevFest has always come from the people
                  involved - developers from all different backgrounds and skill
                  levels. For DevFest 2020, Google Developer Groups are coming
                  together in a whole new way - virtually over one weekend. This
                  global moment empowers developers to teach, learn, and connect
                  when they may need it the most.
                </p>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions class="grey lighten-3">
          <v-spacer></v-spacer>
          <v-btn aria-label="close" color="primary" text @click="dialog = false"
            >Close</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      dialog: false,
    };
  },
  mounted() {},
  methods: {},
};
</script>

<style scoped>
.darkModeCard {
  background-color: #292929;
  border: 1px solid #212121;
  border-radius: 5px;
}
.whiteThemeCard {
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
}
</style>
