<template>
  <v-main>
    <v-container fluid class="my-0 py-0 mt-5 mb-10">
      <v-row align="start" justify="center" class="my-0 py-0">
        <v-col md="2" lg="2" sm="11" cols="12" class="px-5">
          <p class="google-font mb-5" style="font-size: 3.5vh;line-height: 1.22;font-weight:500;color:#0005DF">
            FAQ
          </p>
          <p class="google-font my-0">Need Answers?</p>
          <p class="google-font my-0">Find them here.</p>
        </v-col>
        <v-col md="8" lg="8" sm="11" cols="12">
          <v-container fluid>
                <v-row v-for="(coc,i) in faqData" :key="i">
                    <v-col md="6">
                        <p style="color:#0005DF;font-size:120%" class="google-font mb-2">{{coc.question}}</p>
                        <p>{{coc.answer}}</p>
                    </v-col>
                </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import data from "../assets/data/faq.json";
export default {
  data() {
    return {
      faqData: data,
    };
  },
};
</script>