<template>
    <v-card min-width="400">
        <v-card-title class="headline">
            Sign Up
        </v-card-title>
        <v-card-text>
            <v-form @submit.prevent="signupForm">
                <v-text-field v-model="name" label="Name" :rules="nameRules" validate-on="blur"></v-text-field>

                <v-text-field v-model="email" label="Email" :rules="emailRules" validate-on="blur"></v-text-field>

                <v-text-field label="Password" type="password" v-model="password" :rules="passwordRules"
                    validate-on="blur"></v-text-field>

                <v-text-field label="Confirm Password" type="password" v-model="confirmpass" :rules="confirmPassRules"
                    validate-on="blur"></v-text-field>

                <v-btn type="submit" class="mt-1 mb-1" :disabled="!isFormValid" color="indigo">Submit</v-btn>

                <p class="mt-2">Already registered? <router-link to="/loginview">Click here to Login</router-link></p>
            </v-form>
        </v-card-text>
    </v-card>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: "SignupForm",
    data: () => ({
        name: '',
        email: '',
        password: '',
        confirmpass: '',
    }),
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
        }
    },
    methods: {
        ...mapActions(['registerUser']),
        async signupForm() {
            let result = await this.registerUser({
                name: this.name,
                email: this.email,
                password: this.password,
            })
            if (result.status == 201) {
                this.$router.push('/loginview');
            }
            else {
                console.error('API Error:', result);
            }
        }
    }
}
</script>

<style scoped>
.v-card {
    margin: auto;
}
</style>