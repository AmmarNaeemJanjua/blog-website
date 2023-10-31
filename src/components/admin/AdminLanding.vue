<template>
    <v-container class="pa-0">
        <v-row align="center" style="height: 100vh;" justify="center">
            <v-col v-for="(card, index) in cards" :key="index" cols="12" xs="8" sm="6" md="5" lg="4">
                <v-hover v-slot="{ isHovering, props }">
                    <router-link :to="card.route">
                        <v-card elevation="10" v-bind="props">
                            <v-img cover :aspect-ratio="4 / 3" :src="card.imageUrl"></v-img>
                            <v-overlay :model-value="isHovering" contained style="backdrop-filter: blur(2px);"
                                class="align-center justify-center">
                                <v-card-title class="text-h5 font-weight-bold">{{ card.title }}</v-card-title>
                            </v-overlay>
                        </v-card>
                    </router-link>
                </v-hover>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            cards: [
                {
                    title: 'Manage Blogs',
                    imageUrl: 'https://img.freepik.com/premium-vector/blog-design-icons_18591-34287.jpg?size=626&ext=jpg&ga=GA1.1.1011591300.1695638208&semt=ais',
                    route: '/manageblogs',
                },
                {
                    title: 'Manage Users',
                    imageUrl: 'https://img.freepik.com/free-vector/character-illustration-people-holding-user-account-icons_53876-66068.jpg?size=626&ext=jpg&ga=GA1.1.1011591300.1695638208&semt=ais',
                    route: '/allusers',
                }
            ],
        };
    }
}
</script>

<style scoped></style>