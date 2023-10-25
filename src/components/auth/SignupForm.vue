<template>
    <v-main>
        <v-img src="https://cdn.wallpapersafari.com/32/67/uNnmEU.jpg" cover height="100vh">
            <the-loader v-if="showLoading"></the-loader>
            <div class="d-flex justify-center align-center" style="height: 100vh;">
                <v-card min-width="350" variant="tonal" class="elevation-3" style="backdrop-filter: blur(5px);">
                    <v-card-title class="headline font-weight-bold">
                        Create Account
                    </v-card-title>
                    <v-card-text>
                        <v-form @submit.prevent="onSignup()">
                            <v-text-field v-model="name" label="Name" :rules="nameRules" validate-on="blur"
                                variant="outlined"></v-text-field>

                            <v-text-field v-model="email" label="Email" :rules="emailRules" validate-on="blur"
                                variant="outlined" class="mt-1"></v-text-field>

                            <v-text-field label="Password" type="password" v-model="password" :rules="passwordRules"
                                validate-on="blur" variant="outlined" class="mt-1"></v-text-field>

                            <v-text-field label="Confirm Password" type="password" v-model="confirmpass"
                                :rules="confirmPassRules" validate-on="blur" variant="outlined" class="mt-1"></v-text-field>

                            <div>
                                <v-btn type="submit" class="mt-1 mb-1" :disabled="!isFormValid"
                                    color="deep-purple-darken-2">Sign Up</v-btn>
                            </div>

                            <p class="d-flex justify-center mt-2 font-weight-bold">Already registered? <router-link
                                    class="ml-1 font-weight-bold" to="/login" style="color: #B39DDB;">Click here to
                                    Login</router-link></p>
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
    name: "SignupForm",
    components: {
        TheLoader,
    },
    data() {
        return {
            name: '',
            email: '',
            password: '',
            confirmpass: '',
        }
    },
    computed: {
        nameRules() {
            return [
                v => !!v || 'Name is required',
                v => v.length >= 4 || 'Name must be at least 4 characters',
            ];
        },
        emailRules() {
            return [
                v => !!v || 'Email is required',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ];
        },
        passwordRules() {
            return [
                v => !!v || 'Password is required',
                v => v.length >= 8 || 'Password must be at least 8 characters',
            ];
        },
        confirmPassRules() {
            return [
                v => !!v || 'Please confirm your password',
                v => v === this.password || 'Passwords do not match',
            ];
        },
        isFormValid() {
            return this.nameRules.every(rule => rule(this.name) === true) &&
                this.emailRules.every(rule => rule(this.email) === true) &&
                this.passwordRules.every(rule => rule(this.password) === true) &&
                this.confirmPassRules.every(rule => rule(this.confirmpass) == true);
        },
        ...mapState({
            showLoading: (state) => state.showLoading,
        }),
    },
    methods: {
        ...mapMutations({
            mutateSpinner: 'SPINNER_MUTATION',
        }),
        ...mapActions(['SIGNUP_ACTION']),
        async onSignup() {
            this.mutateSpinner(true);
            if (this.isFormValid) {
                const userData = {
                    name: this.name,
                    email: this.email,
                    password: this.password,
                };

                console.log('User Data:', userData);

                await this.SIGNUP_ACTION(userData);

                this.mutateSpinner(false);
            }
        }
    }
}
</script>

<style scoped></style>