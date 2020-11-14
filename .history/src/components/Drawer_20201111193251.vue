<template>
     <v-navigation-drawer :value="drawer" app clipped>

        <v-card
    class="mx-auto"
    max-width="500"
  >
  

    <v-list>
      <v-list-group
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title>MOVIES</v-list-item-title>
          </v-list-item-content>
        </template>
<v-list-item-group>

        <v-list-item
        >
         
          <v-list-item-content>
             <router-link class="link" to="/trending" >
            <v-list-item-title> Latest</v-list-item-title>
             </router-link>
          </v-list-item-content>
           
        </v-list-item>
         </v-list-item-group>
         <v-divider>

</v-divider>

         <v-list-item-group>

        <v-list-item
        >
         
          <v-list-item-content>
             <router-link class="link" to="/trending" >
            <v-list-item-title> Now Playing</v-list-item-title>
             </router-link>
          </v-list-item-content>
           
        </v-list-item>
         </v-list-item-group>
          <v-divider>

</v-divider>

         <v-list-item-group>

        <v-list-item
        >
         
          <v-list-item-content>
             <router-link class="link" to="/trending" >
            <v-list-item-title> Popular</v-list-item-title>
             </router-link>
          </v-list-item-content>
           
        </v-list-item>
         </v-list-item-group>
          <v-divider>

</v-divider>

         <v-list-item-group>

        <v-list-item
        >
         
          <v-list-item-content>
             <router-link class="link" to="/trending" >
            <v-list-item-title> Upcoming</v-list-item-title>
             </router-link>
          </v-list-item-content>
           
        </v-list-item>
         </v-list-item-group>

          <v-divider>

</v-divider>

      
      </v-list-group>
    </v-list>
     <v-list>
      <v-list-group
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title>TV SHOWS</v-list-item-title>
          </v-list-item-content>
        </template>
<v-list-item-group>

        <v-list-item
        >
         <router-link class="link" to="/login" >
          <v-list-item-content>
            
            <v-list-item-title> Airing Today </v-list-item-title>
             
          </v-list-item-content>
           </router-link>
        </v-list-item>
         </v-list-item-group>
          <v-divider>

</v-divider>

         <v-list-item-group>

        <v-list-item
        >
         
          <v-list-item-content>
             <router-link class="link" to="/trending" >
            <v-list-item-title> Popular </v-list-item-title>
             </router-link>
          </v-list-item-content>
           
        </v-list-item>
         </v-list-item-group>
          <v-divider>

</v-divider>

         <v-list-item-group>

        <v-list-item
        >
         
          <v-list-item-content>
             <router-link class="link" to="/trending" >
            <v-list-item-title> On tv</v-list-item-title>
             </router-link>
          </v-list-item-content>
           
        </v-list-item>
         </v-list-item-group>
          <v-divider>

</v-divider>

         <v-list-item-group>

        <v-list-item
        >
         
          <v-list-item-content>
             <router-link class="link" to="/trending" >
            <v-list-item-title> child</v-list-item-title>
             </router-link>
          </v-list-item-content>
           
        </v-list-item>
         </v-list-item-group>
          <v-divider>

</v-divider>

         <v-list-item-group>

        <v-list-item
        >
         
          <v-list-item-content>
             <router-link class="link" to="/trending" >
            <v-list-item-title> child</v-list-item-title>
             </router-link>
          </v-list-item-content>
           
        </v-list-item>
         </v-list-item-group>
         
      </v-list-group>
    </v-list>
 
<v-divider>

</v-divider>
     <v-list>
      <v-list-group
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title>WATCHLIST</v-list-item-title>
          </v-list-item-content>
        </template>
<v-list-item-group>
        <v-list-item
        >
          
          <v-list-item-content>
            <router-link class="link" to="/login" >
            <v-list-item-title> child </v-list-item-title>
       </router-link>
          </v-list-item-content>
           
         
        </v-list-item>
         </v-list-item-group>

      </v-list-group>
    </v-list>
  </v-card>


  
      
       <!-- <template>
  <v-card
    class="mx-auto"
    max-width="400"
    tile
  >
  <v-list-item-group>
<v-list-item>
      <v-list-item-content>
        <router-link class="link" to="/login" > <v-list-item-title>Popular Movies</v-list-item-title> </router-link>
       
      </v-list-item-content>
    </v-list-item>

    <v-list-item two-line>
      <router-link class="link"  to="/login" >
      <v-list-item-content>
        <v-list-item-title >Popular TV Shows</v-list-item-title>
      </v-list-item-content>
      </router-link>
    </v-list-item>
     <v-list-item two-line>
       <router-link class="link" to="/trending" >
      <v-list-item-content>
        <v-list-item-title>Trending</v-list-item-title>
      </v-list-item-content>
       </router-link>
    </v-list-item>
     <v-list-item two-line>
        <router-link class="link" to="/login" >
      <v-list-item-content>
        <v-list-item-title>Coming Soon</v-list-item-title>
      </v-list-item-content>
       </router-link>
    </v-list-item>
<v-list-item two-line>
   <router-link class="link" to="/login" >
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
</template> -->

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
.link{
  border: none;
  text-decoration: none;
  color: #2e2b2b;
}
</style>