<template>
  <v-dialog v-model="dialog" width="900">
    <template v-slot:activator="{ on }">
      <div
        v-on="on"
        style="cursor: pointer;"
        class="py-5 px-4 ma-1 fill-height"
        :class="$vuetify.theme.dark == true ? 'darkModeCard' : 'whiteThemeCard'"
      >
        <p class="mt-3 mb-0 google-font mb-0" style="font-size:120%;color:#0005DF">{{ data.track }}</p>
        <p class="mt-1 mb-0 google-font mt-0" style="font-size:100%;" v-html="data.desc"></p>
        <p class="mt-3 mb-0 google-font mt-0">See More</p>
      </div>
    </template>

    <v-card :class="theme.isDark ? 'grey darken-3' : 'white'" v-if="dialog">
      <v-card-text class="pa-5">
        <v-container>
          <v-row>
            <v-col md="12">
              <p class="mt-3 mb-0 google-font mb-0" style="font-size:200%;color:#0005DF">{{ data.track }} Track Resources</p>
              <p class="mt-3 mb-0 google-font mb-0" style="font-size:110%" v-html="data.desc"></p>

              <p style="font-size:150%" class="mt-3 mb-1 google-font" v-if="data.instruction"><b>Instruction</b></p>
              <p style="font-size:110%" class="google-font" v-html="data.instruction"></p>
              
              <p style="font-size:150%" class="mt-3 mb-1 google-font" v-if="data.tools.length>0"><b>Tools and Software</b></p>
              <ul class="mt-0" v-for="(item) in data.tools" :key="item.name" >
                <li v-html="item.name" style="font-size:110%" class="google-font my-0"></li>
              </ul>

              <p style="font-size:150%" class="mt-3 mb-1 google-font" v-if="data.day1.length>0 || data.day2.length>0 || data.day3.length>0"><b>PreRequisites</b></p>
              <p style="font-size:110%" class="mt-3 mb-1 google-font" v-if="data.day1.length>0"><b>Day 1</b></p>
              <ul class="mt-0" v-for="(item) in data.day1" :key="item.name" >
                <li v-html="item.name" style="font-size:110%" class="google-font my-0"></li>
              </ul>

              <p style="font-size:110%" class="mt-3 mb-1 google-font" v-if="data.day2.length>0"><b>Day 2</b></p>
              <ul class="mt-0" v-for="(item) in data.day2" :key="item.name" >
                <li v-html="item.name" style="font-size:110%" class="google-font my-0"></li>
              </ul>

              <p style="font-size:110%" class="mt-3 mb-1 google-font" v-if="data.day3.length>0"><b>Day 3</b></p>
              <ul class="mt-0" v-for="(item,index) in data.day3" :key="index" >
                <li v-html="item.name" style="font-size:110%" class="google-font my-0"></li> 
              </ul>

              <v-btn class="mt-5" color="black" dark depressed :href="data.github" v-if="data.github.length>0">Github</v-btn>
              <br><br>
                <!-- {{data}} -->
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions :class="this.$vuetify.theme.dark == true?'grey darken-3':'grey lighten-3'">
        <v-spacer></v-spacer>
        <v-btn aria-label="close" color="primary" text @click="dialog = false">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  components: {
  },
  inject: ["theme"],
  props: ["data"],
  data() {
    return {
      dialog: false,
    };
  },
  mounted(){
  },
  methods:{
    
  }
};
</script>

<style scoped>
.darkModeCard {
  background-color: #292929;
  border: 1px solid #212121;
  border-radius: 5px;
}
.whiteThemeCard {
  background: white;
  border: 1px solid #e0e0e0;
  /* border-top: 4px solid #0005DF; */
  border-radius: 5px;
}
</style>