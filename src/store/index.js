import { store } from 'quasar/wrappers'
import { createStore } from 'vuex'
import Pokemon from './pokemon'
// import axios from 'axios';
import { api } from '../boot/axios.ts'


// import example from './module-example'

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default store(function (/* { ssrContext } */) {
  const Store = createStore({

    state: {
      teste_number: 0
    },

    actions: {
      async getPokemons({ state }) {

        return await new Promise((resolve, reject) => {
          api.request(
            {
              url: '/pokemon',
              method: 'GET',
              // headers: { 'Authorization': `Bearer ${rootState.token}` }
            })
            .then((res) => {
              resolve(res);
            })
            .catch((err) => {
              reject(err);
            });
        });
      },
    },

    modules: {
      Pokemon
    },

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING
  })

  return Store
})
