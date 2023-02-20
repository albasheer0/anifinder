<template>
  <v-row class="mt-3 mx-0">
    <v-col cols="12">
      <v-row class="mx-3">
        <h2 class="text-primary">Trending</h2>
        <v-icon class="mx-1 my-0" size="30" color="red">mdi-fire</v-icon>
      </v-row>
      <v-row>
        <v-carousel height="500" progress="primary" cycle hide-delimiters>
          <v-carousel-item v-for="(anime, index) in CarouselAnimeList" :key="index">
            <v-card>
              <v-img cover height="500" :src="anime.bannerImage">
                <div
                  :style="`  background: rgb(0,0,0);
background: -moz-linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%);
background: -webkit-linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%);
background: linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%);`"
                  class="grad"
                >
                  <v-container class="">
                    <v-row>
                      <v-card-title>
                        {{ anime.title.english.slice(0, 100) }}</v-card-title
                      >
                    </v-row>
                    <v-card-text v-html="anime.description"></v-card-text>
                    <v-card-actions>
                      <v-chip
                        v-for="(genre, index) in anime.genres"
                        :key="index"
                        label
                        outlined
                        class="ma-1"
                      >
                        {{ genre }}
                      </v-chip>
                    </v-card-actions>

                    <v-row class="ma-3">
                      <v-col cols="12" md="6">
                        <v-row>
                          <v-btn
                            append-icon="mdi-movie-open-play-outline"
                            outlined
                            large
                            color="primary"
                            @click="watchTrailer(anime.trailer)"
                          >
                            Watch Trailer
                          </v-btn>
                          <v-btn
                            append-icon="mdi-compass"
                            class="mx-3"
                            outlined
                            large
                            color="primary"
                            :to="`/anime/${anime.id}`"
                          >
                            Explore
                          </v-btn>
                        </v-row>
                      </v-col>
                      <v-col cols="12" md="6">
                        <v-row>
                          <v-spacer></v-spacer>
                          <v-progress-circular
                            class="mt-n6"
                            color="primary"
                            :model-value="anime.averageScore"
                            :size="75"
                            :width="5"
                          >
                            {{ anime.averageScore }}/100
                          </v-progress-circular>
                        </v-row>
                      </v-col>
                    </v-row>
                  </v-container>
                </div>
              </v-img>
            </v-card>
          </v-carousel-item>
        </v-carousel>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "AnimeCarousel",
  computed: {
    ...mapGetters(["CarouselAnimeList"]),
  },
  methods: {
    watchTrailer(trailer) {
      const url = `https://www.youtube.com/watch?v=${trailer.id}`;
      window.open(url, "_blank");
    },
  },
};
</script>
