import axios from "axios"

export default {
  namespaced: true,

  state: () => ({
    title: '',
    loading: false,
    movies: []
  }), 
    
  getters: {

  },

  //비동기 처리가 불가능하다. // commit으로 호출한다.
  mutations: {
    updateState(state, payload) {
      Object.keys(payload).forEach(key => {
        state[key] = payload[key]
      })
    }
  },

  // 비동기 처리가 가능하다. // dispatch로 호출한다.
  actions: {
    async searchMovies ({ state, commit }) {
      //state.loading = true
      commit('updateState', {
        loading: true
      })
      const res = await axios.get(`http://www.omdbapi.com/?apikey=c9fcbbb5&s=${state.title}`)
      commit('updateState', {
        movies: res.data.Search,
        loading: false
      })
    }
  }
}