<template>
  <v-main class>
    <Snackbar
      :message="snackBarMessage"
      :isShow.sync="isSnackBarVisible"
      :color="snackBarColor"
      :timeout="snackBarTimeOut"
    />

    <v-container fluid class="mt-4">
      <v-row justify="center" align="center">
        <v-col md="7" sm="8" lg="5" cols="12">
          <div style="padding:10px;">
            <h2 class="google-font">
              <span style="font-size:120%">{{maindata.eventname}}</span>:
              <span style="color:#0005DF">Registration</span>
            </h2>
            <p class="google-font">
              India's biggest developer conclave with 40+ GDG
              communities.
              <br />Separated by distance, united by passion.
            </p>
            <p class="google-font">
              The mega event is set to happen on
              <b>Oct 16th, 17th & 18th</b> with the
              line-up of expert speakers, multiple tracks, fun engagements and many more.
            </p>
          </div>

          <v-container fluid>
            <!-- Google Sign In -->
            <v-row>
              <v-col md="2" cols="2">
                <v-avatar color="#0005DF">
                  <v-icon dark>mdi-account-circle</v-icon>
                </v-avatar>
              </v-col>
              <v-col md="10" class="google-font" cols="10">
                <h3 class="google-font">Login with your Google Account</h3>
                <p
                  class="google-font"
                >Sign in and register to get your entry tickets of the "Festival of Developers".</p>

                <v-list-item v-if="userLoginIn" class="ml-0 pl-0">
                  <v-list-item-avatar size="65">
                    <v-img :src="user.photoURL? user.photoURL:'https://raw.githubusercontent.com/DevFest-India/website-data/master/defaultavatar.png'"></v-img>
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title class="google-font" v-html="user.displayName"></v-list-item-title>
                    <v-list-item-subtitle v-html="user.email"></v-list-item-subtitle>
                    <v-list-item-subtitle v-on:click="logout" style="color:blue;cursor: pointer">
                      <u>Logout as a {{ user.email }}</u>
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>



                <div v-if="showLoginBtn">
                  <v-btn
                    class="mt-2"
                    depressed
                    style="text-transform: capitalize"
                    v-on:click="signIn"
                    dark color="#0005DF"
                  >
                    <v-icon size="20px" left>mdi-google</v-icon>Sign In with Google
                  </v-btn>
                  <br><br><br>
                  <p class="google-font mb-2">No Google Account? Create an Account/ Sign in with Email.</p>
                  <EmailPass class="mt-0 ml-2"/>

                  <!-- <p class="mt-5 google-font">If you don't have any Google account, please fill your entry in <a v-if="maindata.googlefromforregistration" target="_blank" rel="noreferrer" style="color:#0005DF" :href="maindata.googlefromforregistration">this</a> form.</p> -->
                </div>
                <!-- <EmailPass/> -->
                <!--  -->
                <div v-if="!emailVerified">
                  <p>Kindly verify your email by clicking on the link sent to your email address. Also, do refresh this page post verification to move ahead with the registration.</p>
                </div>
              </v-col>
            </v-row>
            <!-- Google Sign In -->

            <!-- Form -->
            <v-row v-if="userForm && userLoginIn">
              <v-col md="2" cols="2">
                <v-avatar color="#0005DF">
                  <v-icon dark>mdi-format-align-justify</v-icon>
                </v-avatar>
              </v-col>
              <v-col md="10" class="google-font" cols="10">
                <h3 class="google-font">Your details</h3>
                <p class="mb-10">Required fields are marked with an asterisk</p>
                <v-form ref="form">
                  <!-- Email Id -->
                  <p style="font-size:105%;color:black">
                    Email
                    <span style="color:#ff5252;">*</span>
                  </p>
                  <v-text-field
                    v-model="response.email"
                    placeholder="Email"
                    outlined
                    disabled
                  ></v-text-field>

                  <!-- Full Name -->
                  <p style="font-size:105%;color:black">
                    Name
                    <span style="color:#ff5252;">*</span>
                  </p>
                  <v-text-field
                    v-model="response.name"
                    placeholder="Name"
                    :rules="[rules.required]"
                    outlined
                  ></v-text-field>

                  <!-- City -->
                  <p style="font-size:105%;color:black">
                    City
                    <span style="color:#ff5252;">*</span>
                  </p>
                  <v-text-field
                    v-model="response.city"
                    placeholder="City"
                    :rules="[rules.required]"
                    outlined
                  ></v-text-field>

                  <!-- Country -->
                  <p style="font-size:105%;color:black">
                    Country
                    <span style="color:#ff5252;">*</span>
                  </p>
                  <v-text-field
                    v-model="response.country"
                    placeholder="Country"
                    :rules="[rules.required]"
                    outlined
                  ></v-text-field>

                  <!-- Organization -->
                  <p style="font-size:105%;color:black">
                    Company / Institute Name
                    <span style="color:#ff5252;">*</span>
                  </p>
                  <v-text-field
                    v-model="response.org"
                    placeholder="Company / Institute Name"
                    :rules="[rules.required]"
                    outlined
                  ></v-text-field>

                  <!-- Role -->
                  <p style="font-size:105%;color:black">
                    Role / Designation
                    <span style="color:#ff5252;">*</span>
                  </p>
                  <v-text-field
                    v-model="response.role"
                    placeholder="Role / Designation"
                    :rules="[rules.required]"
                    outlined
                  ></v-text-field>

                  <!-- Gender -->
                  <v-radio-group
                    :rules="[(v) => !!v || 'This field is required.']"
                    v-model="response.gender"
                    class="mb-3"
                  >
                    <div class="google-font mb-3" style="font-size:105%;color:black !important">
                      How would you like to identify yourself as?
                      <span style="color:#ff5252;">*</span>
                      <br />
                      <span
                        style="color:#ff5252;font-size:70%"
                        v-show="response.gender === 0"
                      >This field is required.</span>
                    </div>

                    <v-radio color="#0005DF" value="Male" v-slot:label>
                      <div>Male</div>
                    </v-radio>
                    <v-radio color="#0005DF" value="Female" v-slot:label>
                      <div>Female</div>
                    </v-radio>
                    <v-radio color="#0005DF" value="Prefer not to say" v-slot:label>
                      <div>Prefer not to say</div>
                    </v-radio>
                  </v-radio-group>
                  <!-- Gender -->

                  <!-- Area of Interest -->
                  <div class="google-font" style="font-size:105%;color:black">
                    Tracks / themes you are interested to attend.
                    <span style="color:#ff5252;">*</span>
                    <br />
                    <span
                      style="font-size:80%;color:black"
                    >You can choose more than 1 area of interests</span>
                  </div>
                  <v-checkbox
                    class="mb-0"
                    v-model="response.theme"
                    color="#0005DF"
                    hide-details="false"
                    :rules="[rules.checkboxbtn]"
                    label="Mobile"
                    value="Mobile"
                  ></v-checkbox>
                  <v-checkbox
                    class="my-0"
                    v-model="response.theme"
                    color="#0005DF"
                    hide-details="false"
                    :rules="[rules.checkboxbtn]"
                    label="Cloud"
                    value="Cloud"
                  ></v-checkbox>
                  <v-checkbox
                    class="my-0"
                    v-model="response.theme"
                    color="#0005DF"
                    hide-details="false"
                    :rules="[rules.checkboxbtn]"
                    label="Web"
                    value="Web"
                  ></v-checkbox>
                  <v-checkbox
                    class="my-0"
                    v-model="response.theme"
                    color="#0005DF"
                    hide-details="false"
                    :rules="[rules.checkboxbtn]"
                    label="Machine Learning"
                    value="Machine Learning"
                  ></v-checkbox>
                  <!-- <v-checkbox
                    class="my-0"
                    v-model="response.theme"
                    color="#0005DF"
                    hide-details="false"
                    :rules="[rules.checkboxbtn]"
                    label="Design [UI/UX]"
                    value="Design [UI/UX]"
                  ></v-checkbox> -->
                  <!-- Area of Interest -->

                  <!-- Experience -->
                  <v-radio-group
                    v-model="response.experience"
                    :rules="[(v) => !!v || 'This field is required.']"
                    class="mb-5"
                  >
                    <div class="google-font mb-3" style="font-size:105%;color:black !important">
                      Years of experience
                      <span style="color:#ff5252;">*</span>
                      <br />
                      <span
                        style="color:#ff5252;font-size:70%"
                        v-if="response.experience === 0"
                      >This field is required.</span>
                    </div>

                    <v-radio color="#0005DF" value="0 - 5 years" v-slot:label>
                      <div>0 - 5 years</div>
                    </v-radio>
                    <v-radio color="#0005DF" value="6 - 10 years" v-slot:label>
                      <div>6 - 10 years</div>
                    </v-radio>
                    <v-radio color="#0005DF" value="11 - 20 years" v-slot:label>
                      <div>11 - 20 years</div>
                    </v-radio>
                    <v-radio color="#0005DF" value="21+ years" v-slot:label>
                      <div>21+ years</div>
                    </v-radio>
                  </v-radio-group>
                  <!-- Experience -->

                  <!-- Community -->
                  <p style="font-size:105%;color:black">
                    Which community are you associated with?
                    <span style="color:#ff5252;">*</span>
                    <br />
                    <span style="font-size:80%">Choose others if the community is not in the list.</span>
                  </p>
                  <v-combobox
                    v-model="response.code"
                    :items="gdgcommunities"
                    :rules="[rules.community]"
                    label="Which community are you associated with?"
                    outlined
                  ></v-combobox>
                  <p
                    style="font-size:95%;color:black"
                    v-if="response.code && response.code.toLowerCase() === 'others'"
                  >
                    Enter 'NA' if this is your first community event
                    <span style="color:#ff5252;">*</span>
                  </p>
                  <v-text-field
                    v-if="response.code && response.code.toLowerCase() === 'others'"
                    label="Others"
                    v-model="response.otherCode"
                    placeholder="Community Name"
                    :rules="[rules.required]"
                    outlined
                  ></v-text-field>

                  <!-- KnowAbout -->
                  <div class="google-font mt-5" style="font-size:105%;color:black">
                    How did you get to know about this event?
                    <span style="color:#ff5252;">*</span>
                    <br />
                    <span style="font-size:80%;color:black">Check all that apply</span>
                  </div>
                  <v-checkbox
                    class="mb-0"
                    :rules="[rules.socialcheckboxbtn]"
                    hide-details="false"
                    color="#0005DF"
                    v-model="response.knowAbout"
                    label="Women Techmakers"
                    value="Women Techmakers"
                  ></v-checkbox>
                  <v-checkbox
                    class="my-1"
                    hide-details="false"
                    :rules="[rules.socialcheckboxbtn]"
                    color="#0005DF"
                    v-model="response.knowAbout"
                    label="Google Developer Groups"
                    value="Google Developer Groups"
                  ></v-checkbox>
                  <v-checkbox
                    class="my-1"
                    hide-details="false"
                    :rules="[rules.socialcheckboxbtn]"
                    color="#0005DF"
                    v-model="response.knowAbout"
                    label="Developer Student Clubs"
                    value="Developer Student Clubs"
                  ></v-checkbox>
                  <v-checkbox
                    class="my-1"
                    hide-details="false"
                    :rules="[rules.socialcheckboxbtn]"
                    color="#0005DF"
                    v-model="response.knowAbout"
                    label="Other Communities"
                    value="Other Communities"
                  ></v-checkbox>

                  <v-checkbox
                    class="my-1"
                    hide-details="false"
                    :rules="[rules.socialcheckboxbtn]"
                    color="#0005DF"
                    v-model="response.knowAbout"
                    label="Through your company/colleague"
                    value="Through your company/colleague"
                  ></v-checkbox>
                  <v-checkbox
                    class="my-1"
                    hide-details="false"
                    :rules="[rules.socialcheckboxbtn]"
                    color="#0005DF"
                    v-model="response.knowAbout"
                    label="Friends"
                    value="Friends"
                  ></v-checkbox>
                  <v-checkbox
                    class="my-1"
                    hide-details="false"
                    :rules="[rules.socialcheckboxbtn]"
                    color="#0005DF"
                    v-model="response.knowAbout"
                    label="Twitter"
                    value="Twitter"
                  ></v-checkbox>
                  <v-checkbox
                    class="my-1"
                    hide-details="false"
                    :rules="[rules.socialcheckboxbtn]"
                    color="#0005DF"
                    v-model="response.knowAbout"
                    label="Facebook"
                    value="Facebook"
                  ></v-checkbox>
                  <v-checkbox
                    class="my-1"
                    hide-details="false"
                    :rules="[rules.socialcheckboxbtn]"
                    color="#0005DF"
                    v-model="response.knowAbout"
                    label="LinkedIn"
                    value="LinkedIn"
                  ></v-checkbox>

                  <!-- KnowAbout -->

                  <!-- Share -->
                  <v-textarea
                    outlined
                    class="mt-10"
                    label="Anything else you want to share with us?"
                    v-model="response.share"
                  ></v-textarea>
                  <!-- Share -->

                  <!-- Accepts TC -->
                  <v-checkbox
                    color="#0005DF"
                    v-model="istcChecked"
                    :rules="[v => !!v || 'You must agree to register!']"
                    label="By checking this box, i confirm that: "
                  ></v-checkbox>
                  <p
                    class="mt-3"
                  >I agree to let FoLST2021 Organisers use the information collected in this form to be used for my participation in "FoLST2021 2020 Event".</p>
                  <p>
                    I have read and agree to the
                    <router-link to="/tc" target="_blank">Participation Terms</router-link>, <router-link to="/coc" target="_blank">Code of conducts</router-link> & <a href="https://developers.google.com/community-guidelines" rel=“noreferrer” target="_blank">Community Guidelines</a>
                  </p>
                  <!-- Accepts TC -->

                  <v-btn
                    depressed
                    dark
                    class="mt-3"
                    :loading="saveloading"
                    v-on:click="saveData"
                    color="#0005DF"
                  >Submit</v-btn>
                </v-form>
              </v-col>
            </v-row>
            <!-- Form -->

            <!-- Registration Success -->
            <v-row v-if="userSuccess && userLoginIn">
              <v-col md="2" cols="2">
                <v-avatar color="#0005DF">
                  <v-icon dark>mdi-playlist-check</v-icon>
                </v-avatar>
              </v-col>
              <v-col md="10" class="google-font" cols="10">
                <h3 class="google-font">
                  Thank you for registering for
                  <a
                    href="https://twitter.com/DevFestIndia"
                    rel="noreferrer"
                    target="_blank"
                    style="text-decoration:none;color:#0005DF"
                  >
                    <b>#DevFestIndia</b>
                  </a>.
                </h3>
                <p class="google-font">
                  Thank you for registering for
                  <b>#DevFestIndia</b> and giving
                  us the honour to host you at India's biggest developer
                  conclave.
                  <br />You will be receiving the confirmation mail soon from:
                  <span
                    style="color:red"
                  >no-reply@devfestindia.com</span>
                </p>
                <!-- <v-btn
                  v-if="maindata.registrationData.twittershare"
                  :href="maindata.registrationData.twittershare"
                  target="_blank"
                  depressed
                  rel="noreferrer"
                  dark
                  style="text-transform: capitalize;"
                  color="#4285F4"
                  class="google-font mt-2"
                >
                  <v-icon size="20px" left>mdi-twitter</v-icon>Tweet your excitement
                </v-btn> -->
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <v-btn
                  v-if="maindata.registrationData.facebookshare"
                  :href="maindata.registrationData.facebookshare"
                  target="_blank"
                  rel="noreferrer"
                  style="text-transform: capitalize;"
                  dark
                  depressed
                  color="#3b5998"
                  class="google-font mt-2"
                >
                  <v-icon size="20px" left>mdi-facebook</v-icon>Share with your friends
                </v-btn>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <v-btn
                  outlined
                  color="#0005DF"
                  style="text-transform: capitalize;border-radius:5px;border-color:#e0e0e0"
                  class="google-font mt-2"
                  v-if="maindata.badgeurl"
                  :href="maindata.badgeurl"
                  rel="noreferrer"
                  target="_blank"
                >
                  <v-icon size="20px" left>mdi-inbox</v-icon>Generate Profile Badge
                </v-btn>
              </v-col>
            </v-row>
            <!-- Registration Success -->

            <!-- Already Registerd -->
            <v-row v-if="userSubmitedAlready && userLoginIn">
              <v-col md="2" cols="2">
                <v-avatar color="#0005DF">
                  <v-icon dark>mdi-playlist-check</v-icon>
                </v-avatar>
              </v-col>
              <v-col md="10" class="google-font" cols="10">
                <h3 class="google-font">You have already submitted this form</h3>
                <p class="mb-5">
                  Thank you for registering for
                  <b>#DevFestIndia</b> and giving us the
                  honour to host you at India's biggest developer conclave.
                  <br />You might have received or will be receiving the confirmation mail soon from:
                  <br />
                  <span style="color:red">no-reply@devfestindia.com</span>
                </p>
                <!-- <v-btn
                  v-if="maindata.registrationData.twittershare"
                  :href="maindata.registrationData.twittershare"
                  target="_blank"
                  rel="noreferrer"
                  style="text-transform: capitalize;"
                  dark
                  depressed
                  color="#4285F4"
                  class="google-font mt-2"
                >
                  <v-icon size="20px" left>mdi-twitter</v-icon>Tweet your excitement
                </v-btn> -->
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <v-btn
                  v-if="maindata.registrationData.facebookshare"
                  :href="maindata.registrationData.facebookshare"
                  target="_blank"
                  rel="noreferrer"
                  style="text-transform: capitalize;"
                  dark
                  depressed
                  color="#3b5998"
                  class="google-font mt-2"
                >
                  <v-icon size="20px" left>mdi-facebook</v-icon>Share with your friends
                </v-btn>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <v-btn
                  outlined
                  v-if="maindata.badgeurl"
                  :href="maindata.badgeurl"
                  rel="noreferrer"
                  target="_blank"
                  color="#0005DF"
                  style="text-transform: capitalize;border-radius:5px;border-color:#e0e0e0"
                  class="google-font mt-2"
                >
                  <v-icon size="20px" left>mdi-inbox</v-icon>Generate Profile Badge
                </v-btn>
              </v-col>
            </v-row>
            <!-- Already Registerd -->
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import maindata from '@/assets/data/main.json'
import FDK from "../config/firebase";
export default {
  data: () => ({
    maindata: maindata,
    emailVerified: true,
    // Snackbar
    snackBarMessage: "",
    isSnackBarVisible: false,
    snackBarColor: "green",
    snackBarTimeOut: 5000,
    gdgcommunities: [
      "GDG Ahmedabad",
      "GDG Bangalore",
      "GDG Bhilai",
      "GDG Bhopal",
      "GDG Bhubaneswar",
      "GDG Blrdroid ",
      "GDG Chandigarh",
      "GDG Chennai",
      "GDG Cloud Ahmedabad",
      "GDG Cloud Bengaluru",
      "GDG Cloud Bhubaneswar",
      "GDG Cloud Chennai",
      "GDG Cloud Coimbatore",
      "GDG Cloud Indore",
      "GDG Cloud Mumbai",
      "GDG Cloud New Delhi",
      "GDG Cloud Hyderabad",
      "GDG Cloud Pune",
      "GDG Cochin",
      "GDG Coimbatore ",
      "GDG Gandhinagar",
      "GDG Goa",
      "GDG Gwalior",
      "GDG Hubli",
      "GDG Hyderabad",
      "GDG Indore",
      "GDG Jaipur",
      "GDG Jalandhar",
      "GDG Kolkata",
      "GDG Kozhikode",
      "GDG MAD",
      "GDG Madurai",
      "GDG Nagpur",
      "GDG Nashik",
      "GDG New Delhi",
      "GDG Patna",
      "GDG Rajkot",
      "GDG Ranchi",
      "GDG Siliguri",
      "GDG Srinagar",
      "GDG Thiruvananthapuram",
      "GDG Udaipur",
      "GDG Mysuru",
      "GDG Vizag",
      "GDG Kolkata",
      "GDG Surat",
      "GDG Pune",
      "GDG Jodhpur",
      "GDG Baroda",
      "GDG Cloud Jaipur",
      "GDG Salem",
      "Others",
    ],
    rules: {
      required: (value) => !!value || "This field is required.",
      radiobtn: (value) => {
        return value.length > 0 || "This field is required.";
      },
      checkboxbtn: (value) => {
        return value.length > 0 || "At least one item should be selected.";
      },
      socialcheckboxbtn: (value) => {
        return value.length > 0 || "At least one item should be selected.";
      },
      community: (value) => {
        let communities = [
          "GDG Ahmedabad",
          "GDG Bangalore",
          "GDG Bhilai",
          "GDG Bhopal",
          "GDG Bhubaneswar",
          "GDG Blrdroid ",
          "GDG Chandigarh",
          "GDG Chennai",
          "GDG Cloud Ahmedabad",
          "GDG Cloud Bengaluru",
          "GDG Cloud Bhubaneswar",
          "GDG Cloud Chennai",
          "GDG Cloud Coimbatore",
          "GDG Cloud Indore",
          "GDG Cloud Mumbai",
          "GDG Cloud New Delhi",
          "GDG Cloud Hyderabad",
          "GDG Cloud Pune",
          "GDG Cochin",
          "GDG Coimbatore ",
          "GDG Gandhinagar",
          "GDG Goa",
          "GDG Gwalior",
          "GDG Hubli",
          "GDG Hyderabad",
          "GDG Indore",
          "GDG Jaipur",
          "GDG Jalandhar",
          "GDG Kolkata",
          "GDG Kozhikode",
          "GDG MAD",
          "GDG Madurai",
          "GDG Nagpur",
          "GDG Nashik",
          "GDG New Delhi",
          "GDG Patna",
          "GDG Rajkot",
          "GDG Ranchi",
          "GDG Siliguri",
          "GDG Srinagar",
          "GDG Thiruvananthapuram",
          "GDG Udaipur",
          "GDG Mysuru",
          "GDG Vizag",
          "GDG Kolkata",
          "GDG Surat",
          "GDG Pune",
          "GDG Jodhpur",
          "GDG Baroda",
          "GDG Cloud Jaipur",
          "GDG Salem",
          "Others",
        ];
        return (
          communities.indexOf(value) >= 0 ||
          "Please choose the community you are associated with."
        );
      },
    },
    istcChecked: false,
    showLoginBtn: true,
    userLoginIn: false,
    userForm: false,
    userSuccess: false,
    userSubmitedAlready: false,
    saveloading: false,
    user: {},

    response: {
      name: "",
      email: "",
      city: "",
      country: "",
      org: "",
      theme: [],
      role: "",
      gender: "",
      experience: "",
      code: "",
      knowAbout: [],
      share: "",
      otherCode: "",
    },
  }),
  components: {
    Snackbar: () => import("@/components/common/Snackbar"),
    EmailPass: ()=> import("@/components/registration/emailpass")
  },
  mounted() {
    this.checkAuth();
  },
  methods: {
    checkAuth() {
      var self = this;
      FDK.auth.onAuthStateChanged(function (user) {
        if (user) {
          // console.log(user)
          self.showLoginBtn = false;
          self.userLoginIn = true;
          self.user = user;
          self.response.email = user.email;
          self.response.name = user.displayName;
          if(user.emailVerified){
            FDK.firestore
            .collection("edata")
            .doc(user.uid)
            .get()
            .then((res) => {
              if (res.data()) {
                self.userForm = false;
                self.userSuccess = false;
                self.userSubmitedAlready = true;
              } else {
                self.userForm = true;
              }
            })
            .catch((e) => {
              console.log(e);
            });
          }else{
            user.sendEmailVerification().then(()=>{
              self.emailVerified = false
            }).catch(e=>{
              console.log(e)
            })
          }

        }
      });
    },
    signIn() {
      var self = this;
      var provider = new FDK.firebase.auth.GoogleAuthProvider();
      FDK.firebase
        .auth()
        .signInWithPopup(provider)
        .then(function (result) {
          var token = result.credential.accessToken;
          var user = result.user;

          self.userLoginIn = true;
          self.userForm = true;
          self.response.email = user.email;
          self.response.name = user.displayName;
          self.user = user;
          self.snackBarMessage = "Signed In with " + user.email;
          self.isSnackBarVisible = true;
        })
        .catch(function (error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          var email = error.email;
          var credential = error.credential;
        });
    },
    saveData() {
      if (this.$refs.form.validate()) {
        this.saveloading = true;
        FDK.firestore
          .collection("edata")
          .doc(this.user.uid)
          .set({
            name: this.response.name,
            email: this.response.email,
            image: this.user.photoURL? this.user.photoURL:'https://raw.githubusercontent.com/DevFest-India/website-data/master/defaultavatar.png',
            city: this.response.city,
            country: this.response.country,
            gender: this.response.gender,
            experience: this.response.experience,
            share: this.response.share,
            knowAbout: this.response.knowAbout,
            theme: this.response.theme,
            code:
              !!this.response.code.toUpperCase() &&
              this.response.code.toUpperCase() !== "OTHERS"
                ? this.response.code.toUpperCase()
                : this.response.otherCode.toUpperCase(),
            role: this.response.role,
            org: this.response.org,
            date: new Date(),
          })
          .then(() => {
            this.userSuccess = true;
            this.saveloading = false;
            this.userForm = false;
          })
          .catch((e) => {
            this.saveloading = false;
          });
      } else {
        alert("Please fill the required fields before submitting the form :)");
      }
    },
    logout() {
      var self = this;
      FDK.auth
        .signOut()
        .then(function () {
          self.userLoginIn = false;
          self.userForm = false;
          self.userSuccess = false;
          self.userSubmitedAlready = false;
          self.showLoginBtn = true;
          self.snackBarMessage = "Logged out from " + self.user.email;
          self.isSnackBarVisible = true;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>
