<template>
  <div class="vue-tempalte">
    <ValidationObserver ref="form" v-slot="{ invalid }">
            <form v-on:submit.prevent="signIn(user.email,user.password)">

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
                        <input id="login" type="text" class="form-control form-control-lg" v-model="user.email"/>
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
                      <input id="password" type="password" class="form-control form-control-lg" v-model="user.password"/>
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
                    <button :disabled="invalid"
                        class="btn btn-primary btn-lg btn-block"
                        type="submit"
                        variant="primary">
                        <span>Login</span>
                    </button>
                </div>
                <p class="forgot-password text-right mt-2 mb-4">
                  <router-link to="/forgot-password">Forgot password ?</router-link>
                </p>
            </form>
        </ValidationObserver>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import {ValidationObserver, ValidationProvider} from "vee-validate";
export default {
  components: {
      ValidationObserver,
      ValidationProvider
  },
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
    };
  },
  computed: {
    ...mapGetters("auth", {
      loginErrors: "getLoginErrors"
    })
  },
  methods: {
    login() {
        this.$store.dispatch("auth/login", this.user)
        .then(() => {
          this.$router.push({name: "profile"});
        })
    }
  }
};
</script>
