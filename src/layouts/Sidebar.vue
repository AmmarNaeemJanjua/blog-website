<template>
    <v-navigation-drawer color="deep-purple-darken-2" expand-on-hover rail permanent>
        <v-list nav>
            <v-list-item @click="this.$router.push('/admin')" prepend-icon="mdi-shield-account" title="Admin"
                subtitle="admin@admin.com"></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
            <v-list-item to="/manageblogs" prepend-icon="mdi-post" title="Manage Blogs"></v-list-item>
            <v-list-item to="/allusers" prepend-icon="mdi-account-multiple" title="All Users"></v-list-item>
        </v-list>

        <template v-slot:append>
            <div class="pa-2">
                <v-list-item prepend-icon="none">
                    <v-btn @click="onLogout" color="black" dark>Logout</v-btn>
                </v-list-item>
            </div>
        </template>
    </v-navigation-drawer>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    methods: {
        ...mapActions('[LOGOUT_ACTION]'),
        onLogout() {
            this.LOGOUT_ACTION();
            this.$router.push('/login');
        }
    }
}
</script>