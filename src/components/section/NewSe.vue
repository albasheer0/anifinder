
<template>
  <v-row class="mt-7">
    <v-col cols="12">
      <v-row class="mx-3">
        <h2 class="text-primary">New releases this month</h2>
        <v-icon class="mx-1 my-0" size="30" color="orange"
          >mdi-movie-open-star-outline</v-icon
        >
      </v-row>

      <v-row>
        <v-col cols="12">
          <v-slide-group
            v-model="model"
            class="pa-4"
            selected-class="bg-primary"
            show-arrows
          >
            <v-slide-group-item v-for="anime in airingThisWeek" :key="anime.id">
              <v-card
                color="grey-lighten-1"
                class="ma-4"
                height="300"
                width="150 "
              >
                <v-img :src="anime.coverImage.large"   height="300"
                width="150" cover>
                <v-sheet width="150" height="300" style="background: rgb(0,0,0);
background: -moz-linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%);
background: -webkit-linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%);
background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%);
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#000000',endColorstr='#000000',GradientType=1);">
<div style=" position: absolute;
  bottom: 0; 
  width: 100%; ">
 <h5 class="mx-2">
                    {{ anime.title.romaji }}
 </h5>

 
 
 
 <v-btn width="100%" :to="`/anime/${anime.id}`"  depressed color="primary" > Explore </v-btn>
</div>
                </v-sheet>
                 
                </v-img>
                <div
                  class="d-flex fill-height align-center justify-center"
                ></div>
              </v-card>
            </v-slide-group-item>
          </v-slide-group>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {  mapGetters } from "vuex";
import store from "@/store";

export default defineComponent({
  name: "AiringThisWeek",
  computed: {
    ...mapGetters("newRelases", ["airingThisWeek"]),
  },

});
</script>
