<template >
  <v-main class="ma-0">
    <v-container
      fluid
      class="pb-0"
      :class="this.$vuetify.theme.dark == true?'grey darken-4 elevation-1':'white-border white'"
    >
      <v-row justify="center" align="center">
        <v-col md="10" class="">
          <v-container fluid class="my-2">
            <v-row justify="start" align="center" class="">
              <v-col md="12" class="text-center" >
                <p class="google-font mb-0" style="font-size: 3.5vh;line-height: 1.22;font-weight:500;color:#0005DF">Check out our speaker lineup</p>
                <p class="google-font" style="width:80%;margin-left:auto;margin-right:auto;font-size:110%">
                  Interested in Android, Flutter, Web, Cloud, ML technologies? <br>
                  Join the vibrant and divrse set of speakers where you can learn, network, share knowledge and enjoy the experience.
                </p>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid class="mb-5 pb-5">
      <v-row justify="center" align="center">
        <v-col md="10" lg="10" sm="11" cols="12">

          <v-container>
            <v-row class>
              <v-col
                md="3"
                lg="3"
                xl="2"
                sm="4"
                cols="6"
                class="px-1"
                v-for="(item, index) in SpeakersData"
                :key="index"
              >
                <Speakers :data="item" :SessionDetails="SessionDetails" />
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
      <!-- <v-row justify="center" align="center">
        <v-col md="8" xl="7">
          <SocialShare/>
        </v-col>
      </v-row> -->
    </v-container>
  </v-main>
</template>

<script>
import SpeakersData from "@/assets/data/speakers.json";
import SessionDetails from "@/assets/data/sessions.json";
export default {
  name: "SpeakersPage",
  components: {
    Speakers:()=>import('@/components/speakers/SpeakerDetails'),
    // SocialShare: () => import("@/components/common/SocialInfo")
  },
  data: () => ({
    SpeakersData: [],
    SessionDetails:[]
  }),
  mounted() {
    this.SpeakersData = this.sortByName(SpeakersData)
    this.SessionDetails = SessionDetails.sort((a,b)=>{
      return (a.id > b.id)?1:-1;
    });
  }
};
</script>

<style scoped>
.white-border{
  border-bottom: 1px solid #e0e0e0 !important;
}
</style>
