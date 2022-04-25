<template>
  <v-layout fill-height style="background-color: #eee">
    <v-col cols=2 class="ma-0 pa-0">
      <app-nav />
    </v-col>
    <v-col cols=10 class="ma-0 pa-0">
      <v-row>
        <v-app-bar color="transparent" height="84vh" elevation=0>
          <v-spacer></v-spacer>

          <app-btn-notification />

          <app-btn-logout class="mr-8" />
        </v-app-bar>
      </v-row>
      <v-row>
        <v-col cols=12>
          <v-card class="elevation-1 ml-5 mr-5">
            <router-view />
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-layout>
</template>

<script>
import AppNav from './AppNav';

import AppBtnLogout from './AppBtnLogout';
import AppBtnNotification from './AppBtnNotification';

export default {
  name: 'AppMain',

  components: {
    AppNav,

    AppBtnLogout,
    AppBtnNotification
  },

  data: () => ({
    //
  }),
};
</script>

<style>
  fade {
    background-color: #f00;
  }
</style>
