<template>
  <v-footer class="" dark>
    <v-row justify="center" no-gutters>
      <v-btn
        v-for="link in links"
        :key="link.name"
        color="white"
         variant="plain"
        :to="link.to"
        class="mx-2"
      >
        {{ link.name }}
      </v-btn>
      <v-col class="text-center text-primary mt-4" cols="12">
        {{ new Date().getFullYear() }} — <strong>AniFinder</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>
<script>
  export default {
    data: () => ({
      links: [
        {name:'Home',to:'/'},
        {name:'Watch List',to:'/watchlist'},
       {name: 'About Us',to:'/about'}
   
      ],
    }),
  }
</script>