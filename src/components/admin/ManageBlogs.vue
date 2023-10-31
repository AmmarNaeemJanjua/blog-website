<template>
    <v-container>
        <div class="d-flex justify-center align-center" style="height: 100vh;">
            <div>
                <v-card>
                    <v-card-title>Manage Blogs</v-card-title>
                    <v-table fixed-header height="450px">
                        <thead>
                            <tr>
                                <th class="text-center">Sr#</th>
                                <th class="text-center">Title</th>
                                <th class="text-center">Status</th>
                                <th class="text-center">Category</th>
                                <th class="text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(blog, index) in blogs" :key="blog.id">
                                <td class="text-center">{{ index + 1 }}</td>
                                <td class="text-center">{{ blog.title }}</td>
                                <td class="text-center">{{ blog.blogStatus }}</td>
                                <td class="text-center">{{ blog.category_name }}</td>
                                <td class="text-center">
                                    <v-button @click="approveBlog(blog)">
                                        <v-icon :color="blog.isApproved ? 'blue' : 'red'" style="cursor: pointer">
                                            {{ blog.isApproved ? 'mdi-check-circle' : 'mdi-close-octagon' }}
                                        </v-icon>
                                    </v-button>
                                </td>
                            </tr>
                        </tbody>
                    </v-table>
                </v-card>
            </div>
        </div>
    </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
    computed: {
        ...mapGetters("mblogs", ['GET_BLOGS']),
        blogs() {
            return this.GET_BLOGS;
        },
    },
    methods: {
        ...mapActions("mblogs", ['FETCH_BLOGS', 'APPROVE_BLOG']),

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