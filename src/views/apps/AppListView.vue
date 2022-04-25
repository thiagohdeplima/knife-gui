<template>
  <v-data-table
    :headers="getHeaders()"
    :items="apps"
    :items-per-page="15"
    :custom-filter="searchForApp"
  >
    <template v-slot:[`item.alarms`]="{ item }">
      <v-chip pill class="ma-2" :color="getAlarmArtifacts(item.alarms, 'color')" dark>
        <v-icon left>{{ getAlarmArtifacts(item.alarms, 'icon') }}</v-icon>
        {{ item.alarms.length }}
      </v-chip>
    </template>
  </v-data-table>
</template>

<script>
export default {
  name: 'AppListView',

  components: {},

  data: () => ({
    apps: [
      {
        name: "my-app-1",
        rpm: "100",
        alarms: [],
        version: "1.3.2",
        last_deploy: "2022-01-13T00:00:12.921Z"
      },
      {
        name: "my-app-2",
        rpm: "100",
        alarms: [
          {type: "critical"},
          {type: "medium"},
          {type: "medium"},
        ],
        version: "0.1.2",
        last_deploy: "2022-01-13T00:00:12.921Z"
      },
      {
        name: "my-app-2",
        rpm: "100",
        alarms: [
          {type: "non-critical"},
        ],
        version: "0.2.2",
        last_deploy: "2022-01-13T00:00:12.921Z"
      }
    ],
  }),

  methods: {
    searchForApp(appName) {
      return [{...this.apps[0], name: `${appName}-foo`}]
    },

    getHeaders: function() {
      return [
        {filterable: true,  align: "center",  text: "Name",        sortable: true,  value: "name"},
        {filterable: false, align: "center",  text: "RPM",         sortable: true,  value: "rpm"},
        {filterable: false, align: "center",  text: "Alarms",      sortable: false, value: "alarms"},
        {filterable: false, align: "center",  text: "Version",     sortable: false, value: "version"},
        {filterable: false, align: "start",   text: "Last deploy", sortable: false, value: "last_deploy"},
      ]
    },

    getAlarmArtifacts: function(alarms, artifact) {
      if(alarms.length == 0) {
        return artifact == 'color' ? 'green' : 'mdi-check'
      }

      if(alarms.some(alarm => alarm.type === "critical")) {
        return artifact == 'color' ? 'orange' : 'mdi-alert-circle-outline'
      }

      return artifact == 'color' ? 'red' : 'mdi-fire'
    }
  }
};
</script>
