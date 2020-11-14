<template>
     <v-navigation-drawer :value="drawer" app clipped>
      
       <template>
  <v-card
    class="mx-auto"
    max-width="400"
    tile
  >
  <v-list-item-group>
<v-list-item>
      <v-list-item-content>
        <router-link  to="/login" > <v-list-item-title>Popular Movies</v-list-item-title> </router-link>
       
      </v-list-item-content>
    </v-list-item>

    <v-list-item two-line>
      <router-link  to="/login" >
      <v-list-item-content>
        <v-list-item-title>Popular TV Shows</v-list-item-title>
      </v-list-item-content>
      </router-link>
    </v-list-item>
     <v-list-item two-line>
       <router-link  to="/login" >
      <v-list-item-content>
        <v-list-item-title>Trending</v-list-item-title>
      </v-list-item-content>
       </router-link>
    </v-list-item>
     <v-list-item two-line>
        <router-link  to="/login" >
      <v-list-item-content>
        <v-list-item-title>Coming Soon</v-list-item-title>
      </v-list-item-content>
       </router-link>
    </v-list-item>
<v-list-item two-line>
   <router-link  to="/login" >
      <v-list-item-content>
        <v-list-item-title>Showing Now</v-list-item-title>
      </v-list-item-content>
       </router-link>
    </v-list-item>

    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title>Watchlist</v-list-item-title>
        <v-list-item-subtitle>
          Favorites
        </v-list-item-subtitle>
        <v-list-item-subtitle>
          
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-list-item-group>
    
  </v-card>
</template>

        </v-navigation-drawer>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Drawer',
  computed: {
      ...mapGetters({
          drawer: 'getDrawer'
      }),
  },
}
</script>
<style scoped>
.mx-auto{
  margin-top: 60px;
}
</style>