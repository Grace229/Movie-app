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
 
<v-container v-else grid-list-xl  class="container">
   <v-card id="card"
  >
    <v-img
      class="white--text align-end"
      height="250px"
      :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"
    >
      <v-card-title>{{movie.title}}</v-card-title>
    </v-img>
    <v-card-actions>
      <v-btn
        color="orange"
        text
      >
       Favorites
      </v-btn>
<v-spacer >
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
  name: "latest",
  props: {
    movie: {
      type: Object,
      default: () => {}
    },
    loading: {
      type: Boolean,
      default: true
    },
  },
  methods: {
    singleMovie (id) {
      this.$router.push('/Movie/' + id)
    }
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
