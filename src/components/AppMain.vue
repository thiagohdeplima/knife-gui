<template>
  <v-container class="ma-0 pa-0" fluid style="height: 100vh;" >
    <v-layout fill-height>
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
        <v-divider></v-divider>
        <router-view />
      </v-row>
    </v-col>
    </v-layout>
  </v-container>
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
