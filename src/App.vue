<template>
  <v-app>
    <v-main>
      <app-nav />
    </v-main>
  </v-app>
</template>

<script>
import AppNav from './components/AppNav';

export default {
  name: 'App',

  components: {
    AppNav,
  },

  data: () => ({
    //
  }),
};
</script>
