<template>
    <div id="loginForm" class="pt-5">
        <ValidationObserver ref="form" v-slot="{ invalid }">
            <b-form v-on:submit.prevent="signIn(form.identity,form.password)"
                    class="mx-auto justify-content-center w-50 ">

                <b-form-group id="loginErrors" class="errorsBlock"
                              v-show="loginErrors.length > 0">
                    <ul v-for="error in loginErrors">
                        <li>
                            {{ error.message }}
                        </li>
                    </ul>
                </b-form-group>


                <div class="form-group">
                    <label>Email address</label>
                    <ValidationProvider placeholder="Login"
                                        name="Email"
                                        rules="required|email|min:3|max:254"
                                        v-slot="{ errors }">
                        <input id="login" type="text" class="form-control form-control-lg" v-model="form.identity"/>
                        <div class="text-danger">
                            <template v-show="errors.length > 0">
                                <span class="help is-danger">
                                    {{ errors[0] }}
                                </span>
                            </template>
                        </div>
                    </ValidationProvider>
                </div>

                <div class="form-group">
                    <label>Password</label>
                    <ValidationProvider name="Password"
                                        rules="required|min:8|max:30"
                                        v-slot="{ errors }">
                        <input id="password" type="password" class="form-control form-control-lg" v-model="form.password"/>
                        <div class="text-danger">
                            <template v-show="errors.length > 0">
                                <span class="help is-danger">
                                    {{ errors[0] }}
                                </span>
                            </template>
                        </div>
                    </ValidationProvider>
                </div>

                <div class="text-center">
                    <button :disabled="invalid"
                        class="btn btn-primary btn-lg btn-block"
                        type="submit"
                        variant="primary">
                        <span>Login</span>Sign-in
                    </button>
                </div>
            </b-form>
        </ValidationObserver>
    </div>
</template>
<script>
    import {ValidationObserver, ValidationProvider} from "vee-validate";

    export default {
        components: {
            ValidationObserver,
            ValidationProvider
        },
        data() {
            return {
                form: {
                    identity: '',
                    password: ''
                },
                loginErrors: ''
            }
        },
        // computed: {
        //     ...mapGetters("auth", {
        //         loginErrors: "getLoginErrors"
        //     })
        // },
        methods: {
            signIn() {

                // this.$store
                //     .dispatch("auth/login", {
                //         login: this.form.identity,
                //         password: this.form.password
                //     })
                //     .then(() => this.$router.push({name: "home"}));
            }
        }
    }
</script>
<style>

</style>
