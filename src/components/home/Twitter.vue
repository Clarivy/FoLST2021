<template>
  <v-container fluid class="ma-0 pa-0 px-2">
    <v-row justify="center" align="center" class="pa-0">
      <v-col md="10" cols="12" class="ma-0 pa-0">
        <p
          class="google-font mb-2 ml-3"
          style="font-size: 3.5vh;line-height: 1.22;font-weight:500"
        >
          #DevFest Tweets
        </p>
        <v-container fluid>
          <v-row>
            <v-col
        v-for="tweet in tweets.slice(0,4)"
        md="6"
        cols="12"
        :key="tweet.id_str"
      >
        <v-skeleton-loader
          width="100%"
          type="card"
          :loading="isLoading"
        >
          <v-card
            class="mx-auto elevation-0"
            light
            :rounded="false"
            style="border:1px solid #F1F3F4;border-radius:8px"
            v-if="tweet.user"
          >
            <v-list-item style="background:#F1F3F4">
              <v-list-item-avatar color="#eee">
                <img
                  :src="
                    tweet.user
                      .profile_image_url_https
                  "
                  :alt="tweet.user.name"
                />
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title
                  class="google-font"
                  >{{
                    tweet.user.name
                  }}</v-list-item-title
                >
                <!-- <v-list-item-subtitle>
                  <span
                    >@{{
                      tweet.user.screen_name
                    }}</span
                  >
                </v-list-item-subtitle> -->
              </v-list-item-content>
              <v-list-item-action>
                <a
                  :href="tweet.url"
                  class="text-decoration-none"
                  target="_blank"
                  ><v-btn icon>
                    <v-icon>mdi-open-in-new</v-icon>
                  </v-btn></a
                >
              </v-list-item-action>
            </v-list-item>

            <v-img
              v-if="tweet.extended_entities"
              :src="
                tweet.extended_entities.media[0]
                  .media_url_https
              "
              height="194"
            ></v-img>
            <v-card-text class="google-font" style="font-size:105%">
              "{{ tweet.fulltext }}"
            </v-card-text>
          </v-card>
        </v-skeleton-loader>
        </v-col>
          </v-row>
        </v-container>
        
      </v-col>
      
    </v-row>
  </v-container>
</template>
<script>
import Axios from "axios";
function linkify(inputText) {
  var replacedText,
    replacePattern1,
    replacePattern2,
    replacePattern3;
  //URLs starting with http://, https://, or ftp://
  replacePattern1 = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#/%?=~_|!:,.;]*[-A-Z0-9+&@#/%=~_|])/gim;
  replacedText = inputText.replace(
    replacePattern1,
    ""
  );
  //URLs starting with "www." (without // before it, or it'd re-link the ones done above).
  replacePattern2 = /(^|[^/])(www\.[\S]+(\b|$))/gim;
  replacedText = replacedText.replace(
    replacePattern2,
    ""
  );
  //Change email addresses to mailto:: links.
  replacePattern3 = /(([a-zA-Z0-9\-_.])+@[a-zA-Z_]+?(\.[a-zA-Z]{2,6})+)/gim;
  replacedText = replacedText.replace(
    replacePattern3,
    ""
  );
  return replacedText;
}
function getUrl(username, id) {
  return `https://twitter.com/${username}/status/${id}`;
}
export default {
  name: "LiveTwitter",
  data() {
    return {
      isLoading: true,
      tweets: [
        { id_str: "1" },
        { id_str: "2" },
        { id_str: "3" },
        { id_str: "4" },
        { id_str: "5" },
        { id_str: "6" },
      ],
    };
  },
  methods: {
    setLoading: function(isLoading) {
      this.isLoading = isLoading;
    },
    setTweets: function(data) {
      this.tweets = data.map((d) => {
        d.fulltext = linkify(d.full_text);
        d.url = getUrl(
          d.user.screen_name,
          d.id_str
        );
        return d;
      });
    },
  },
  mounted() {
    Axios.get(
      "https://devfestinda.herokuapp.com/tweet"
    ).then((res) => {
      if (res.data) {
        if (res.data.status) {
          console.log(res.data.tweets);
          this.setLoading(false);
          this.setTweets(res.data.tweets);
        }
      }
    });
  },
};
</script>