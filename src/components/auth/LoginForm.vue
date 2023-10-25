<template>
    <v-main>
        <v-img src="https://wallpapercave.com/wp/wp8944221.jpg" cover height="100vh">
            <the-loader v-if="showLoading"></the-loader>
            <div class="d-flex justify-center align-center" style="height: 100vh;">
                <v-card min-width="350" variant="tonal" class="elevation-3" style="backdrop-filter: blur(5px);">
                    <v-card-title class="headline  font-weight-bold">
                        Log in
                    </v-card-title>
                    <v-card-text>
                        <v-form @submit.prevent="onLogin">
                            <v-text-field v-model="email" label="Email" :rules="emailRules" validate-on="blur"
                                variant="outlined" class="mt-1"></v-text-field>

                            <v-text-field label="Password" type="password" v-model="password" :rules="passwordRules"
                                validate-on="blur" variant="outlined" class="mt-1"></v-text-field>

                            <div>
                                <v-btn type="submit" class="mt-1 mb-1" :disabled="!isFormValid"
                                    color="blue-darken-2">Login</v-btn>
                            </div>

                            <p class="d-flex justify-center mt-2 font-weight-bold">Not registered? <router-link
                                    class="ml-1 font-weight-bold" to="/register" style="color: #90CAF9;">Click here to Sign
                                    Up</router-link>
                            </p>
                        </v-form>
                    </v-card-text>
                </v-card>
            </div>
        </v-img>
    </v-main>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex';
import TheLoader from '@/components/auth/TheLoader.vue';

export default {
    name: "LoginForm",
    components: {
        TheLoader,
    },
    data() {
        return {
            email: '',
            password: '',
        }
    },
    computed: {
        emailRules() {
            return [
                v => !!v || 'Email is required',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ];
        },
        passwordRules() {
            return [
                v => !!v || 'Password is required',
            ];
        },
        isFormValid() {
            return this.emailRules.every(rule => rule(this.email) === true) &&
                this.passwordRules.every(rule => rule(this.password) === true)
        },
        ...mapState({
            showLoading: (state) => state.showLoading,
        }),
    },
    methods: {
        ...mapMutations({
            mutateSpinner: 'SPINNER_MUTATION',
        }),
        ...mapActions(['LOGIN_ACTION']),
        async onLogin() {
            this.mutateSpinner(true);
            try {
                const userData = {
                    email: this.email,
                    password: this.password,
                };

                await this.LOGIN_ACTION(userData);

                this.mutateSpinner(false);

                if (this.email === 'admin@admin.com' && this.password === 'password') {
                    this.$router.push('/admin')
                } else {
                    this.$router.push('/')
                }

            } catch (error) {
                this.mutateSpinner(false);
                console.error('Login error:', error);
            }
        }
    }
}
</script>

<style scoped></style>