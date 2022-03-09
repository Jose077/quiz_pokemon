<template>
    <q-card class="bordered" style="border-radius: 2rem" >
        <img src="https://cdn.quasar.dev/img/parallax2.jpg">

        <q-list class="q-pb-md q-mt-sm">

            <span class="q-ml-md text-h5"> {{title || 'Não encontrado!'}} </span>

            <q-item clickable>
                <q-item-section avatar>
                <q-icon color="primary" name="local_bar" />
                </q-item-section>

                <q-item-section>
                <q-item-label>Bar XYZ</q-item-label>
                <q-item-label caption>Have a drink.</q-item-label>
                </q-item-section>
            </q-item>
        </q-list>
    </q-card>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "CardPokemon",

  props: {

    title: {
      type: String,
      required: true,
    },

    link: {
      type: String,
      default: "#",
      required: true,
    },


  },

  methods: {
    
  },

  created(){
    console.log("brabrbaubraubruabur");
  }
});
</script>
