<template>
  <v-btn icon class="pa-r12">
    <v-icon v-if="active">{{ getIcon() }}</v-icon>
  </v-btn>
</template>


<script>
export default {
  name: 'AppBtnNotification',

  data: () => ({
    active: true
  }),

  methods: {
    getIcon: function() {
      let icon = "mdi-bell-outline"

      if(this.hasNotifications()) {
        icon = "mdi-bell-ring"
      }

      return icon
    },

    hasNotifications: function() {
      return [true, false][(Math.random() * 2) | 0]
    }
  }
}
</script>