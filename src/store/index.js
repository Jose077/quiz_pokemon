import { store } from 'quasar/wrappers'
import { createStore } from 'vuex'
import pokemon from './pokemon'

export default store(function (/* { ssrContext } */) {
  const Store = createStore({

    state: {
      teste_number: 0,
      user: {}
    },

    mutations: {
      SET_USER(ctx, user) {
        ctx.user = user
      },

      SUM_COUNT(ctx, newValue) {
        ctx.teste_number = (ctx.teste_number + newValue)
      }
    },

    actions: {
      isLogged() {

      }
    },

    modules: {
      pokemon
    },

    strict: process.env.DEBUGGING
  })

  return Store
})
