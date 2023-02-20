const state = {
  topAnime: [],
};

const getters = {
  topAnimeList: (state) => state.topAnime,
};

const actions = {
  async fetchTopAnimeList({ commit }) {
    const query = `
      query {
        Page(perPage: 12) {
          media(sort: SCORE_DESC, type: ANIME, isAdult: false) {
            id
            title {
              english
              romaji
            }
            genres
            coverImage {
              large
            }
            averageScore
          }
        }
      }
    `;

    try {
      const response = await fetch("https://graphql.anilist.co", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          query: query,
        }),
      });

      const result = (await response.json()).data.Page.media;
      commit("setTopAnimeList", result);
    } catch (error) {
      console.error(error);
    }
  },
};

const mutations = {
  setTopAnimeList: (state, topAnime) => (state.topAnime = topAnime),
};

export default {
      namespaced: true,

  state,
  getters,
  actions,
  mutations,
};
