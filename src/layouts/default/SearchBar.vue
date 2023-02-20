<template>
  <v-card class="mt-16 mb-n16" dark>
    <v-row>
      <v-col cols="12">
        <v-row>
          <v-autocomplete
            v-model:search="searchQuery"
            :items="searchResults"
            :loading="isLoading"
            @input="onSearch"
            label="Search"
            outlined
            clearable
            hide-details
            hide-selected
            hide-no-data
          >
          </v-autocomplete>
        </v-row>
        <v-card :loading="isLoading">
          <v-row v-if="!isLoading && searchResults.length != 0">
            <v-col
              cols="12"
              md="8"
              v-for="item in searchResults"
              :key="item.id"
            >
              <v-card
                @click="searchSelect(item.id)"
              >
                <v-row>
                  <v-col cols="4">
                    <v-img
                      width="50"
                      :src="item.coverImage?.large || ''"
                    ></v-img>
                  </v-col>
                  <v-col cols="8">
                    <v-card-title>{{ item.title.romaji }}</v-card-title>
                    <v-card-subtitle>{{ item.type }}</v-card-subtitle>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRoute } from "vue-router";

interface SearchItem {
  id: number;
  title: {
    romaji: string;
    english: string;
    native: string;
  };
  type: string;
  coverImage: {
    large: string;
  };
}

export default defineComponent({
  name: "Search",
  data() {
    return {
      searchQuery: "",
      isLoading: false,
      searchResults: [] as SearchItem[],
    };
  },
  methods: {
    searchSelect(id){
    const router = useRouter();

      this.searchResults.slice(0,this.searchResults.length)
router.push(`/anime/${id}`);
    },
    async onSearch() {
      console.log(this.searchQuery);
      if (!this.searchQuery) {
        this.searchResults = [];
        return;
      }

      this.isLoading = true;

      try {
        const response = await fetch(`https://graphql.anilist.co/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            query: `
                query ($search: String) {
                  Page(perPage: 5) {
                    media(search: $search, type: ANIME) {
                      id
                      title {
                        romaji
                        english
                        native
                      }
                      type
                       coverImage {
              large
            }
                    }
                  }
                }
              `,
            variables: {
              search: this.searchQuery,
            },
          }),
        });

        const { data } = await response.json();
        this.searchResults = data.Page.media;
      } catch (error) {
        console.log(error);
      }
      console.log(this.searchResults);

      this.isLoading = false;
    },
  },
});
</script>
