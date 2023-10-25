<template>
    <v-container>
        <div class="d-flex justify-center align-center" style="height: 100vh;">
            <v-card>
                <v-card-title>User Details</v-card-title>
                <v-table fixed-header max-height="450px">
                    <thead>
                        <tr>
                            <th class="text-center">User ID</th>
                            <th class="text-center">Name</th>
                            <th class="text-center">Email</th>
                            <th class="text-center">Created At</th>
                            <th class="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="user in users" :key="user.id">
                            <td class="text-center">{{ user.id }}</td>
                            <td class="text-center">{{ user.name }}</td>
                            <td class="text-center">{{ user.email }}</td>
                            <td class="text-center">{{ user.created_at }}</td>
                            <td class="text-center">
                                <v-button @click="removeUser(user)">
                                    <v-icon color="red" style="cursor: pointer">mdi-delete</v-icon>
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
        ...mapGetters("users", ['GET_USERS']),
        users() {
            return this.GET_USERS;
        },
    },
    methods: {
        ...mapActions("users", ['FETCH_USERS', 'REMOVE_USER']),

        async removeUser(user) {
            const userId = user.id;
            await this.REMOVE_USER(userId);
            this.FETCH_USERS();
        }
    },
    created() {
        this.FETCH_USERS();
    }
}
</script>

<style scoped></style>