<template>
  <v-container fluid class="py-0">
    <!-- Desktop Screen Class hidden-sm-and-down -->
    <v-row justify="center" align="center" class="py-5">
      <v-col md="6" cols="12" class="order-md-1 order-2">
        <p class="google-font mb-2" style="font-size: 5.5vh;line-height: 1.22;font-weight:900">FoLST2021</p>
        <p class="google-font mb-2" style="font-size: 2.2vh;line-height: 1.22;font-weight:500; color:grey;">Frontier of Life Science and Technology</p>
        <p class="google-font mb-2" style="font-size: 2.2vh;line-height: 1.22;font-weight:500; color:grey">In ShanghaiTech University</p>
        <p class="devfest-font mt-5 mb-3" style="font-size:115%">
          <v-icon class="mb-1">mdi-calendar-text</v-icon>&nbsp;December 16-18,
          2021
        </p>
        <p class="google-font my-10" style="font-size: 110%;line-height: 1.22;font-weight:300;line-height: 1.6;">
          We would like to invite you to give a talk at the Frontier of Life Science and Technology (FoLST2021), organised by the School of Life Science and Technology (SLST) at ShanghaiTech University, with the help from iHuman Institute (iHuman), National Centre for Protein Science Shanghai (NCPSS), School of Biomedical Engineering (SBME), Shanghai Clinical Research and Trial Centre (SCRTC) and Shanghai Institute for Advanced Immunochemical Studies (SIAIS). The conference will take place on the campus of ShanghaiTech University (1 Zhongke Road, Pudong, Shanghai 201210, China) on 16-18 December 2021.
        <br><br>
        The purpose of this conference is to provide an opportunity to discuss the growing fields of life science and technology in areas such as immunity and metabolism, molecular/cellular/developmental biology, neuroscience, structural biology, genomics/genetics/systems cell biology/omics, stem cell and regeneration, as well as health care management. Since the frontier of life science and technology has drawn people from a wide array of backgrounds working in many different systems, we hope that by bringing many of us together for such a forum we can begin to forge an interactive community of people. Your participation would greatly promote this goal.
        </p>
        <!-- <v-btn
          dark
          color="#0005DF"
          large
          depressed
          style="text-transform: capitalize;border-radius:5px;padding:00% 10%;"
          href="https://feedback.devfestindia.com/"
          class="google-font mr-3 mb-3"
          >Feedback</v-btn
        > -->

        <v-btn
          depressed
          rel="noreferrer"
          large
          style="text-transform: capitalize;border-radius:5px;border:1px solid #e0e0e0;color:#0005DF;background-color:white"
          href="https://www.wjx.top/vj/t8o4Z5p.aspx"
          class="google-font mr-3 mb-3"
          target="_blank"
          >Register for the conference</v-btn
        >
      </v-col>
      <v-col md="6" cols="12" class="text-center order-md-2 order-1">
        <v-img
          class="white"
          :src="require('@/assets/img/home.png')"
          style="border-radius:20px;"
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
    </v-row>
   </v-container>
</template>
