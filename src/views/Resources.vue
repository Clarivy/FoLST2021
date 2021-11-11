<template>
  <v-main>
    <v-container fluid class="my-0 py-0 mt-5 mb-10">
      <v-row align="start" justify="center" class="my-0 py-0">
        <v-col md="2" lg="2" sm="11" cols="12" class="px-5">
          <p class="google-font mb-5" style="font-size: 3.5vh;line-height: 1.22;font-weight:500;color:#0005DF">
            Resources
          </p>
          <p class="google-font my-0">#YouCanBeAnArtistToo as you follow the code demonstration by our expert speakers. Check out the resourecs Based on your interests.</p>
          <p class="google-font my-0"></p>
        </v-col>
        <v-col md="8" lg="8" sm="11" cols="12" class="my-0 py-0">
          <v-container fluid class="my-0 py-0">
                <v-row>
                    <v-col md="4" cols="12" sm="6" v-for="(resource) in resources" :key="resource.track">
                        <reourceDetails :data="resource" />
                    </v-col>
                </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import resources from "../assets/data/resources.json";
export default {
  components:{
      reourceDetails: ()=> import('@/components/resource/resourceDetails')
  },
  data() {
    return {
      resources: resources,
    };
  },
};
</script>