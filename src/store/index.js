import { store } from 'quasar/wrappers'
import { createStore } from 'vuex'
import pokemon from './pokemon'
// import hello from '../boot/hello'
import hello from 'hellojs';


export default store(function () {
  const Store = createStore({

    state: {
      teste_number: 0,
      user: {},
      token: ''
    },

    mutations: {
      SET_USER(ctx, user) {
        ctx.user = user
      },

      SUM_COUNT(ctx, newValue) {
        ctx.teste_number = (ctx.teste_number + newValue)
      }
    },

    getters: {
      isLoggedIn: state => {
        var online = function (session) {
          var currentTime = (new Date()).getTime() / 1000;
          return session && session?.access_token && session?.expires > currentTime;
        };

        var go = hello('google')?.getAuthResponse();

        return online(go);
      }
    },

    actions: {

      async getUser(ctx, network) {
        await hello(network)?.api('me')
          .then((user) => {

            ctx.commit('SET_USER', user);

            return user
          }, (err) => {
            console.log("Erro Aqui EEEEEE: ", err)
          })
      },
    },



    modules: {
      pokemon
    },

    strict: process.env.DEBUGGING
  })

  return Store
})
