<template>
    <v-container>
        <v-row align="center" style="height: 100vh;" justify="center">

            <v-col cols="12" xs="8" sm="6" md="5" lg="4">
                <router-link to="/manageblogs">
                    <v-sheet elevation="10">
                        <v-img cover :aspect-ratio="4/3"
                            src="https://img.freepik.com/premium-vector/blog-design-icons_18591-34287.jpg?size=626&ext=jpg&ga=GA1.1.1011591300.1695638208&semt=ais"></v-img>
                    </v-sheet>
                </router-link>
            </v-col>
            
            <v-col cols="12" xs="8" sm="6" md="5" lg="4">
                <router-link to="/allusers">
                    <v-sheet elevation="10">
                        <v-img cover :aspect-ratio="4/3"
                            src="https://img.freepik.com/free-vector/character-illustration-people-holding-user-account-icons_53876-66068.jpg?size=626&ext=jpg&ga=GA1.1.1011591300.1695638208&semt=ais"></v-img>
                    </v-sheet>
                </router-link>
            </v-col>

        </v-row>
    </v-container>
</template>

<script>
export default {

}
</script>

<style scoped></style>