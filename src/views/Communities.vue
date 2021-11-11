<template>
  <v-main class="">
    <v-container fluid>
      <v-row justify="start" align="center">
        <v-col md="10" offset-md="1" offset-lg="1" lg="10" sm="10" cols="12">
          <v-container class="mb-0 pb-0">
            <v-row class>
              <v-col class="">
                <p
                  class="google-font mb-5"
                  style="font-size: 3.5vh;line-height: 1.22;font-weight:500;color:#0005DF"
                >
                  Our Communities
                </p>
                <p class="google-font mb-10" style="font-size:120%">
                  Communities from each chapter, all over the India have
                  gathered together to make India DevFest a success. Locate your
                  nearest google developer group and join them right here!
                </p>
                <iframe
                  src="https://www.google.com/maps/d/u/0/embed?mid=1F9Lyn8xgdMJwGUWr-BC1rjKVVeZTlv3A"
                  width="100%"
                  height="480"
                ></iframe>
              </v-col>
            </v-row>

            <v-row class="my-4">
              <v-col class="">
                <p
                  class="google-font mb-0"
                  style="font-size: 3.5vh;line-height: 1.22;font-weight:500;color:#0005DF"
                >
                  Our Partners Communities
                </p>
                <p class="google-font mb-10" style="font-size:120%">
                  A very big thank you to all our partners for their continued
                  partnership.
                </p>
                <v-container fluid class="ma-0 pa-0">
                  <v-row class="ma-0 pa-0">
                    <v-col
                      cols="6"
                      md="3"
                      xl="2"
                      lg="3"
                      sm="4"
                      v-for="(itemp, i) in partnersData"
                      :key="i"
                    >
                      <div class="client-logo ma-0">
                        <a
                          v-bind:href="itemp.link"
                          target="_blank"
                        >
                          <v-tooltip bottom>
                            <template v-slot:activator="{ on }">
                              <v-img
                                :src="require('@/assets/img/partners/'+itemp.img)"
                                :lazy-src="require('@/assets/img/partners/'+itemp.img)"
                                class="white"
                                contain
                                style="height:4em"
                                v-on="on"
                              >
                                <v-layout
                                  slot="placeholder"
                                  fill-height
                                  align-center
                                  justify-center
                                  ma-0
                                >
                                  <v-progress-circular
                                    indeterminate
                                    color="grey lighten-5"
                                  ></v-progress-circular>
                                </v-layout>
                              </v-img>
                            </template>
                            <span class="google-font">{{ itemp.name }}</span>
                          </v-tooltip>
                        </a>
                      </div>
                    </v-col>
                  </v-row>
                </v-container>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>

    <!-- <v-container fluid class="mb-5 pb-5 py-0 my-0">
      <v-row justify="center" align="center" class="px-0 my-0">
        <v-col md="10" lg="10" sm="11" cols="12" class="my-0 py-0">
          <v-container fluid class="my-0 py-0">
            <v-row class>
                <v-col md="12" class="my-0">
                </v-col>
              <v-col
                md="3"
                lg="3"
                xl="2"
                sm="4"
                cols="6"
                class="px-1"
                v-for="(item, index) in CommunityData"
                :key="index"
              >
                <div class="py-auto my-auto ma-1 whiteThemeCard community-card">
                  <a v-bind:href="item.link" target="_blank" class="my-2">
                    <v-tooltip bottom open-delay = "350">
                      <template v-slot:activator="{ on }">
                        <v-img
                          v-on="on"
                          :src="require('@/assets/img/communities/' + item.logo)"
                        ></v-img>
                      </template>
                      <span class="google-font">{{item.name}}</span>
                    </v-tooltip>
                  </a>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container> -->
  </v-main>
</template>

<script>
import CommunityData from "@/assets/data/community.json";
import partnersData from "@/assets/data/partners.json"
export default {
  name: "CommunityPage",
  data: () => ({
    CommunityData: [],
    partnersData:partnersData
  }),
  mounted() {
    this.CommunityData = this.sortByName(CommunityData);
    // console.log(this.CommunityData);
  },
};
</script>

<style>
.whiteThemeCard {
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
}

.community-card {
  height: 100px;
}

.community-card:hover {
  transition: 0.3s all ease-in-out;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.12);
}

.community-card .v-responsive {
  height: 100%;
}

.community-card .v-image__image--cover {
  background-size: contain;
}
</style>

<style scoped>
.client-logo{
    height: 90px;
    padding: 12px 12px;
    border-radius: 7px;
    background: white;
    border: 1px solid #ebebeb;
    text-align: center;
}
</style>
