<template>
    <v-container>
        <div class="d-flex justify-center align-center" style="height: 100vh;">
            <v-card>
                <v-card-title>Manage Blogs</v-card-title>
                <v-table fixed-header max-height="450px">
                    <thead>
                        <tr>
                            <th class="text-center">ID</th>
                            <th class="text-center">Title</th>
                            <th class="text-center">Status</th>
                            <th class="text-center">Category</th>
                            <th class="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="blog in blogs" :key="blog.id">
                            <td class="text-center">{{ blog.id }}</td>
                            <td class="text-center">{{ blog.title }}</td>
                            <td class="text-center">{{ blog.isApproved }}</td>
                            <td class="text-center">{{ blog.category_id }}</td>
                            <td class="text-center">
                                <v-button @click="approveBlog(blog)">
                                    <v-icon color="blue" style="cursor: pointer">mdi-check-decagram</v-icon>
                                </v-button>
                            </td>
                        </tr>
                    </tbody>
                </v-table>
            </v-card>
        </div>
    </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
    computed: {
        ...mapGetters("blogs", ['GET_BLOGS']),
        blogs() {
            return this.GET_BLOGS;
        },
    },
    methods: {
        ...mapActions("blogs", ['FETCH_BLOGS', 'APPROVE_BLOG']),

        async approveBlog(blog) {
            const blogId = blog.id;
            await this.APPROVE_BLOG(blogId);
            this.FETCH_BLOGS();
        }
    },
    created() {
        this.FETCH_BLOGS();
    }
}
</script>

<style scoped></style>