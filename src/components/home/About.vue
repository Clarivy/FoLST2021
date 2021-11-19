<template>
  <v-container fluid class="py-10 ma-0">
    <v-row justify="center" align="center" >
      <v-col md="6" cols="12" class="py-7 text-center" >
        <v-img
          class="white"
          style="width:90%"
          :src="require('@/assets/img/about.jpg')"
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="white"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-col>
      <v-col md="6" cols="12" class="py-6" >
        <p class="google-font" style="font-size: 110%;line-height: 1.22;font-weight:300;line-height: 1.6;">
          Officially approved to open on 30 September 2013 by China’s Ministry of Education, ShanghaiTech University is a small-scale research university of academic excellence jointly established by Shanghai Municipal Government and Chinese Academy of Sciences. SLST at ShanghaiTech aims to develop into a world-class, research-oriented school in life science and technology, drawing strength not only from its outstanding full-time faculty but also from five world-class biomedical research institutions (iHuman, NCPSS, SBME, SCRTC and SIAIS) at or around ShanghaiTech as well as from selected faculty members jointly appointed with institutes of Chinese Academy of Sciences in Shanghai who conduct world-class research.
        </p>

      </v-col>
    </v-row>
   </v-container>
</template>

<script>
export default {
  name: "About",
  components: {
  },
};
</script>
