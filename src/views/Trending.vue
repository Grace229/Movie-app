<template>
<v-container v-if="loading">
    <div class="text-xs-center">
      <v-progress-circular
        indeterminate
        :size="150"
        :width="8"
        color="green">
      </v-progress-circular>
    </div>
  </v-container>
 
<v-container v-else>
   <v-card 
  >
    <v-img
      class="white--text align-end"
      height="250px"
      :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"
    />
      <v-card-title>{{movie.title}}</v-card-title>
    <v-card-actions>
      <v-btn
        color="orange"
        text
      >
       Favorites
      </v-btn>
<v-spacer />
      <v-btn
        color="orange"
        text
      >
       Watchlist
      </v-btn>
    </v-card-actions>
  </v-card>

  </v-container>
</template>
<script>
export default {
  name: "Movies",
  data () {
      return {
       loading : "true",
      }
    },
 async mounted () { 
 let response = await axios.get('https://api.themoviedb.org/3/discover/movie?api_key=55ae7e8ee068e60e2522e6c2e15994aa')
      this.wholeResponse = response.data.results
      this.page = Number(response.page)
      this.totalPages = Number(response.total_pages)
      this.loading = false 
  },
}
</script>
<style lang="css" scoped>

  .v-progress-circular{
    margin: 1rem;
  }
  /* #card{
    width: 300px;
  } */
   
</style>
