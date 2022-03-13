import { store } from 'quasar/wrappers'
import { createStore } from 'vuex'
import pokemon from './pokemon'
// import axios from 'axios';
import { api } from '../boot/axios.ts'


export default store(function (/* { ssrContext } */) {
  const Store = createStore({

    state: {
      teste_number: 0
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
