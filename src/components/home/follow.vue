<template>
  <v-container fluid class="">
    <v-row justify="center" align="center">
      <v-col>
        <p
          class="google-font"
          style="font-size: 3.5vh;line-height: 1.22;font-weight:500"
        >
          Keep in touch with FoLST 2021 for the latest announcements
        </p>
        <p class="google-font mb-2" style="font-size: 2.0vh;">
          Let's get connected so that we can reach out to each other via a simple notification.
          <br />Stake out
          <a
            href="https://twitter.com/DevFestIndia"
            rel="noreferrer"
            target="_blank"
            style="color:#0005DF;text-decoration:none"
          >#DevFestIndia</a>
          for the updates and news.
        </p>
        <v-tooltip bottom >
          <template v-slot:activator="{ on }">
            <v-btn
              text
              icon
              style="background:#0005DF"
              class="mx-2"
              v-on="on"
              color="white"
              rel="noreferrer"
              href="https://twitter.com/DevfestIndia"
              target="_blank"
              slot="activator"
            >
              <v-icon>mdi-twitter</v-icon>
            </v-btn>
          </template>
          <span>Twitter</span>
        </v-tooltip>

         <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-btn
                text
                icon
                style="background:#0005DF"
                class="mx-2"
                color="white"
                v-on="on"
                rel="noreferrer"
                href="https://www.youtube.com/channel/UCJsZoFDt7rfxPBI1esak8JQ/"
                target="_blank"
                slot="activator"
              >
                <v-icon>mdi-youtube</v-icon>
              </v-btn>
            </template>
            <span>YouTube</span>
          </v-tooltip>

          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-btn
                text
                icon
                v-on="on"
                style="background:#0005DF"
                class="mx-2"
                color="white"
                rel="noreferrer"
                href="https://www.instagram.com/devfestindia/"
                target="_blank"
                slot="activator"
              >
                <v-icon>mdi-instagram</v-icon>
              </v-btn>
            </template>
            <span>Instagram</span>
          </v-tooltip>

          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-btn
                text
                icon
                v-on="on"
                style="background:#0005DF"
                class="mx-2"
                color="white"
                rel="noreferrer"
                href="https://www.linkedin.com/events/devfestindia6717758014834696192/"
                target="_blank"
                slot="activator"
              >
                <v-icon>mdi-linkedin</v-icon>
              </v-btn>
            </template>
            <span>Linkedin</span>
          </v-tooltip>

          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-btn
                text
                icon
                v-on="on"
                style="background:#0005DF"
                class="mx-2"
                color="white"
                rel="noreferrer"
                href="https://www.facebook.com/events/705286906861605/"
                target="_blank"
                slot="activator"
              >
                <v-icon>mdi-facebook</v-icon>
              </v-btn>
            </template>
            <span>Facebook</span>
          </v-tooltip>

          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-btn
                text
                icon
                v-on="on"
                style="background:#0005DF"
                class="mx-2"
                color="white"
                rel="noreferrer"
                href="https://github.com/DevFest-India"
                target="_blank"
                slot="activator"
              >
                <v-icon>mdi-github</v-icon>
              </v-btn>
            </template>
            <span>GitHub</span>
          </v-tooltip>
      </v-col>
    </v-row>
  </v-container>
</template>
