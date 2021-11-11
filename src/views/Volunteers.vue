<template>
  <v-main class="">
    <v-container
      fluid
    >
      <v-row justify="center" align="center" class="mt-5">
        <v-col md="7" lg="7" sm="11" cols="12" class="text-center">
            <h1 class="google-font mb-5" style="color:#0005DF">
                Our Volunteers
            </h1>
            <p class="google-font">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ad incidunt nam. Deserunt accusamus minima expedita esse labore nisi error ipsum tenetur, vero aspernatur accusantium dolorem quidem reiciendis iste sequi.
            </p>
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid class="mb-5 pb-5">
      <v-row justify="center" align="center" class="px-0">
        <!-- style="margin-top: -150px;" -->
        <v-col md="10" lg="10" sm="11" cols="12">
          <v-container>
            <v-row class>
              <v-col
                md="3"
                lg="3"
                xl="2"
                sm="4"
                cols="6"
                class="px-1"
                v-for="(item, index) in TeamData"
                :key="index"
              >
                <TeamMember :data="item" />
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import TeamMember from "@/components/team/TeamDetails";
import TeamData from "@/assets/data/volunteers.json";
export default {
  name: "TeamPage",
  components: {
    TeamMember,
  },
  data: () => ({
    TeamData: [],
  }),
  mounted() {
    this.TeamData = this.sortByName(TeamData);
  },
};
</script>
