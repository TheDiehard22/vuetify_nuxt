<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md12>
      <v-card>
        <v-card-title class="headline">Welcome to the Vuetify + Nuxt.js template</v-card-title>
        <v-card-text>
          
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" flat nuxt to="/inspire">Continue</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>

export default {
  name: 'Home',
  
  async fetch({ store, params }) {
    let { data } = await axios.get('https://osr.nl/api/catalog')
    store.commit('getTiles', data)
  }
}
</script>
