<template>
    <v-container>
        <div class="justify-content-center">
            <v-row>
                <v-col v-for="(post, index) in paginatedposts" :key="index" cols="12" sm="6" md="4" lg="3">
                    <v-card class="mx-auto" max-width="300">
                        <v-img class="align-end text-white" height="300" :src="post.image">
                        </v-img>
                        <v-card-title>{{ post.title }}</v-card-title>

                        <v-card-text>
                            <div>{{ post.description }}</div>
                        </v-card-text>

                        <v-card-actions class="d-flex justify-center">

                            <v-btn color="deep-purple-darken-3" @click="viewPost(post)">
                                VIEW FULL PO
                            </v-btn>

                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>

            <v-pagination v-model="page" :length="Math.ceil(posts.length / perPage)" color="primary"
                class="mt-4 mb-4"></v-pagination>
        </div>
    </v-container>
</template>
  
<script>
export default {
    data() {
        return {
            posts: [],

            page: 1,
            perPage: 12,

            showDialog: false,
        }
    },
    computed: {
        paginatedposts() {
            const startIndex = (this.page - 1) * this.perPage;
            const endIndex = startIndex + this.perPage;
            return this.posts.slice(startIndex, endIndex);
        },
    },
    mounted() {
        this.getposts();
    },
    methods: {

    },
};
</script>
  