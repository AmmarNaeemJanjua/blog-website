<template>
  <AppBar />
  <div class="background-image">
    <v-img :src="blog.blog_image" height="80vh" cover></v-img>
    <h1 class="blog-title">{{ blog.blog_title }}</h1>
  </div>

  <v-container>
    <v-row>
      <v-col cols="3" class="first-section">
        <!-- i only want to display the date not the timestamp -->
        <div class="text-center">
          <p>
            <b>
              {{ new Date(blog.blog_timestamps).toLocaleDateString() }} - 3 min
              read
            </b>
          </p>
        </div>
      </v-col>
      <v-col cols="8" class="second-section">
        <p>{{ blog.blog_description }}</p>
        <br />
        <hr />
        <br />

        <div style="display: flex; align-items: center">
          <v-avatar
            image="https://randomuser.me/api/portraits/women/11.jpg"
          ></v-avatar>
          <p style="margin: 0; margin-left: 10px"> By <i>{{ blog.user_name }}</i></p>
          <p class="text-right" style="margin-left: auto">
            <v-icon icon="mdi-facebook" class="ma-1"></v-icon>
            <v-icon icon="mdi-twitter" class="ma-1"></v-icon>
            <v-icon icon="mdi-instagram" class="ma-1"></v-icon>
          </p>
        </div>
      </v-col>
    </v-row>
  </v-container>
  <Footer></Footer>
</template>

<script>
import AppBar from "./../layouts/default/AppBar.vue";
import Footer from "@/layouts/default/Footer.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  components: { AppBar, Footer },
  computed: {
    ...mapGetters("SpecificBlog", ["getBlog"]),
  },
  methods: {
    ...mapActions("SpecificBlog", ["fetchSingleBlog"]),
  },
  data() {
    return {
      blogId: this.$route.params.id,
      blog: null,
    };
  },
  created() {
    this.fetchSingleBlog(this.blogId)
      .then((blogData) => {
        this.blog = blogData;
      })
      .catch((error) => {
        console.error("Error fetching blog:", error);
      });
  },
};
</script>
<style scoped>
.background-image {
  background-size: cover;
  height: 100vh; 
  position: relative;
  z-index: 1;
  overflow: hidden;
}

.blog-title {
  position: absolute;
  top: 40%; 
  left: 50%; 
  transform: translate(-50%, -50%);
  color: #fff;
  text-align: center;
  font-family: Lora;
  font-size: 2.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

p {
  color: #495057;
  font-family: Lora;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5625rem;
}
</style>
