<template>
  <v-container fluid class="py-10">
    <!-- Desktop Screen Class hidden-sm-and-down -->
    <v-row justify="center" align="center" >
      <v-col md="6" cols="11" class="py-7 pl-10" style="background: #FFFFFF 0% 0% no-repeat padding-box;box-shadow: 0px 3px 16px #DCEAFF;border-radius: 10px;opacity: 1;"> 
        <p class="google-font mb-0">The countdown has begun...</p>
        <Timer deadline="October 16, 2020, 15:00"/>
      </v-col>
    </v-row>
   </v-container>
</template>

<script>
export default {
  name: "Countdown",
  components: {
    Timer:()=> import("@/components/home/Timer"),
  },
};
</script>
