const state = {
  animeDetails: null,
};

const getters = {
  animeDetails: (state) => state.animeDetails,
};

const actions = {
  async fetchAnimeDetails({ commit }, id) {
    const query = `query ($id: Int!) {
  Media(id: $id, type: ANIME) {
    id
    title {
      romaji
      english
      native
    }
    type
    format
    status
    description
    episodes
    duration
    seasonYear
    season
    genres
    averageScore
  startDate {
      year
      month
      day
    }
    endDate {
      year
      month
      day
    }

    coverImage {
      extraLarge
      large
      medium
    }
    bannerImage
    trailer {
      id
      site
      thumbnail
    }
 
    characters {
      edges {
        id
        role
        node {
          id
          name {
            full
            native
            alternative
          }
          image {
            medium
          }
        }
      }
    }
  }
}`;
    const variables = {
      id: parseInt(id),
    };

    try {
      const response = await fetch("https://graphql.anilist.co", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          query: query,
          variables: variables,
        }),
      });

      const result = (await response.json()).data.Media;
      // .data.media

      if (result) {
        commit("setAnimeDetails", result);
      } else {
        throw new Error("Anime details not found");
      }
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
};

const mutations = {
  setAnimeDetails: (state, anime) => (state.animeDetails = anime),
};

export default {
  state,
  getters,
  actions,
  mutations,
}