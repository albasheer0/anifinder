<template>
  <v-app-bar flat theme="dark">
    <v-btn variant="plain" to="/">
      <v-app-bar-title>
        AniFinder
      </v-app-bar-title>
    </v-btn>
  <v-btn
     
        color="white"
         variant="plain"
        to="/watchlist"

      >
       Watch List
      </v-btn>
    <search/>

  </v-app-bar>
</template>

<script lang="ts">
import search from "@/components/navbar/search.vue"
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      links: [
        { name: "Home", to: "/" },
        { name: "Watch List", to: "/" },
        { name: "About Us", to: "about" },
      ],
    };
  },
  components: {search},
});
</script>
