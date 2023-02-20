<template>
  <v-row class="mt-6">
    <v-col cols="12">
      <v-row>
        <v-col v-for="anime in animeList" :key="anime.id" cols="6" md="3">
          <v-card >
            <v-row>
              <v-col cols=4>

                <v-img :src="anime.picture" width="320" cover height="150"></v-img>
              </v-col>
              <v-col cols="8">

                <v-card-title> <v-btn :to="`/anime/${anime.id}`"> {{ anime.name }}</v-btn></v-card-title>
                <v-card-text>Score:   <v-icon class="mt-n1 ml-3 " color="primary">mdi-star</v-icon> {{ anime.score/10}}/10</v-card-text>
                <v-card-actions>
                  <v-btn       variant="outlined"
 @click="removeFromAnimeList(anime.id)">Remove from List</v-btn>
                </v-card-actions>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
      <div v-if="animeList.length === 0">
        <p>No anime in watchlist yet.</p>
      </div>
    </v-col>
  </v-row>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapGetters } from 'vuex';

interface Anime {
  id: number;
  name: string;
  score: number;
  picture: string;
}

export default defineComponent({
  name: 'Watchlist',
  computed: {
    ...mapGetters(['getAnimeList']),
    animeList(): Anime[] {
      return this.getAnimeList.reverse();
    },
  },
  methods: {
    ...mapActions(['removeAnime']),
    removeFromAnimeList(animeId: number) {
      this.removeAnime(animeId);
    },
  },
});
</script>
