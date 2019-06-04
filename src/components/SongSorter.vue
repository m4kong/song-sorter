<template>
  <v-container>
    <v-layout class="justify-center">
      <v-flex xs12>
        <v-card class="pt-2 pr-4 pb-4 pl-4 wrapper-list">
          <v-text-field
            v-model="search"
            append-icon="search"
            label="Search..."
            single-line
            hide-details
            class="mb-4 song-search"
          ></v-text-field>
          <v-card>
            <v-data-table
              :headers="headers"
              :items="songs"
              :search="search"
              class="elevation-1"
              item-key="index"
              :loading="fetchingSongs"
            >
              <template slot="items" slot-scope="props">
                <tr class="songs">
                  <td class="text-xs-left text-no-wrap caption">
                    <v-avatar size="24px" class="mr-2">
                      <img :src="props.item['im:image'][0].label">
                    </v-avatar>
                    <a
                      :href="props.item.link[0].attributes.href"
                      target="_blank"
                    >{{ props.item['im:name'].label | truncate }}</a>
                  </td>
                  <td
                    class="text-xs-left text-no-wrap caption"
                  >{{ props.item['im:artist'].label | truncate }}</td>
                  <td class="text-xs-left caption">
                    <a
                      :href="props.item['im:collection'].link.attributes.href"
                      target="_blank"
                    >{{ props.item['im:collection']['im:name'].label | truncate }}</a>
                  </td>
                  <td class="text-xs-left caption">{{props.item['im:releaseDate'].attributes.label}}</td>
                </tr>
              </template>
              <v-alert
                slot="no-results"
                :value="true"
                color="error"
                icon="warning"
              >Your search for "{{ search }}" found no results.</v-alert>
            </v-data-table>
          </v-card>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    // Loading Status & Search Input
    fetchingSongs: true,
    search: "",
    // Table Headers
    headers: [
      {
        text: "Title",
        sortable: true,
        value: "im:name.label"
      },
      { text: "Artist", value: "im:artist.label", sortable: true },
      { text: "Album", value: "im:collection.im:name.label", sortable: true },
      { text: "Released", value: "im:releaseDate.label", sortable: true }
    ],
    // Songs
    songs: []
  }),
  filters: {
    // Handle long song, album & title names
    truncate: value => {
      if (value.length > 30) {
        value = value.substring(0, 27) + "...";
      }
      return value;
    }
  },
  mounted() {
    this.axios
      .get("https://itunes.apple.com/us/rss/topsongs/limit=200/json")
      .then(response => {
        // Populate songs array, suppress loading animation
        this.songs = response.data.feed.entry;
        this.fetchingSongs = false;
      });
  }
};
</script>
