<template>
     <v-navigation-drawer :value="drawer" app clipped>

        <v-card
    class="mx-auto"
    max-width="500"
  >
    <v-toolbar
      color="teal"
      dark
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Topics</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-toolbar>

    <v-list>
      <v-list-group
        v-for="item in items"
        :key="item.title"
        v-model="item.active"
        :prepend-icon="item.action"
        no-action
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item
          v-for="child in item.items"
          :key="child.title"
        >
          <v-list-item-content>
            <v-list-item-title v-text="child.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
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
}
</style>