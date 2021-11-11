<template>
  <v-dialog v-model="dialog" width="800" scrollable>
    <template v-slot:activator="{ on }">
      <div
        v-on="on"
        style="cursor: pointer;"
        class="text-center py-5 ma-1 fill-height"
        :class="$vuetify.theme.dark == true ? 'darkModeCard' : 'whiteThemeCard'"
      >
        <v-avatar size="100">
          <img :src="getImgUrl(data.image)" :lazy-src="getImgUrl(data.image)" alt />
        </v-avatar>
        <p class="mt-3 mb-0 google-font mb-0" style="font-size:110%">{{ data.name }}</p>
        <p class="mt-1 mb-0 google-font mt-0" style="font-size:80%;">{{ data.company.name }}</p>
        <socialMediaDetails  :socaillinks="data.social" />
      </div>
    </template>

    <v-card :class="theme.isDark ? 'grey darken-3' : 'white'" v-if="dialog">
      <v-card-text class="pa-5">
        <v-container>
          <v-row>
            <v-col md="4" cols="12" class="text-center">
              <v-avatar size="100">
                <img :src="getImgUrl(data.image)" :lazy-src="getImgUrl(data.image)" alt />
              </v-avatar>
              <p class="google-font mt-3 mb-0" style="font-size:140%">
                <b>{{ data.name }}</b>
              </p>
              <p class="google-font mt-1" style="font-size:100%">
                {{ data.company.designation }}
                <span v-if="data.company.name">,&nbsp;</span>
                {{ data.company.name }}
              </p>
              <!-- {{data.social}} -->
              <socialMediaDetails class="pl-0 ml-0" :socaillinks="data.social" />
            </v-col>
            <v-col md="8" cols="12">
              <p class="google-font" style="font-size:110%">{{ data.bio }}</p>

              <p class="my-0 google-font mt-2" v-if="data.sessionId.length > 0" style="font-size:120%">
                <b>Sessions:</b>
              </p>

              <v-col
                cols="12"
                md="8"
                class="px-0 my-0 py-0"
                v-for="(itemp) in data.sessionId"
                :key="itemp.id"
              >
                <div v-for="(item) in binarySearchSession(itemp)" :key="item.id" class="" style="width:100%">
                    <v-list
                      two-line
                      subheader
                      class="pa-0 ma-0"
                      :class="theme.isDark ? 'grey darken-3' : 'white'"
                      style="width:100%"
                    >
                      <v-list-item class="pa-0" style="width:100%">
                        <v-list-item-content>
                          <v-list-item-title
                            class="google-font text-wrap"
                            style="text-align:left;"
                          >{{ item.title }}</v-list-item-title>
                          <v-list-item-subtitle class="google-font">
                            <!-- {{ item.track }} -->
                            <!-- <br /> -->
                            <v-chip
                              color="#00BFA5"
                              label
                              outlined
                              class="mt-2 mb-0"
                              x-small
                            >{{ item.format }}</v-chip>
                            <v-chip
                              color="#00BFA5"
                              label
                              outlined
                              class="mt-2 mb-0 ml-2"
                              x-small
                            >{{ item.track }}</v-chip>
                          </v-list-item-subtitle>
                        </v-list-item-content>
                      </v-list-item>
                    </v-list>
                  </div>
              </v-col>
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
import socialMediaDetails from "@/components/common/SocialInfo";
export default {
  components: {
    socialMediaDetails
  },
  inject: ["theme"],
  props: ["data", "SessionDetails"],
  data() {
    return {
      dialog: false,
    };
  },
  mounted(){
  },
  methods:{
    binarySearchSession(id){
      let low = 0;
      let high = this.SessionDetails.length;
      while(low<=high){
        let mid = Math.floor(low+(high-low)/2);
        if(this.SessionDetails[mid].id == id){
          return [this.SessionDetails[mid]];
        }else if(this.SessionDetails[mid].id > id){
          high = mid-1;
        }else{
          low = mid+1;
        }
      }
    }
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