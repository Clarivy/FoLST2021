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
            Schedule
          </p>
          <v-tabs
            v-model="model"
            :grow="getMobileTab()"
            :centered="getMobileTab()"
            color="#0005DF"
            slider-color="#0005DF"
          >
            <v-tab href="#day1"> December 16 </v-tab>
            <v-tab href="#day2"> December 17 </v-tab>
            <v-tab href="#day3"> December 18 </v-tab>
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
                <v-row>
                  <v-col>
                    <ScheduleDetails :data="ScheduleData[0]" />
                  </v-col>
                </v-row>
              </v-container>
            </v-tab-item>
            <v-tab-item
              value="day2"
              :class="$vuetify.theme.dark ? 'black' : 'white'"
            >
              <v-container>
                <v-row>
                  <v-col>

                    <ScheduleDetails :data="ScheduleData[1]" />
                  </v-col>
                </v-row>
              </v-container>
            </v-tab-item>
            <v-tab-item
              value="day3"
              :class="$vuetify.theme.dark ? 'black' : 'white'"
            >
              <v-container>
                <v-row>
                  <v-col>

                    <ScheduleDetails :data="ScheduleData[2]" />
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
import ScheduleDetails from "@/components/schedule/ScheduleDetails";
import ScheduleData from "@/assets/data/schedule.json";
export default {
  name: "",
  components: {
    ScheduleDetails
  },
  data: () => ({
    model: "day1",
    ScheduleData: [],
  }),
  mounted() {
    this.ScheduleData = ScheduleData;
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
