<template>
    <q-page class=" backgrond-props">
        <div  style="display: flex; justify-content: center; align-items: center">

          <q-card bordered class="card_login_props">
            <q-card-section style="display: flex; gap: 0.5rem; flex-direction: column; justify-content: center">

              <!-- imagem pokedex -->
              <div style="display: flex; justify-content: center">
                  <q-img
                      width="200px"
                      src="https://raw.githubusercontent.com/sleduardo20/pokedex/0671af442dff1d8f7141e49eb83b438885bbc9e9/public/img/logo.svg"
                  />
              </div>

              <br>
                  <b> <span class="text-white text-h6">Faça login utilizando uma das formas abaixo!</span> </b>
              <br>

              <!-- botoes login -->
              <div style="display: flex; flex-direction: column; gap: 1rem">

                  <!-- login com o google -->
                  <q-btn
                      color="red"
                      icon="mdi-google"
                      @click="logIn('google')"
                      label="Login with google"
                  />

                  <!-- login com o facebook -->
                  <q-btn
                      color="blue"
                      icon="mdi-facebook"
                      @click="logIn('google')"
                      label="Login with Facebook"
                  />

              </div>

            </q-card-section>

          </q-card>
        </div>
    </q-page>

</template>

<script>
import { ref } from '@vue/reactivity';
import { useQuasar } from 'quasar';

// import { Notify, useQuasar } from 'quasar'

// Notify.create({
//   message: 'Danger, Will Robinson! Danger!'
// })


export default {
  name: 'Login',

  setup(){

    const $q = useQuasar();

    const user =  ref(null);

    return {
      user,
      $q
    }

  },

  methods: {

    // login
    logIn (network) {
      this.$hello(network).login().then(() => {
          this.$hello(network).api("me")
          .then((res) => {

              this.$q.notify({
                message: "Login efetuado com sucesso!",
                position: "top-right",
                type: 'positive',
                timeout: 1000
              })

              this.user = res;

              this.$store.commit("SET_USER", res);


              this.$router.push("/pokedex");

          })
          .catch((err) => {
              this.$q.notify({
                message: "Erro ao efetuar login!",
                position: "top-right",
                type: 'negative',
                timeout: 1000
              })

            console.log(err)
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
    },

    // getUser() {
    //   this.$store.dispatch("getUser", 'google');
    // }
  },

}
</script>

<style scoped lang="scss">

  .backgrond-props{
    background: url("https://wallpaperaccess.com/full/7941327.jpg"), rgba(6, 1, 48, 0.8);
    background-size: cover;
    background-blend-mode: color !important;

    display: flex;
    justify-content: center;

  }

  .card_login_props{
    opacity: 1;

    display: flex;
    justify-content: center;
    align-content: space-around;

    height: 70%;
    width:  95%;

    max-height: 30rem;
    max-width: 25rem;

    background: $blue_400;
    padding: 1.5rem;
    border-radius: 20px;

  }




</style>
