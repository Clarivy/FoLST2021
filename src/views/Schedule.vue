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
          <p class="google-font mb-10" style="font-size: 120%">
            Follow code demonstrations by our expert speakers on 5  different tracks. Check out the schedule below and don't forget to mark your calendar so that you don't miss out on any sessions. <br /><br />
            Add <a :href="calanderEvents['Mobile'].link" target="_blank">Mobile</a>, <a :href="calanderEvents['Web'].link" target="_blank">Web</a>, <a :href="calanderEvents['Cloud'].link" target="_blank">Cloud</a>, <a :href="calanderEvents['Flutter'].link" target="_blank">Flutter</a>, and <a :href="calanderEvents['ML'].link" target="_blank">Machine Learning</a> Track to your Google Calendar.
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
    calanderEvents: {
      ML: {link:"https://www.google.com/calendar/render?action=TEMPLATE&text=Machine+Learning+Track+%7C+DevFest+India&details=Machine+Learning+Track+%0A%0AIn+the+ML+track%2C+We+will+build+an+end+to+end+predictive+model+pipeline+using+colab+then+will+learn+to+use+DevOps+for+ML+and+conclude+it+with+an+image+classification+case+study+to+classify+tumors+in+health+reports+using+TensorFlow.%0A%0ASee+the+sessions+at%3Ahttps%3A%2F%2Fwww.youtube.com%2Fc%2Fdevfestindia+on+Oct+16+to+Oct+18+from+04%3A00+PM+to+05%3A00+PM+%28IST%29+%0A%0ASee+more+details+about+the+DevFest+India%3A+https%3A%2F%2Fdevfestindia.com%0A%0A%23DevFestIndia+%23DevFest&dates=20201016T103000Z%2F20201018T113000Z",},
      General: {link: "",},
      Cloud: { link: "https://www.google.com/calendar/render?action=TEMPLATE&text=Cloud+Track+%7C+DevFest+India&details=Cloud+Track+%0A%0AIn+the+Cloud+track%2C+We+will+take+you+through+a+tour+of+GCP+followed+by+deploying+applications+and+analyzing+data+on+with+Big+Query+and+ML%2C+all+on+Google+Cloud.%0A%0ASee+the+sessions+at%3A+https%3A%2F%2Fwww.youtube.com%2Fc%2Fdevfestindia+on+Oct+16+to+Oct+18+from+08%3A00+PM+to+09%3A00+PM+%28IST%29+%0A%0ASee+more+details+about+the+DevFest+India%3A+https%3A%2F%2Fdevfestindia.com%0A%0A%23DevFestIndia+%23DevFest&dates=20201016T143000Z%2F20201018T153000Z" },
      Flutter: { link: "https://www.google.com/calendar/render?action=TEMPLATE&text=Flutter+Track+%7C+DevFest+India&details=Flutter+Track+%0A%0AIn+the+Flutter+track%2C+We+will+build+a+cross-platform+application+covering+the+concepts+of+UI+development+with+responsive+layouts%2C+navigation+concepts+and+API+management.%0A%0ASee+the+sessions+at%3A+https%3A%2F%2Fwww.youtube.com%2Fc%2Fdevfestindia+on+Oct+16+to+Oct+18+from+08%3A00+PM+to+09%3A00+PM+%28IST%29+%0A%0ASee+more+details+about+the+DevFest+India%3A+https%3A%2F%2Fdevfestindia.com%0A%0A%23DevFestIndia+%23DevFest&dates=20201017T123000Z%2F20201018T133000Z" },
      Mobile: { link: "https://www.google.com/calendar/render?action=TEMPLATE&text=Mobile+Track+%7C+DevFest+India&details=Mobile+Track+%0A%0AIn+the+Mobile+track%2C+We+will+build+a+clone+of+BookMyShow+App+using+UI+basics%2C+loading+dynamic+content+from+the+server+and+how+to+make+the+app+available+run+offline.%0A%0ASee+the+sessions+at%3A+https%3A%2F%2Fwww.youtube.com%2Fc%2Fdevfestindia+on+Oct+16+to+Oct+18+from+05%3A00+PM+to+06%3A00+PM+%28IST%29+%0A%0ASee+more+details+about+the+DevFest+India%3A+https%3A%2F%2Fdevfestindia.com%0A%0A%23DevFestIndia+%23DevFest&dates=20201016T113000Z%2F20201018T123000Z" },
      Web: { link: "https://www.google.com/calendar/render?action=TEMPLATE&text=Web+Track+%7C+DevFest+India&details=Web+Track+%0A%0AIn+the+Web+track%2C+We+will+build+a+cute+Pokemon+website+from+scratch.+It%27d+be+more+than+just+a+plain+site.+It%27d+be+Fast%2C+Integrated%2C+Reliable+and+Engaging+Progressive+Web+App+deployed+over+FIRE+base%21%0A%0ASee+the+sessions+at%3A+https%3A%2F%2Fwww.youtube.com%2Fc%2Fdevfestindia+on+Oct+16+to+Oct+18+from+07%3A00+PM+to+08%3A00+PM+%28IST%29+%0A%0ASee+more+details+about+the+DevFest+India%3A+https%3A%2F%2Fdevfestindia.com%0A%0A%23DevFestIndia+%23DevFest&dates=20201016T133000Z%2F20201018T143000Z" },
    },
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