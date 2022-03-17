import { store } from 'quasar/wrappers'
import { createStore } from 'vuex'
import pokemon from './pokemon'
// import axios from 'axios';
import { api } from '../boot/axios.js'


export default store(function (/* { ssrContext } */) {
  const Store = createStore({

    state: {
      teste_number: 0,
      user: {}
    },

    mutations: {
      SET_USER(ctx, user){
        ctx.state.user = user
      }
    },

    actions: {

    },

    modules: {
      pokemon
    },

    strict: process.env.DEBUGGING
  })

  return Store
})
