import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import anime from './anime.ts'
import newRelases from './newRelases.ts'
import topRated from './topRated.ts'
import animeDetails from './animeDetails.ts'

interface Anime {
  id: number;
  name: string;
  score: number;
  picture: string;
}

export default createStore({
  modules: {
    anime,newRelases,topRated,animeDetails
  },
  state: {
    animeList: [] as Anime[],
  },
  mutations: {
    addAnime(state, anime: Anime) {
      state.animeList.push(anime);
    },
    removeAnime(state, animeId: number) {
      state.animeList = state.animeList.filter((anime) => anime.id !== animeId);
    },
  },
  actions: {
    addAnime({ commit, getters }, anime: Anime) {
      if (!getters.containsAnime(anime.id)) {
        commit('addAnime', anime);
      }
    },
    removeAnime({ commit }, animeId: number) {
      commit('removeAnime', animeId);
    },
  },
  getters: {
    getAnimeList(state) {
      return state.animeList;
    },
    containsAnime: (state) => (animeId: number) => {
      return state.animeList.some((anime) => anime.id === animeId);
    },
  },
  plugins: [createPersistedState()],
});
