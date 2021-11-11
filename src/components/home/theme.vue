<template>
  <v-container fluid class="py-10 my-10">
    <v-row justify="start" align="start">
      <v-col md="3" lg="3" sm="12" cols="12" class="mt-2">
        <p
          class="google-font mb-2"
          style="font-size: 3.5vh;line-height: 1.22;font-weight:500"
        >
          Explore Tracks
        </p>
        <p class="google-font" style="font-size: 110%">
          #YouCanBeAnArtistToo as you follow the code demonstration by our expert speakers
        </p>
      </v-col>
      <v-col md="9" lg="9" sm="12" cols="12" class="">
        <v-container fluid class="pa-0 ma-0">
          <v-row>
            <v-col
              md="6"
              cols="12"
              sm="6"
              v-for="(item, index) in maindata.theme"
              :key="index"
            >

              <div
                style="border:1px solid #DCEAFF;border-radius:7px"
                class="fill-height pa-5"
              >
                <span
                  ><v-img
                    :src="require('@/assets/img/icons/' + item.img)"
                    align="middle"
                    width="5vh"
                    class="mb-4"
                  ></v-img
                ></span>
                <span class="google-font mb-0" style="font-size:135%">
                  {{ item.name }}
                </span>
                <p class="mt-4 google-font mb-0" style="font-size:110%">
                  {{ item.content }}
                </p>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import maindata from "@/assets/data/main.json";
export default {
  data: () => ({
    maindata: maindata,
  }),
};
</script>
