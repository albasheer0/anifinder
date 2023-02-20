

const state = {
  airingThisWeek: [],
};

const getters = {
  airingThisWeek: (state) => state.airingThisWeek,
};

const actions = {
  async fetchAiringThisWeekAnime({ commit }) {
    const query = `query ($season: MediaSeason, $seasonYear: Int, $status: [MediaStatus]) {
      Page (perPage: 25){
        media(
          sort: POPULARITY_DESC,
          type: ANIME,
          isAdult: false
          season: $season,
          seasonYear: $seasonYear,
          status_in: $status
        ) {
          id
          title {
            english
            romaji
          }
          coverImage {
            large
          }
        }
      }
    }`;

    const now = new Date();
    const currentMonth = now.getMonth() + 1;
    const currentYear = now.getFullYear();

    let season = "";
    if (currentMonth >= 1 && currentMonth <= 3) {
      season = "WINTER";
    } else if (currentMonth >= 4 && currentMonth <= 6) {
      season = "SPRING";
    } else if (currentMonth >= 7 && currentMonth <= 9) {
      season = "SUMMER";
    } else {
      season = "FALL";
    }

    const variables = {
      season: season,
      seasonYear: currentYear,
      status: ["NOT_YET_RELEASED"]
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

    commit("setAiringThisWeekAnime", result);
  },
};

const mutations = {
  setAiringThisWeekAnime: (state, airingThisWeek) => (state.airingThisWeek = airingThisWeek),
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
