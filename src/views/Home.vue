<template>
  <div>
      <v-content>
        <v-container fluid>
          <v-row >
            <v-col >
              <carousel ></carousel>
              <newSe></newSe>
              <topAnime ></topAnime>
            </v-col>
          </v-row>
          <v-row v-if="error">
            <v-col>
              <div >
                <v-alert color="error" outlined dense>
                  Error fetching data. <v-btn @click="refresh">Refresh</v-btn>
                </v-alert>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-content>

  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions } from "vuex";
import carousel from "@/components/section/carousel.vue";
import newSe from "@/components/section/newSe.vue";
import topAnime from "@/components/section/topAnime.vue";

export default defineComponent({
  name: "App",
  components: {
    carousel,
    newSe,
    topAnime,
  },
  data() {
    return {
      loading: true,
      error: false,
    };
  },
  async created() {
    try {
      await Promise.all([
        this.fetchAnimeListc(),
        this.fetchTopAnimeList(),
        this.fetchAiringThisWeekAnime(),
      ]);
      this.loading = false;
    } catch (err) {
      this.error = true;
      this.loading = false;
      console.error(err);
    }
  },
  methods: {
    ...mapActions(["fetchAnimeListc"]),
    ...mapActions("topRated", ["fetchTopAnimeList"]),
    ...mapActions("newRelases", ["fetchAiringThisWeekAnime"]),
    refresh() {
      this.loading = true;
      this.error = false;
      Promise.all([
        this.fetchAnimeListc(),
        this.fetchTopAnimeList(),
        this.fetchAiringThisWeekAnime(),
      ])
        .then(() => {
          this.loading = false;
        })
        .catch((err) => {
          this.error = true;
          this.loading = false;
          console.error(err);
        });
    },
  },
});
</script>
