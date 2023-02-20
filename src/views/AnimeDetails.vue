<template>


    <div v-if="animeDetails">
      <v-row>
        <v-col cols="12">
          <v-row class="ma-3">
            <v-col cols="12">
              <v-card>
                <v-row class="ma-3">
                  <v-col
                    cols="12"
                    sm="4"
                    align-self="center
                "
                    class="text-center"
                  >
                    <v-img
                      cover
                      class=""
                      :src="animeDetails.coverImage.large"
                      height="500"
                      width="400"
                      style="
                        border: 5px solid #c9c9c7;
                        border-radius: 18px 18px 9px 9px;
                      "
                    ></v-img>
                  </v-col>
                  <v-col cols="12" sm="8">
                    <v-row>
                      <v-card-title>{{
                        animeDetails.title.english || animeDetails.title.romaji
                      }}</v-card-title>
                      <v-spacer></v-spacer>
                      <v-btn
                        v-if="!animeInWatchlist"
                        append-icon="mdi-movie-plus-outline"
                        color="success"
                        @click="saveAnime"
                      >
                        Watch List
                      </v-btn>
                      <v-btn
                        v-else
                        append-icon="mdi-movie-open-minus-outline"
                        color="error"
                        @click="removeAnime"
                      >
                        Watch List
                      </v-btn>
                    </v-row>
                    <v-row>
                      <v-card-subtitle class="mx-3">
                        {{ animeDetails.seasonYear }}
                      </v-card-subtitle>

                      <v-icon class="ma-0 ml-3 text-depresed" color="primary"
                        >mdi-star</v-icon
                      >
                      <h4>{{ animeDetails.averageScore / 10 }}/10</h4>
                    </v-row>
                    <v-row>
                      <v-card-text v-html="animeDetails.description"></v-card-text>
                    </v-row>
                    <v-row>
                      <v-col cols="12">
                        <div
                          :style="
                            mdAndUp
                              ? 'position: absolute; bottom: 0; width: 100%;'
                              : ''
                          "
                        >
                          <p><b>Format:</b> {{ animeDetails.format }}</p>
                          <p>
                            <b>Episodes:</b>
                            {{ animeDetails.episodes || "no episods yet" }}
                          </p>
                          <p><b>Status:</b> {{ animeDetails.status }}</p>
                          <p v-if=" animeDetails.startDate.year "><b>Started airing:</b> {{ animeDetails.startDate.year  }}/{{animeDetails.startDate.month}}/{{animeDetails.startDate.day}}</p>
                          <p v-if="animeDetails.endDate.year"><b>Airing ends:</b> {{ animeDetails.endDate.year  }}/{{animeDetails.endDate.month}}/{{animeDetails.endDate.day}}</p>

                          <p><b>Duration:</b> {{ animeDetails.duration }} min.</p>
                          <v-row class="mx-1 my-2">
                            <v-slide-group show-arrows>
                              <v-slide-group-item
                                v-for="(genre, index) in animeDetails.genres"
                                :key="index"
                              >
                                <v-chip
                                  label
                                  color="primary"
                                  outlined
                                  variant="flat"
                                  class="ma-1"
                                >
                                  {{ genre }}
                                </v-chip>
                              </v-slide-group-item>
                            </v-slide-group>
                          </v-row>
                        </div>
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-row>
          <v-row class="ma-3">
            <v-col cols="12">
              <v-card>
                <h3 class="mx-2 my-3">Trailer</h3>
                <v-responsive>
                  <iframe
                    width="100%"
                    height="315"
                    :src="`https://www.youtube.com/embed/${animeDetails.trailer.id}`"
                    frameborder="0"
                    allowfullscreen
                  ></iframe>
                </v-responsive>
              </v-card>
            </v-col>
          </v-row>
          <v-row v-if="animeDetails.bannerImage">
            <v-parallax
              height="300"
              scale="0.8"
              :src="animeDetails.bannerImage"
            ></v-parallax>
          </v-row>

          <v-row class="ma-3">
            <v-col cols="12">
              <h2 class="mb-3">Characters</h2>
              <v-row>
                <v-col
                  cols="6"
                  md="3"
                  v-for="(character, index) in animeDetails.characters.edges"
                  :key="index"
                >
                  <v-card>
                    <v-row>
                      <v-col cols="4">
                        <v-avatar size="75px">
                          <v-img
                            :src="character.node.image.medium"
                            cover
                          ></v-img>
                        </v-avatar>
                      </v-col>
                      <v-col cols="8">
                        <v-card-title>{{
                          character.node.name.full
                        }}</v-card-title>
                        <v-card-subtitle>{{ character.role }}</v-card-subtitle>
                      </v-col>
                    </v-row>
                  </v-card>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>
    <div v-else>
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </div>

</template>
<script lang="ts">
import { mapGetters } from "vuex";
import { useDisplay } from "vuetify";
import { defineComponent } from "vue";

export default defineComponent({
  name: "AnimeDetails",
  mounted() {
    console.log(this.animeDetails);
  },
  setup() {
    const { mdAndUp} = useDisplay();

    return { mdAndUp };
  },
  computed: {
    ...mapGetters(["animeDetails"]),
    animeInWatchlist() {
      return this.$store.getters.containsAnime(this.animeDetails.id);
    },
  },
  methods: {
    async saveAnime() {
      // Dispatch the "addAnime" action to save the anime object in the store
      await this.$store.dispatch("addAnime", {
        id: this.animeDetails.id,
        name: this.animeDetails.title.english
          ? this.animeDetails.title.english
          : this.animeDetails.title.romaji,
        score: this.animeDetails.averageScore,
        picture: this.animeDetails.coverImage.large,
      });
    },
    async removeAnime() {
      await this.$store.dispatch("removeAnime", this.animeDetails.id);
    },
  },
});
</script>
