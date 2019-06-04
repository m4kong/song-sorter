<template>
  <v-app dark>
    <v-content>
      <SongSorter/>
    </v-content>
  </v-app>
</template>

<script>
import SongSorter from "./components/SongSorter";

export default {
  name: "App",
  components: {
    SongSorter
  },
  data() {
    return {};
  }
};
</script>
<style lang="scss">
// Core colors
$accemt-active: #ffe560;
$primary-light: #ffffff;
$primary-dark: #c62e2e;
$accent-background: #ab0037;

// Vuetify Overrides
body {
  .application.theme--dark {
    background-image: linear-gradient(
      to bottom,
      #d62810,
      #cd1b1f,
      #c30e29,
      #b70331,
      #ab0037
    );

    // Search
    .song-search {
      .v-input__slot:before {
        border-top: none;
        border-bottom: 1px solid $primary-light;
      }
      input,
      .v-icon {
        color: $primary-light;
      }
      .v-label {
        color: rgba(255, 255, 255, 0.3);
      }
    }

    // Data Table & Card
    .v-table thead tr:first-child {
      border: none;
    }
    .theme--dark.v-list {
      background: $accent-background;
    }
    .v-card,
    .v-table {
      box-shadow: none;
      border-spacing: 0 0px;
      border: none;
      thead {
        background: none;
        border-bottom: 1px solid $primary-dark;
      }
      tbody {
        tr {
          box-shadow: none;
          border: none;
        }
      }
    }
    .wrapper-list {
      background: rgba(255, 255, 255, 0.1);
      background-position: top center;
      border: none;
      box-shadow: none;
      border-radius: 0px;
      .sortable:hover {
        color: $primary-light;
      }
      thead tr th {
        color: $primary-light;
        &:hover {
          color: $primary-light;
        }
      }
      .theme--dark.v-datatable thead th.column.sortable.active {
        color: $primary-light;
        i {
          color: $accemt-active;
        }
      }
      .theme--dark.v-datatable .v-datatable__actions {
        background: none;
      }
      .songs {
        color: $primary-light;
        &:hover {
          cursor: pointer;
          background: $primary-light;
          color: $primary-dark;
          a {
            color: $primary-dark;
          }
        }
      }
      .v-card {
        background: none;
      }
    }
    .v-table {
      background: none;
    }
  }
}
@import "https://fonts.googleapis.com/css?family=Material+Icons";
</style>
