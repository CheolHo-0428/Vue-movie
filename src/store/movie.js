import axios from "axios"

export default {
  namespaced: true,

  state: () => ({
    title: '',
    loading: false,
    movies: []
  }), 
    
  //비동기 처리가 불가능하다. // commit으로 호출한다.
  mutations: {
    updateState(state, payload) {
      Object.keys(payload).forEach(key => {
        state[key] = payload[key]
      })
    },

    pushIntoMovies(state, movies) {
      state.movies.push(...movies)
    }
  },
  
  // 비동기 처리가 가능하다. // dispatch로 호출한다.
  actions: {
    fetchMovies({state, commit}, pageNum) {
      return new Promise(async resolve => {
        const res = await axios.get(`https://www.omdbapi.com/?apikey=c9fcbbb5&s=${state.title}&page=${pageNum}`)
        commit('pushIntoMovies', res.data.Search)
        resolve(res.data)
      })
    },

    async searchMovies ({ commit, dispatch }) {
      //state.loading = true
      commit('updateState', {
        loading: true,
        movies: []
      })
      const { totalResults } = await dispatch('fetchMovies', 1)
      // const res = await axios.get(`http://www.omdbapi.com/?apikey=c9fcbbb5&s=${state.title}&page=1`)
      // console.log(res)
      const pageLength = Math.ceil(totalResults / 10)
      // commit('updateState', {
      //   movies: res.data.Search,
      // })

      if (pageLength > 1) {
        for(let i = 2; i <= pageLength; i+=1){
          if(i>4) break;
          //const resMore = await axios.get(`http://www.omdbapi.com/?apikey=c9fcbbb5&s=${state.title}&page=${i}`)
          //commit('pushIntoMovies', resMore.data.Search)
          await dispatch('fetchMovies', i)
        }
      }

      commit('updateState', {
        //movies: res.data.Search,
        loading: false
      })
    }
  }
}