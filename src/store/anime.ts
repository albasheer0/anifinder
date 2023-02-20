// in store/modules/anime.js

const state = {
  animeListc: [],
};

const getters = {
  CarouselAnimeList: (state) => state.animeListc,
};

const actions = {
  async fetchAnimeListc({ commit }) {
    const query = `
      query ($seasonYear: Int, $season: MediaSeason) {

        Page(perPage: 10) {
          media(sort: POPULARITY_DESC, type: ANIME, seasonYear: $seasonYear, season: $season) {
            id
            title {
              english
            }
            description
            bannerImage
            coverImage {
              large
            }
            genres
            averageScore
            trailer {
              id
            }
          }
        }
      }
    `;
    const variables = {
      seasonYear: new Date().getFullYear(),
      season: "WINTER",
    };
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
    const result = (await response.json()).data.Page.media;
    commit("setAnimeListc", result);
  },
};

const mutations = {
  setAnimeListc: (state, animeList) => (state.animeListc = animeList),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
