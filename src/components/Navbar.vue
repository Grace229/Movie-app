<template>
<v-app-bar app clipped-left>
    <v-app-bar-nav-icon color="blue" x-large @click="drawer ? hideDrawer() : showDrawer()" />
  <v-toolbar>
         <v-toolbar-title class="headline text-uppercase">
        <router-link
        to='/'
        tag='span'
        style='cursor: pointer'>
        Movie App
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-flex xs12 sm6 md3>
        <v-text-field
          label='Movie Name'
          v-model='searchString'
          @keypress="search()"
          >
        </v-text-field>
        </v-flex>
      <v-btn
        flat
       
      >
       <span class="mr-2">Search</span>
      </v-btn>
    </v-toolbar>
</v-app-bar>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'Navbar',
    data () {
      return {
        searchString: ''

      }
    },
    computed: {
        ...mapGetters({
            drawer: 'getDrawer'
        }),

    },
    methods: {
        ...mapActions(['hideDrawer', 'showDrawer']),
        search () {
          this.$router.push({ query: Object.assign({}, this.$route.query, { q: this.searchString }) });
        }
    }
}
</script>

<style>


</style>
