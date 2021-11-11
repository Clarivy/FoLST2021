<template>
  <v-container fluid class="py-10 mx-0 px-2">
    <v-row justify="center" align="center">
      <v-col md="12" lg="12" cols="12">
        <p
          class="google-font mb-2"
          style="font-size: 3.5vh;line-height: 1.22;font-weight:500"
        >
          DevFest Moments
        </p>
        <p class="google-font" style="font-size: 2.0vh">
         The DevFest is powered by a shared belief that when developers come together to exchange ideas, amazing things can happen! And here are our community trails having tons of amazing people, sessions, knowledge and just that spirit.
         <a href="https://www.youtube.com/watch?v=i4C1s_bhYJs&list=PLlaYvYzhTrYkP9wuA32SW9Cz0f6g5JmFd" target="_blank" style="color:#0005DF">See More videos</a>
        </p>
        
      </v-col>
    </v-row>
    <v-row>
      <v-col md="4" lg="3" cols="12" v-for="(item, index) in contents" :key="index" >
          <v-img
            :src="item.image"
            :lazy-src="item.image"
            width="100%"
            aspect-ratio="16:9"
            cover
            style="border-radius:8px;"
            gradient="to bottom, rgba(0,0,0,.1), #212121"
          >
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-row>
            </template>
            <v-card-title
              class="fill-height align-end google-font pb-3 white--text"
            >
              <div>
                <p class="my-0 pb-0" style="font-size:105%">
                  {{ item.community }}
                </p>
                <v-btn
                  x-small
                  color="white"
                  text
                  target="_blank"
                  :href="item.link"
                  style="padding-left:0;font-weight: bold;"
                >
                  <v-icon x-small left>
                    mdi-play-circle-outline
                  </v-icon>
                  Watch
                </v-btn>
              </div>
            </v-card-title>
            <v-layout
              slot="placeholder"
              fill-height
              align-center
              justify-center
              ma-0
            >
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-layout>
          </v-img>
      </v-col>
      <v-col md="12">
        
        <!-- <v-slide-group
          v-model="model"
          class="pa-0"
          active-class="success"
        >
          <v-slide-item
            v-for="n in contents"
            :key="n.community"
            v-slot:default="{ active, toggle }"
          >
            <v-card
              :color="active ? undefined : 'grey lighten-1'"
              class="ma-4"
              height="180"
              width="300"
              @click="toggle"
            >
              <v-row class="fill-height elevation-1" align="center" justify="center">
                <v-img :src="n.image"></v-img>
              </v-row>
            </v-card>
          </v-slide-item>
        </v-slide-group> -->
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "DevFestMoments",
  components: {},
  data:()=>({
    model: null,
    contents:[
        {
            "community":" GDG | Andhra Pradesh",
            "link":"https://youtu.be/-GceZHG-4gQ",
            "image":"https://img.youtube.com/vi/Jdxw5E7sDwE/mqdefault.jpg"
        },
        {
            "community":"GDG | New Delhi",
            "link":"https://youtu.be/dZoS5WEHgNo",
            "image":"https://img.youtube.com/vi/dZoS5WEHgNo/mqdefault.jpg"
        },
        {
            "community":"GDG | Punjab",
            "link":"https://youtu.be/NPd6ENnKDbc",
            "image":"https://img.youtube.com/vi/NPd6ENnKDbc/mqdefault.jpg"
        },
        {
            "community":"GDG | Tamil Nadu",
            "link":"https://youtu.be/qs8w9BjhXjE",
            "image":"https://img.youtube.com/vi/qs8w9BjhXjE/mqdefault.jpg"
        }
    ]
  })
};
</script>
