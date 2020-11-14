import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex, axios)

export default new Vuex.Store({
  state: {
    drawer: 'false',
    user: '',
    movies:[]
  },
  getters:{
    getDrawer: state => state.drawer,
    getUser: state => state.user,
  },
  mutations: {
    changeDrawer: (state, status) => (state.drawer = status),
    settingUser: (state, user) => (state.user = user),
  },
  actions: {
loadMovies ({commit}){
   axios
        .get('https://api.themoviedb.org/3/trending/movie/day?api_key=55ae7e8ee068e60e2522e6c2e15994aa')
        .then(data => {
          console.log(data.data)
          let movies = data.data
          commit()
        })
        .catch(error =>{
          console.log(error)
        })
},
    hideDrawer: ({ commit }) => commit('changeDrawer', false),
    showDrawer: ({ commit }) => commit('changeDrawer', true),
    setUser: ({ commit }, user) => commit('settingUser', user)
  },
  modules: {
  }
})
