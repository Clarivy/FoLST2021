<template>
  <v-main class="m-0">
    <v-container fluid class="mt-0 py-0">
<!-- :style="{'background-image':'url('+require('@/assets/img/bg.png')+')'}" style="background-size:1500px" -->
      <v-row align="center" justify="center" class="mt-0 pt-0" >
        <v-col md="10" lg="10" sm="12" class="my-4" >
          <Hero class="mt-md-8 mb-md-0 my-xs-0 py-xs-0"/>
          <!-- <Countdown class="mt-md-8 mb-md-0 my-xs-0 py-xs-0"/> -->
          <YoutubeLinks class="mt-md-8 mb-md-0 my-xs-0 py-xs-0"/>
          <About class="mt-md-8 mb-md-0 my-xs-0 py-xs-0"/>
          <Theme class="mt-md-8 mb-md-0 my-xs-0 py-xs-0" />
          <Stats class="mt-md-8 mb-md-0 my-xs-0 py-xs-0"/>
          <DevFestMoments class="mt-md-8 mb-md-0 my-xs-0 py-xs-0"/>
          <card class="mt-md-8 mb-md-0 my-xs-0 py-xs-0 hidden-sm-and-down"/>
        
        </v-col>
      </v-row>

      <!-- style="background:#f8f9fa" -->
      <!-- style="background:#0cad4d" -->
      <!-- <v-row align="center" justify="center" style="border-top:1px solid #e0e0e0" >
        <v-col md="10" lg="10" sm="12" >
          <Twitter class="mt-md-8 mb-md-0 my-xs-0 py-xs-0" />
        </v-col>
      </v-row> -->

      <!-- Theme -->
      <!-- <v-row align="center" justify="center" class="py-0 my-0" >
        <v-col md="10" lg="9" sm="12" class="py-0 my-0">
          <Theme class="mt-md-8 mb-md-0 my-xs-0 py-xs-0" />
          
        </v-col>
      </v-row> -->

      <!-- Follow Us -->
      <v-row align="center" justify="center" class="" >
        <v-col md="6" lg="6" sm="10" class="text-center">
          <FollowUs class="mt-md-0 mb-md-10 my-xs-0" />
        </v-col>
      </v-row>

    </v-container>
  </v-main>
</template>

<script>
export default {
  name: "Home",
  components: {
    Hero:()=> import("@/components/home/Hero"),
    // Countdown:()=> import("@/components/home/Countdown"),
    YoutubeLinks:()=> import("@/components/home/YoutubeLinks"),
    About:()=> import("@/components/home/About"),
    DevFestMoments: () => import("@/components/home/DevFestMoments"),
    FollowUs: () => import("@/components/home/follow"),
    // Twitter: () => import("@/components/home/Twitter"),
    // HomeScreen: ()=> import('@/components/home/homescreen'),
    Stats: ()=> import('@/components/home/Stats'),
    Theme: ()=> import('@/components/home/theme'),
    card: ()=> import('@/components/home/cards'),
  },
};
</script>
