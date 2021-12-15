<template>
  <v-dialog v-model="dialog" width="800" scrollable>
    <template v-slot:activator="{ on }">
      <div v-on="on" style="cursor: pointer" class="py-3 ma-1 fill-height">
        <p style="font-size: 130%" class="mb-0 google-font">{{ data.title }}</p>
        <!-- <p style="font-size:100%" class="mb-0 google-font">{{data.description}}</p> -->
        <v-chip
          outlined
          class="mt-2 mr-2"
          pill
          :color="trackColors[data.track].color"
          small
        >
          <v-avatar left>
            <v-img
              v-if="trackColors[data.track].svg"
              :src="
                require('@/assets/img/icons/' + trackColors[data.track].svg)
              "
            ></v-img>
            <v-icon small v-else>
              {{ trackColors[data.track].icon }}
            </v-icon>
          </v-avatar>
          {{ data.track }}</v-chip
        >
        <!-- <v-chip class="mt-2 mr-2" label small>{{ data.format }}</v-chip> -->
        <span v-for="(itemp, indexp) in speakers" :key="indexp">
          <v-chip pill class="mt-2 mr-2" outlined small>
            <v-avatar left>
              <!-- <v-icon small>mdi-account-circle-outline</v-icon> -->
              <img :src="getImgUrl(itemp.image)" />
            </v-avatar>
            {{ itemp.name }}
          </v-chip>
        </span>
      </div>
    </template>

    <v-card
      class="pa-0"
      :class="theme.isDark ? 'grey darken-3' : 'white'"
      v-if="dialog"
    >
      <iframe
        v-if="data.link"
        class="ma-0 pa-0"
        width="100%"
        height="315"
        style="border: none"
        :src="'https://www.youtube.com/embed/'+data.link"
      >
      </iframe>
      <v-card-title
        class="google-font"
        style="background-position: right bottom"
      >
        <p class="google-font mb-0" style="font-size: 110%">
          {{ data.title }} Details
        </p>
        <v-spacer></v-spacer>
      </v-card-title>
      <v-card-text class="px-5">
        <v-divider></v-divider>
        <v-container>
          <v-row>
            <v-col md="12" cols="12">
              <!-- <v-chip
                small
                label
                class="mr-2"
                outlined
                :color="trackColors[data.track].color"
                >{{ data.track }}</v-chip
              > -->
              <v-chip
                outlined
                class="mr-2"
                pill
                :color="trackColors[data.track].color"
                small
              >
                <v-avatar left>
                  <v-img
                    v-if="trackColors[data.track].svg"
                    :src="
                      require('@/assets/img/icons/' +
                        trackColors[data.track].svg)
                    "
                  ></v-img>
                  <v-icon small v-else>
                    {{ trackColors[data.track].icon }}
                  </v-icon>
                </v-avatar>
                {{ data.track }}</v-chip
              >
              <v-chip small pill>{{ data.format }}</v-chip>
              <p class="google-font my-1" style="font-size: 110%" v-show="data.chairs">
                <b>Chairs:</b> {{ data.chairs }}
              </p>
              <div class="google-font my-1" style="font-size: 110%; white-space: pre-line;">
                <b>Description:</b><br/>
                {{data.description}}
              </div>
              <v-chip
                v-if="data.slide"
                :href="data.slide"
                color="indigo"
                outlined
                target="_blank"
                class="mt-2 mr-2"
                label
              >
                <v-avatar left>
                  <v-icon small>mdi-note-outline</v-icon>
                </v-avatar>
                Presentation
              </v-chip>
              <v-container fluid class="px-0 mx-0">
                <v-row
                  class="pa-0 ma-0"
                  v-for="(itemp, indexp) in speakers"
                  :key="indexp"
                >
                  <v-col class="pa-0 ma-0">
                    <v-list
                      two-line
                      subheader
                      class="pa-0 ma-0"
                      :class="theme.isDark ? 'grey darken-3' : 'white'"
                    >
                      <v-list-item class="my-0 py-0">
                        <v-list-item-avatar>
                          <img :src="getImgUrl(itemp.image)" />
                        </v-list-item-avatar>
                        <v-list-item-content>
                          <v-list-item-title class="google-font">{{
                            itemp.name
                          }}</v-list-item-title>
                          <v-list-item-subtitle
                            class="google-font text-wrap"
                            v-if="itemp.company.designation"
                          >
                            {{ itemp.company.designation }}
                            <span v-if="itemp.company.name">,</span>
                            {{ itemp.company.name }}
                          </v-list-item-subtitle>
                        </v-list-item-content>
                      </v-list-item>
                    </v-list>
                  </v-col>
                </v-row>
              </v-container>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions
        :class="
          this.$vuetify.theme.dark == true ? 'grey darken-3' : 'grey lighten-3'
        "
      >
        <v-spacer></v-spacer>
        <v-btn aria-label="close" color="primary" text @click="dialog = false"
          >Close</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import SpeakersData from "@/assets/data/speakers.json";
export default {
  components: {},
  inject: ["theme"],
  props: ["data"],
  data() {
    return {
      dialog: false,
      SpeakersData: SpeakersData,
      speakers: [],
      trackColors: {
        ML: { color: "#fbbc04", svg: "MachineLearning.svg" },
        General: {
          color: "#424242",
          icon: "mdi-account-supervisor-circle-outline",
        },
        Cloud: { color: "#eb4b3d", svg: "Cloud.svg" },
        Flutter: { color: "#4385f3", svg: "FlutterWeb.svg" },
        Mobile: { color: "#4f4fe7", svg: "Mobile.svg" },
        Web: { color: "#5ab973", svg: "Web.svg" },
      },
    };
  },
  mounted() {
    this.speakers = [];
    this.data.speakers.map((spid) => {
      this.SpeakersData.map((spdata) => {
        if (spid == spdata.id) {
          this.speakers.push(spdata);
        }
      });
    });
  },
  filters: {
    summary: (val, num) => {
      if (val.length > num) return val.substring(0, num) + "..";
      else return val;
    },
  },
};
</script>
