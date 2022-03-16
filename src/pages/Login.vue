<template>
    <q-page class="content-general-props">


          <div class="row">

  

            <!-- imagem -->
            <div class="col col-md-8 backgrond-props" style="height: 100vh; display: flex; justify-content: center; align-items: center">
                  <div style="
                    margin: auto;
                    position: absolute; 
                    opacity: 1; 
                    z-index: 99;
                  ">
                  
                  <q-img 
                    src="~assets/poke_logo.svg" 
                    width="300px"
                  />
            </div> 
            </div>

            <div class="col col-md-4" style="display: flex; justify-content: center; align-items: center">
                <q-btn
                  color="red" 
                  icon="mdi-google" 
                  @click="logIn('google')"
                  >
                    Login with google
                </q-btn>
            </div>
          </div>
    </q-page>

    <!-- <q-btn
      color="black" 
      icon="mdi-google" label="LogOut"
      size="md" @click="logOut('google')" >
    </q-btn> -->
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

<style scoped lang="scss">
  .backgrond-props{
    background: url("https://wallpaperaccess.com/full/7941327.jpg") ;
    opacity: 0.5;
  
  }

  .content-general-props {
    background: $blue_400;
    
  }


</style>