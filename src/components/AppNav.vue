<template>
  <v-navigation-drawer dark permanent>
    <template v-slot:prepend>
      <v-list-item>
        <v-list-item-icon>
          <v-icon x-large>mdi-alpha-k-circle-outline</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title class="text-h6">Knife</v-list-item-title>
          <v-list-item-subtitle>NoOps Platform</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </template>

    <v-divider></v-divider>

    <v-list dense nav>
      <v-list-item
        v-for="item in main"
        :key="item.title"
        link
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-divider></v-divider>

    <v-list dense nav>
      <v-list-item
        v-for="item in apps"
        :key="item.title"
        link
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'AppNav',

  data: () => ({
    main: [
      { title: 'Apps',           icon: 'mdi-application-braces' },
      { title: 'Servers',        icon: 'mdi-server' },
      { title: 'Configurations', icon: 'mdi-cog-outline' }
    ],
    apps: [
      { title: 'Versions',    icon: 'mdi-diversify' },
      { title: 'Metrics',     icon: 'mdi-chart-bar' },
      { title: 'Deployment',  icon: 'mdi-pipe' },
      { title: 'Logs',        icon: 'mdi-filter-minus' },
      { title: 'Resources',   icon: 'mdi-semantic-web' },
      { title: 'Permissions', icon: 'mdi-account-multiple-check-outline' },
    ]
  }),
};
</script>