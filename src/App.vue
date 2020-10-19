

<template>
<v-app>
 

  <Navbar />
  <Drawer />
 

  
    <v-content>
 <v-container fluid>
      <router-view></router-view>
    </v-container>

    </v-content>
   

  <v-footer app>
  </v-footer>
</v-app>
 
  
    
</template>

<script>
import Navbar from  './components/Navbar.vue'
import Drawer from  './components/Drawer.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Drawer,
  },
  data () {
    return {
      searchString: ''
    }
  },
  methods: {
   
  }
}
</script>
<style scoped>
/* *{
  background-color: black;
} */
</style>