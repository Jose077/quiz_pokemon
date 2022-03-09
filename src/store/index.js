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
      // async getPokemons({ state }) {

      //   return await new Promise((resolve, reject) => {
      //     api.request(
      //       {
      //         url: '/pokemon',
      //         method: 'GET',
      //         // headers: { 'Authorization': `Bearer ${rootState.token}` }
      //       })
      //       .then((res) => {
      //         resolve(res);
      //       })
      //       .catch((err) => {
      //         reject(err);
      //       });
      //   });
      // },
    },

    modules: {
      pokemon
    },

    strict: process.env.DEBUGGING
  })

  return Store
})
