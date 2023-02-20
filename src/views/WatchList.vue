<template>
  <v-row class="ma-3">
    <v-col cols="12">
    <h2>My Watchlist</h2>
    <Watchlist></Watchlist>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Watchlist from '@/components/WatchList/Watchlist.vue';

export default defineComponent({
  name: 'WatchList',
  components: {
    Watchlist,
  },
});
</script>
