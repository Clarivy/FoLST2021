<template>
  <v-main class="ma-0">
    <v-container
      fluid
      class="pb-0"
      :class="$vuetify.theme.dark ? 'row-border-dark' : 'row-border-white'"
    >
      <v-row justify="center" align="center">
        <v-col md="10" class="py-0 my-0">
          <p
            class="google-font mt-8 mb-5"
            style="
              font-size: 3.5vh;
              line-height: 1.22;
              font-weight: 500;
              color: #0005df;
            "
          >
            Quiz Winners
          </p>
          <v-tabs
            v-model="model"
            :grow="getMobileTab()"
            :centered="getMobileTab()"
            color="#0005DF"
            slider-color="#0005DF"
          >
            <v-tab href="#day1"> October 16 </v-tab>
            <v-tab href="#day2"> October 17 </v-tab>
            <v-tab href="#day3"> October 18 </v-tab>
          </v-tabs>
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid>
      <v-row justify="center" align="center">
        <v-col md="10">
          <v-tabs-items v-model="model">
            <v-tab-item
              value="day1"
              :class="$vuetify.theme.dark ? 'black' : 'white'"
            >
              <v-container>
                <v-row align="center" justify="center">
                  <v-col md="10">
                    <WinnerList :userData="day1" />
                  </v-col>
                </v-row>
              </v-container>
            </v-tab-item>
            <v-tab-item
              value="day2"
              :class="$vuetify.theme.dark ? 'black' : 'white'"
            >
              <v-container>
                <v-row align="center" justify="center">
                  <v-col md="10">
                    <WinnerList :userData="day2" />
                  </v-col>
                </v-row>
              </v-container>
            </v-tab-item>
            <v-tab-item
              value="day3"
              :class="$vuetify.theme.dark ? 'black' : 'white'"
            >
              <v-container>
                <v-row align="center" justify="center">
                  <v-col md="10">
                    <WinnerList :userData="day3" />
                  </v-col>
                </v-row>
              </v-container>
            </v-tab-item>
          </v-tabs-items>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import Day1Data from "@/assets/data/winners/day1.json";
import Day2Data from "@/assets/data/winners/day2.json";
import Day3Data from "@/assets/data/winners/day3.json";
export default {
  name: "",
  components: {
    WinnerList:()=>import("@/components/winners/WinnersView"),
    // SocialShare: () => import("@/components/common/SocialShare")
  },
  data: () => ({
    model: "day1",
    day1: [],
    day2:[],
    day3:[]
  }),
  mounted() {
    this.day1 = Day1Data;
    this.day2 = Day2Data;
    this.day3 = Day3Data;
  },
  methods: {
    getMobileTab() {
      if (window.innerWidth < 500) return true;
      else return false;
    },
  },
};
</script>

<style >
.row-border-white {
  border-bottom: 1px solid #e0e0e0;
}
.row-border-dark {
  border-bottom: 1px solid #292929;
  background: #212121;
}
.v-slide-group__prev {
  display: none !important;
}
</style>

<style scoped>
  a{
    /* color:black */
  }
</style>