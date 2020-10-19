<template>
  <div class="home" >
   <Movies 
   v-for="movie in wholeResponse"
   :key="movie.id" :movie="movie"
   :loading="loading"  />

  
  
  
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
import Movies from '@/components/Movies.vue'

export default {
  name: 'Home',
  components: {
  Movies,

  },
  data () {
    return {
      wholeResponse: [],
      totalPages: 0,
      page: '1',
      movies: [],
      loading: true
    }
  },

  watch: {
    async '$route.params' () {
      try {
        let query = this.$route.query.q
        let data = await axios.get(`https://api.themoviedb.org/3/search/multi?api_key=55ae7e8ee068e60e2522e6c2e15994aa&language=en-US&page=1&include_adult=false&query=${query}`)
         this.wholeResponse = data.data.results
      } catch (err) {
        
      }
    }
  },
  
  mounted () {
  axios
    .get('https://api.themoviedb.org/3/discover/movie?api_key=55ae7e8ee068e60e2522e6c2e15994aa')
    .then(response => {
      this.wholeResponse = response.data.results
      this.loading = false
    })
    .catch(error => {
      console.log(error)
    })
  },
  
}
</script>
<style scoped>
 .home{
      display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin-bottom: 40px;
   }
</style>