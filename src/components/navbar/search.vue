<template>
  <v-card width="100%" dark>
    <v-row>
        <v-col cols="12">
        <v-autocomplete
        class="mt-5 "
 prepend-icon="mdi-movie-search-outline"
          v-model:search="searchQuery"
          :items="searchResults"
          :loading="isLoading"
          @input="onSearch"
          label="Search"
          item-title="title.english"
          outlined
            variant="solo"
          clearable

          autofocus
          hide-no-data
        >
          <template v-slot:item="{ props, item }">


            <v-list-item v-bind="props" :to="`/anime/${item.raw.id}`">

                <!-- <v-img :src="item.raw.coverImage.medium"></v-img> -->
                <template v-slot:prepend>
                    <v-avatar :image="item.raw.coverImage.medium"></v-avatar>

        </template>
            </v-list-item>
          </template>
        </v-autocomplete>
      </v-col>
      </v-row>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";

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
              medium
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
