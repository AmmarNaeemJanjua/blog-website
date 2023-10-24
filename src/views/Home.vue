<template>
  <AppBar />
  <div class="background-image">
    <!-- 1st img -->
    <v-img src="./../assets/Image.jpg"></v-img>
  </div>

  <PopularTopics />
  <!-- 2nd img -->
  <v-img src="./../assets/new.jpg" height="100vh"></v-img>
<div>
  <Footer></Footer>
</div>
</template>

<script>
import PopularTopics from "@/components/PopularTopics.vue";
import AppBar from "@/layouts/default/AppBar.vue";
import Footer from "@/layouts/default/Footer.vue";

export default {
  components: { PopularTopics, AppBar , Footer},
};
</script>

<style scoped>
.background-image {
  background-size: cover;
  height: 100vh; /* Adjust the height as needed */
  position: relative;
  z-index: 1;
  overflow: hidden;
}
</style>
