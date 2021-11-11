<template>
  <v-container fluid class="">
    <v-row justify="center" align="center">
      <v-col md="12" lg="12" class="pa-2" sm="12" cols="12">
        <v-container fluid>
          <v-row>
            <v-col md="3" cols="6"  v-for="(item, index) in maindata.stats" :key="index" class="text-center">
              <p class="google-font mb-0" style="color:#0005DF;font-size:300%">
                {{item.count}}
              </p>
              <p>{{item.name}}</p>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import maindata from '@/assets/data/main.json'
  export default {
    components:{
    },
    data:()=>({
      maindata:maindata
    })
  }
</script>
