<template>
     <v-navigation-drawer :value="drawer" app clipped>
      
       <template>
  <v-card
    class="mx-auto"
    max-width="400"
    tile
  >
  <v-list-item-group>

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