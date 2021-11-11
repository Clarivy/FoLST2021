<template>
  <v-dialog v-model="dialog" width="500" scrollable persistent>
    <template v-slot:activator="{ on }">
      <v-btn color="#0005DF" outlined style="text-transform: capitalize" depressed dark v-on="on">
        <v-icon left>mdi-account</v-icon>
        Sign In/Sign Up</v-btn
      >
    </template>

    <v-card class="pa-0 white" v-if="dialog">
      <v-card-text class="px-0">
        <v-divider></v-divider>
        <v-container fluid>
          <v-row class="py-0 my-0" style="border-bottom: 1px solid #e0e0e0;">
            <v-col md="12" cols="12" class="py-0 my-0">
              <v-tabs v-model="section" color="#0005DF" slider-color="#0005DF">
                <v-tab href="#signup">
                  Sign Up
                </v-tab>
                <v-tab href="#signin">
                  Sign In
                </v-tab>
              </v-tabs>

              <!-- <div v-if="signupscreen">
                  <v-text-field
                    v-model="email"
                    placeholder="Email"
                    outlined
                  ></v-text-field>
                  <v-text-field
                    v-model="password"
                    placeholder="password"
                    outlined
                  ></v-text-field>
                  <v-text-field
                    v-model="cpassword"
                    placeholder="Confrm password"
                    outlined
                  ></v-text-field>
                  <v-btn depressed dark v-on:click="signup" color="#0005DF" class="mr-3">Sign Up</v-btn>
                  <v-btn outlined v-on:click="login" color="#0005DF">Login In</v-btn>
              </div>
              <div v-else>
                  <v-text-field
                    v-model="email"
                    placeholder="Email"
                    outlined
                  ></v-text-field>
                  <v-text-field
                    v-model="password"
                    placeholder="password"
                    outlined
                  ></v-text-field>
                  <v-btn outlined v-on:click="login" class="indigo">Login Up</v-btn>
                  <v-btn depressed v-on:click="signup" class="indigo">Sign Up</v-btn>
                </div> -->
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-tabs-items v-model="section">
                <v-tab-item value="signup" class="px-4 py-5">
                  <v-form ref="signupform">
                    <p class="google-font mb-0" style="font-size:130%">
                      <b>FoLST 2021 Registraion</b>
                    </p>
                    <p class="google-font my-0">
                      Sign Up to register for #DevFestIndia
                    </p>
                    <br />
                    <p style="font-size:105%;color:black" class="py-0 my-0">
                      Email
                      <span style="color:#ff5252;">*</span>
                    </p>
                    <v-text-field
                      v-model="email"
                      placeholder="Email"
                      class="my-0"
                      outlined
                      :rules="[rules.required, rules.gmailmatch]"
                    ></v-text-field>

                    <p style="font-size:105%;color:black" class="py-0 my-0">
                      Password
                      <span style="color:#ff5252;">*</span>
                    </p>
                    <v-text-field
                      v-model="password"
                      class="my-0"
                      :type="show1 ? 'text' : 'password'"
                      placeholder="password"
                      :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                      outlined
                      :rules="[rules.required, rules.min]"
                      @click:append="show1 = !show1"
                    ></v-text-field>

                    <p style="font-size:105%;color:black" class="py-0 my-0">
                      Confirm Password
                      <span style="color:#ff5252;">*</span>
                    </p>
                    <v-text-field
                      v-model="cpassword"
                      class="my-0"
                      :rules="[rules.required, rules.min]"
                      :type="show1 ? 'text' : 'password'"
                      :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                      @click:append="show1 = !show1"
                      placeholder="Confrm password"
                      outlined
                    ></v-text-field>
                    <v-btn
                      depressed
                      dark
                      v-on:click="signup"
                      color="#0005DF"
                      block
                      large
                      :loading="signuploading"
                      >Sign Up</v-btn
                    >
                  </v-form>
                </v-tab-item>
                <v-tab-item value="signin">
                  <v-container>
                    <v-row>
                      <v-col>
                        <v-form ref="signinform">
                        <p class="google-font mb-0" style="font-size:130%">
                          <b>FoLST 2021 Registraion</b>
                        </p>
                        <p class="google-font my-0">
                          Sign In to register for #DevFestIndia
                        </p>
                        <br />
                        <p style="font-size:105%;color:black" class="py-0 my-0">
                          Email
                          <span style="color:#ff5252;">*</span>
                        </p>
                        <v-text-field
                          v-model="email"
                          placeholder="Email"
                          class="my-0"
                          outlined
                          :rules="[rules.required, rules.gmailmatch]"
                        ></v-text-field>

                        <p style="font-size:105%;color:black" class="py-0 my-0">
                          Password
                          <span style="color:#ff5252;">*</span>
                        </p>
                        <v-text-field
                          v-model="password"
                          class="my-0"
                          :type="show1 ? 'text' : 'password'"
                          placeholder="password"
                          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                          outlined
                          :rules="[rules.required, rules.min]"
                          @click:append="show1 = !show1"
                        ></v-text-field>
                        <v-btn
                          depressed
                          dark
                          v-on:click="signin"
                          color="#0005DF"
                          block
                          large
                          :loading="signinloading"
                          >Sign In</v-btn
                        >
                        </v-form>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-tab-item>
              </v-tabs-items>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions class="grey lighten-3">
        <v-spacer></v-spacer>
        <v-btn aria-label="close" color="#0005DF" text @click="dialog = false"
          >Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import FDK from "@/config/firebase";
export default {
  components: {},
  data() {
    return {
      show1: false,
      signuploading:false,
      signinloading:false,
      rules: {
        required: (value) => !!value || "Required.",
        min: (v) => v.length >= 6 || "Min 6 characters",
        emailMatch: () => "The email and password you entered don't match",
        gmailmatch: (v) =>
          !v.includes("gmail") ||
          "If you have Gmail account, please use 'Sign In With Google' button",
      },
      section: "signup",
      signupscreen: true,
      email: "",
      password: "",
      cpassword: "",
      dialog: false,
      userCreated: false,
      user: {},
    };
  },
  methods: {
    signup() {
      if (this.$refs.signupform.validate()) {
        if (this.password == this.cpassword) {
          this.signuploading = true
          FDK.auth
            .createUserWithEmailAndPassword(this.email, this.password)
            .catch((e) => {
              console.log(e);
              this.signuploading = false
              alert(e.message)
            });
          this.signuploading = false
        } else {
          alert("Password Not Match");
          this.signuploading = false
        }
      }
    },
    signin() {
      if (this.$refs.signinform.validate()) {
        if (this.email.length > 0 && this.password.length > 0) {
          // console.log('calling login')
          this.signinloading = true
          FDK.auth
            .signInWithEmailAndPassword(this.email, this.password)
            .catch((e) => {
              console.log(e);
              this.signinloading = false
              alert(e.message);
            });
          this.signinloading = false
        }
      }
    },
  },
};
</script>
