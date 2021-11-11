<template>
  <v-dialog v-model="dialog" width="800" scrollable>
    <template v-slot:activator="{ on }">
      <div
        v-on="on"
        style="cursor: pointer;"
        class="text-center py-5 ma-1 fill-height whiteThemeCard"
      >
        <v-avatar size="100" color="mt-2">
          <img :src="getTeamImgUrl(data.image)" :lazy-src="getTeamImgUrl(data.image)" alt />
        </v-avatar>
        <p class="mt-3 mb-0 google-font mb-0" style="font-size:110%">{{ data.name }}</p>
        <p class="mt-1 mb-0 google-font mt-0" style="font-size:80%;width:95%;margin-left:auto;margin-right:auto">{{ data.company.name }}</p>
        <!-- {{data.social}} -->
        <socialMediaDetails :socaillinks="data.social" />
      </div>
    </template>

    <v-card class="white">
      <v-card-text class="pa-5">
        <v-container>
          <v-row>
            <v-col md="4" cols="12" class="text-center">
              <v-avatar size="100">
                <img :src="getTeamImgUrl(data.image)" :lazy-src="getTeamImgUrl(data.image)" alt />
              </v-avatar>
              <p class="google-font mt-3 mb-0" style="font-size:140%">
                <b>{{ data.name }}</b>
              </p>
              <p class="google-font mt-1" style="font-size:100%">
                {{ data.company.designation }}<span v-if="data.company.name">, {{ data.company.name }}</span>
              </p>
              <socialMediaDetails class="pl-0 ml-0" :socaillinks="data.social" />
            </v-col>
            <v-col md="8" cols="12">
              <p
                class="google-font"
                style="font-size:110%;word-break:normal;font-weight:bold"
              >{{data.community.designation}}<span v-if="data.community.designation">,</span> {{data.community.name}}</p>
              <p class="google-font" style="font-size:110%" v-html="data.bio"></p>
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
  props: ["data"],
  data() {
    return {
      dialog: false
    };
  },
  mounted() {},
  methods: {
    goToTeam(id) {
      this.$router.push("/team/" + id);
    }
  },
  filters: {
    summary: (val, num) => {
      if (val.length > num) return val.substring(0, num) + "..";
      else return val;
    }
  }
};
</script>

<style>
.whiteThemeCard {
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
}
</style>