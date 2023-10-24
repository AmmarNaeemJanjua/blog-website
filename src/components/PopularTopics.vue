<template>
  <v-container>
    <div class="pt-10 text-style">
      <h1>Popular topics</h1>

      <v-row>
        <v-col class="pt-8 text-style">
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
        <v-col
          class="pt-5"
          v-for="blog in getBlogs"
          :key="blog.id"
          cols="12"
          sm="6"
          md="4"
          lg="3"
        >
          <!-- when user clicks on this blog card -->
          <router-link
            class="router-dec"
            :to="{ name: 'Blogpage', params: { id: blog.id } }"
          >
            <v-card class="mb-3" elevation="">
              <v-img
                :src="blog.image"
                height="250"
                class="circular-image"
                cover
              ></v-img>
              <v-card-title class="text-h6 title-style">{{
                blog.title
              }}</v-card-title>
              <v-card-text class="description-style"
                >{{ blog.description }}
                {{
                  blog.description.split(" ").slice(0, 30).join(" ")
                }}</v-card-text
              >
            </v-card>
          </router-link>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "PopularTopics",
  computed: {
    ...mapGetters("AllBlogs", ["getBlogs"]),
  },
  methods: {
    ...mapActions("AllBlogs", ["fetchBlogs"]),
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
  transition: transform 0.1s ease;
  border: none; /* Remove the border */
  box-shadow: none; /* Remove the shadow */
}

.v-card:hover {
  transform: translateY(-5px);
}

.text-style {
  color: #495057;
  font-family: "Lora";
  font-size: 1.1rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.circular-image {
  border-radius: 2%;
}

.title-style {
  color: #495057;
  font-family: "Lora";
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.5625rem;
}

.description-style {
  color: #6c757d;
  font-family: "Lora";
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.router-dec {
  text-decoration: none;
}
</style>
