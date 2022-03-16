<template>
    <q-page>
        <div style="display: flex; justify-content: center; ">
          <div style="margin-top: 20rem">
            <q-btn
              color="red" 
              icon="mdi-google" label="Login with google"
              size="md" @click="logIn('google')" >
            </q-btn>

            <q-btn
              color="black" 
              icon="mdi-google" label="LogOut"
              size="md" @click="logOut('google')" >
            </q-btn>
          </div>
       </div>
    </q-page>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
  name: 'Login',
  
  setup(){

    const user =  ref(null);

    return {
      user
    }

  },
  methods: {
    // login
    logIn (network) {
      this.$hello(network).login().then(() => {
          const data = this.$hello(network).api("me").then((res) => {
              this.user = res;
          })
      })
    },

    // logOut
    logOut(network) {
        this.$hello(network).logout().then(() => {
            console.log("logout realizado com sucesso!");
        }).catch((err) => {
          console.log("Ocorreu um erro:", err);
        })
    }
  }
}
</script>

<style scoped>
.dark{
  background: #1817309a;
}
</style>