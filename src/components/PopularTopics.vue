<template>
    <v-container>
   <div class="pt-10 text-style">
      <h1>Popular topics</h1>
      
      <v-row>
        <v-col class="pt-8 text-style" >
          <v-text class="mr-3">All</v-text>
          <v-text class="mr-3">Adventure</v-text>
          <v-text class="mr-3">Travel</v-text>
          <v-text class="mr-3">Fashion</v-text>
          <v-text class="mr-3">Technology</v-text>
        </v-col>
        <v-text class="text-right mr-5">View All</v-text> 

             </v-row>
      
             <v-row>
              <!-- display the consoled data here  -->
              <v-col class="pt-5" v-for="blog in getBlogs" :key="blog.id" cols="12" sm="6" md="4" lg="3">
          <v-card class="mb-3" elevation="2" @mouseover="hover = true" @mouseout="hover = false">
            <v-img :src="blog.image" height="200"></v-img>
            <v-card-title class="text-h6">{{ blog.title }}</v-card-title>
            <v-card-text>{{ blog.description }}</v-card-text>
            
          </v-card>
        </v-col>
      </v-row>
    </div>
</v-container>

  </template>
  
<script>
import AllBlogs from '@/store/modules/AllBlogs';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: "PopularTopics",
  computed: {
    ...mapGetters('AllBlogs', ['getBlogs']),
  
  },
  methods: {
  ...mapActions('AllBlogs', ['fetchBlogs']),
  
},
  data() {
    return {
      hover: false,
    };
  },
  created() {
    this.fetchBlogs();
  },
};
</script>

  <style scoped>
  .v-card {
    transition: transform 0.2s ease;
  }
  
  .v-card:hover {
    transform: translateY(-5px);
    background-color: #f5f5f5;
  }

  .text-style{
color: #495057;
font-family: Lora;
font-size: 1.1rem;
font-style: normal;
font-weight: 700;
line-height: normal;
  }
  </style>
  