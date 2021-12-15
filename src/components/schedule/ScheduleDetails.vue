<template>
  <v-container fluid class="" v-if="data">
    <v-row
      justify="center"
      align="center"
      v-for="(item, index) in data['schedule']"
      :key="index"
      :class="$vuetify.theme.dark ? 'row-border-dark ' : 'row-border-white'"
      class="pa-0 my-0 "
    >
      <v-col md="2" cols="3" class="text-right my-0 py-0">
        <p style="font-size:130%" class="mb-0 google-font">
          {{ item.startTime }}
        </p>
        <p style="font-size:80%" class="ma-0 google-font">{{ item.endTime }}</p>
<!--        <p class="mt-1 google-font" style="font-size:70%">-->
<!--          <b style="color:grey">GMT (+08:00)</b>-->
<!--        </p>-->
      </v-col>
      <v-col
        class="my-0"
        :class="
          $vuetify.theme.dark
            ? 'schedule-details-dark col-border-dark'
            : 'schedule-details-white col-border-white'
        "
        cols="9"
        md="10"
      >
        <ScheduleDialog :data="getSessionData(item.session)" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ScheduleDialog from "@/components/schedule/ScheduleDialog";
import SessionsData from "@/assets/data/sessions.json";
export default {
  props: ["data"],
  components: {
    ScheduleDialog,
  },
  data: () => ({
    SessionsData: SessionsData,
  }),
  methods: {
    getSessionData(id) {
      return this.SessionsData.filter((sd) => sd.id == id)[0];
    },
  },
};
</script>

<style scoped>
.schedule-details-white:hover {
  background: #fafafa;
}
.schedule-details-dark:hover {
  background: #433e47;
}
.row-border-white {
  border-bottom: 1px solid #e0e0e0;
}
.row-border-dark {
  border-bottom: 1px solid #292929;
  background: black;
}
.col-border-white {
  border-left: 1px solid #e0e0e0;
}
.col-border-dark {
  border-left: 1px solid #292929;
}
</style>
