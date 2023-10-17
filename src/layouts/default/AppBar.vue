<template>
  <v-app-bar app color="deep-purple-darken-3">

    <v-container>
      <v-row align="center">
        <v-col cols="4">
          <v-toolbar-title>
            <router-link to="/" class="custom-link">
              BLOGS
            </router-link>
          </v-toolbar-title>
        </v-col>

        <v-col cols="4">
          <v-text-field v-model="search" label="Search" hide-details single-line rounded variant="outlined"
            prepend-inner-icon="mdi-magnify"></v-text-field>
        </v-col>

        <v-col cols="3"></v-col>

        <v-col cols="1">
          <v-btn v-if="!user" to="/loginview"><v-icon>mdi-login</v-icon></v-btn>
          <v-btn v-else @click="logout"><v-icon>mdi-logout</v-icon></v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      search: '',
    };
  },
  computed: {
    user() {
      return localStorage.getItem('user-info');
    },
  },
  methods: {
    
  },
};
</script>

<style>
.custom-link {
  text-decoration: none;
  color: inherit;
}
</style>