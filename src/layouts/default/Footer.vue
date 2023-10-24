<template >
    <v-layout class="footer-container mt-8">
  <v-container >
    <v-row>
      <!-- 1st column -->
      <v-col cols="3">
        <h4 class="mt-2 mb-1">Contact the Publisher</h4>
        <p class="mt-2">mike@runo.com</p>
        <p class="mt-2">+944 450 904 505</p>
      </v-col>

      <!-- 2nd column -->
      <v-col cols="3">
        <h4 class="mt-2">Explorate</h4>
        <p class="mt-2">About</p>
        <p class="mt-2">Partners</p>
        <p class="mt-2">Job Opportunities</p>
        <p class="mt-2">Advertise</p>
        <p class="mt-2">Membership</p>
          </v-col>

      <!-- 3rd column -->
      <v-col cols="3">
        <h4 class="mt-2">Headquarters</h4>
        <p class="mt-2"> 191 Middleville Road,</p>
        <p class="mt-2">NY 1001, Sydney</p>
        <p class="mt-2">Australia</p>
      </v-col>

      <!-- 4th column column -->
      <v-col cols="3">
        <h4 class="mt-2">Connections</h4>
        <p class="mt-2">
        <v-icon icon="mdi-facebook" class="ma-1"></v-icon>
        <v-icon icon="mdi-twitter" class="ma-1"></v-icon>
        <v-icon icon="mdi-instagram" class="ma-1"></v-icon>
    </p>
      </v-col>
    </v-row>
  </v-container>
</v-layout>
</template>

<script>
export default {
  data() {
    return {
      exploreItems: ['About', 'Partners', 'Job Opportunities', 'Advertise', 'Membership'],
    };
  },
};
</script>

<style scoped>
.footer-container{
    background-color: #212529;
    /* color: #FFFFFF; */

}

h4{
color: #FFF;
font-family: Lora;
font-size: 1.5rem;
font-style: normal;
font-weight: 700;
line-height: 1.5625rem; /* 138.889% */
}

p{
color: #E5E5E5;
font-family: Lora;
font-size: 1rem;
font-style: normal;
font-weight: 50;
line-height: normal;
}
</style>
