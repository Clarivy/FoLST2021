<template>
  <v-container fluid class="">
    <v-row>
      <v-col class="">
        <p
          class="google-font mb-2"
          style="font-size: 3.5vh;line-height: 1.22;font-weight:500"
        >
          DevFest Shots
        </p>
        <p class="google-font" style="font-size: 2.0vh">
         DevFest is a tech fest & welcoming event, made for and run by developers to bring community-led technical learning to energize your mind and put on an even better event.
        </p>
      </v-col>
    </v-row>
    <v-row class="ma-0 pa-0">
      <v-col md="12">
        <v-slide-group
          v-model="model"
          class="pa-4"
          active-class="success"
          show-arrows
        >
          <v-slide-item
            v-for="(item, index) in imgs"
            :key="index"
            style="height:400px"
            v-slot:default="{ active, toggle }"
          >
            <v-img
              class="ma-4"
              :color="active ? undefined : 'grey lighten-1'"
              :src="require('@/assets/img/2019/'+item.img)"
              style="width: 10%;"
              @click="toggle"
            ></v-img>
          </v-slide-item>
        </v-slide-group>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    model: null,
    imgs: [
      {
        name: "",
        img:
          "3.jpg",
      },
      {
        name: "",
        img:
          "2.jpg",
      },
      {
        name: "",
        img:
          "6.jpg",
      },
      {
        name: "",
        img:
          "4.jpeg",
      },
      {
        name: "",
        img:
          "5.jpeg",
      },
    ],
  }),
};
</script>
