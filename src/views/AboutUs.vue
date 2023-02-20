<template>
  <div class="about-us">
    <v-container>
      <v-row>
        <v-col cols="12">
          <h2 class="text-center">About Anifinder</h2>
          <p class="text-center">
            Anifinder is a website that helps you find and discover new anime to watch. We use the Anilist GraphQL API to fetch information about anime, and Vue.js and Vuetify to build the website.
          </p>
          <h3>How Anifinder Works</h3>
          <p>
            Anifinder uses the Anilist GraphQL API to fetch information about anime. When you search for an anime, our website sends a query to the Anilist API and retrieves information about the anime, such as its title, description, and cover image. We then display this information in a user-friendly format, allowing you to easily browse and discover new anime to watch.
          </p>
          <h3>About Vue.js and Vuetify</h3>
          <p>
            Anifinder is built using Vue.js and Vuetify. Vue.js is a popular front-end JavaScript framework for building user interfaces, while Vuetify is a UI component library that provides pre-made components for building beautiful and responsive interfaces. We chose Vue.js and Vuetify for Anifinder because they allow us to build a high-quality website quickly and efficiently, while still providing a great user experience.
          </p>
          <h3>Meet the Team</h3>
          <p>
            Our team is made up of passionate anime fans who love to help others discover new anime to watch. We're always working to improve Anifinder and make it the best it can be. If you have any suggestions or feedback, we'd love to hear from you!
          </p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "AboutUs",
};
</script>

<style scoped>
.about-us {
  margin: 50px 0;
  padding: 0 10px;
}
</style>
