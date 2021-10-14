<template>
    <v-row
        v-masonry
        item-selector=".item">
        <!-- cols속성 한줄에 보여줄 갯수(보통은 12개로 지정한다.) -->
        <!-- lg속성 라지 디바이스에서 12 / 3 = 한줄에 4개씩 보여준다. -->
        <!-- md속성 미디움 디바이스에서 12 / 3 = 한줄에 4개씩 보여준다. -->
        <!-- sm속성 스몰 디바이스에서 12 / 6 = 한줄에 2개씩 보여준다. -->
        <!-- v-masonry는 칸이 맞지 않는 부분을 맞쳐준다. -->
        <v-col 
            v-for="movie in movies"
            :key="movie.imdbID"
            v-masonry-tile
            class="item"
            cols="12"
            lg="3"  
            md="3"
            sm="6">
            <v-card>
                <v-img
                    :src="posterSrc(movie.Poster)"
                    :alt="movie.Title"
                    :height="posterHeight(movie.Poster)">
                    <template v-slot:placeholder>
                        <div style="background: lightgray; height: 100%"></div>
                    </template>
                </v-img>
                <v-card-title>
                    {{ movie.Title }}
                </v-card-title>
                <v-card-subtitle>
                    {{ movie.Year }}
                </v-card-subtitle>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
export default {
    computed: {
        movies() {
            return this.$store.state.movie.movies
        }
    },

    methods: {
        posterSrc(poster) {
            return poster === 'N/A' ? '' : poster
        },

        posterHeight(poster) {
            return poster === 'N/A' ? 100 : 300
        }
    }
}
</script>