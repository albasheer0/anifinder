<template>
  <v-row class="mx-3">
    <v-col cols="12">
      <v-row class="mx-3">
        <h2 class="text-primary">Top Rated anime of all time</h2>
        <v-icon class="mx-1 my-0" size="30" color="orange lighten-1"
          >mdi-seal</v-icon
        >
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-row>
            <v-col
              cols="12"
              lg="3"
              v-for="(anime, index) in topAnimeList"
              :key="index"
            >
              <v-card>
                <v-img
                  :src="anime.coverImage.large"
                  width="100%"
                  height="300px"
                  cover
                ></v-img>
                <v-card-title>
                  {{ anime.title.english || anime.title.romaji }}
                </v-card-title>
                <!-- <h2 class="text-h6">
                  {{ anime.title.english || anime.title.romaji }}
                </h2> -->

                <v-row class="mx-1">
                  <v-slide-group show-arrows>
                    <v-slide-group-item
                      v-for="(genre, index) in anime.genres"
                      :key="index"
                    >
                      <v-chip label size="small" outlined class="ma-1">
                        {{ genre }}
                      </v-chip>
                    </v-slide-group-item>
                  </v-slide-group>
                </v-row>
                <v-row class="mx-1 my-3">
                  <p>Rating:</p>
                  <v-spacer></v-spacer>
                  <v-icon class="ma-0" color="primary">mdi-star</v-icon>
                  <p>{{ anime.averageScore / 10 }}/10</p>
                </v-row>
                <v-btn
                  width="100%"
                  :to="`/anime/${anime.id}`"
                  depressed
                  color="primary"
                >
                  Explore
                </v-btn>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters } from "vuex";

export default defineComponent({
  name: "TopAnime",
  computed: {
    ...mapGetters("topRated", ["topAnimeList"]),
  },
});
</script>
