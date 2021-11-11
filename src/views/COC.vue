<template>
  <v-main>
    <v-container fluid class="my-0 py-0 mt-5 mb-10">
      <v-row align="start" justify="center" class="my-0 py-0 px-2">
        <v-col md="2" lg="2" sm="11" cols="12" class="px-5">
          <h1 class="google-font mt-4">Code of Conducts</h1>
        </v-col>
        <v-col md="8" lg="8" sm="11" cols="12" class="">
            <v-container>
                <v-row v-for="(coc,i) in cocData.coc" :key="i">
                    <v-col md="6">
                        <p style="color:#0005DF;font-size:120%" class="google-font mb-2">{{coc.name}}</p>
                        <p>{{coc.des}}</p>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <p class="google-font" style="font-size:120%">If you witness any attendee breaching the code of conduct, please reach out to us at <b>devfestindia@gmail.com</b>.</p>
                    </v-col>
                </v-row>
            </v-container>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import data from "@/assets/data/coc.json";
export default {
  data() {
    return {
      cocData: data,
    };
  },
};
</script>