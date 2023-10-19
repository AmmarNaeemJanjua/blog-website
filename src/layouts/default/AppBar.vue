<template>
  <v-layout>
    <v-app-bar app color="transparent" elevation="2" scroll-behavior="hide">
      <v-toolbar-title class="mr-4">
        <v-btn class="custom-text ml-10">BLOGS</v-btn>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text class="custom-text">Home</v-btn>
      <v-btn text class="custom-text">Write</v-btn>
      <v-btn text class="custom-text">About</v-btn>
      <p text class="custom-text">|</p>
      <v-btn text class="custom-text">Login</v-btn>
      <v-btn text class="custom-text">Register</v-btn>
      <p text class="custom-text">|</p>
      <v-icon
        class="mr-8 ml-3 pt-1"
        icon="mdi-magnify"
        color="white"
        size="x-small"
      ></v-icon>
    </v-app-bar>
  </v-layout>
</template>

<script>
export default {
  name: "AppBar",
};
</script>

<style scoped>
.custom-text {
  color: #fff;
  font-family: "Roboto";
  font-size: 0.8rem;
  font-style: normal;
  line-height: normal;
  text-transform: inherit;
}

.v-app-bar {
  position: fixed !important;
  top: 0;
  left: 0;
  right: 0;
  z-index: +4 !important;
}
</style>
