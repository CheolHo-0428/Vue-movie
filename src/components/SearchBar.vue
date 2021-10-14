<template>
    <div>
        <v-text-field
          v-model="title"
          outlined
          @keypress.enter="searchMovies">
          <template v-slot:prepend-inner>
              <v-icon>search</v-icon>
          </template>
          <template v-slot:append>
            <v-progress-circular
              v-if="loading"
              size="24"
              color="primary"
              indeterminate
              />
          </template>
        </v-text-field>    
    </div>
</template>

<script>
//import axios from 'axios'
import { mapActions } from 'vuex' 

export default {
  name: 'SearchBar',
    //data () {
     // return {
        // store로 이관(state)
        // title: '',
        // loading: false
        
     // }
   // },

    // state는 computed를 통해서 호출해야 한다.
    computed: {
      title: {
        get () {
          return this.$store.state.movie.title
        },
        set (title) {
          this.$store.commit('movie/updateState', {
            //title : title
            title
          })
        }
      },

      loading() {
        return this.$store.state.movie.loading
      }
    },

    methods: {
      // store로 이관(mutation, actions)
      // async searchMovies () {
      //  this.loading = true
      //  const res = await axios.get(`http://www.omdbapi.com/?apikey=c9fcbbb5&s=${this.title}`)
      //     // .then(res => {
      //     //   console.log(res)
      //     // })  
      //   console.log(res.data) 
      //   this.loading = false 
      // }
      ...mapActions('movie', [
        'searchMovies'
      ])
    }
}
</script>