<template>
   <AppBar/>
    <div class="background-image">
    <v-img src="./../assets/newblog.jpg" cover></v-img>
  </div>
</template>

<script>
import AppBar from '@/layouts/default/AppBar.vue';
export default {
    components: { AppBar },

}
</script>

<style>
.background-image {
  background-size: cover;
  height: 100vh; /* Adjust the height as needed */
  position: relative;
  z-index: 1;
  overflow: hidden;
}
</style>