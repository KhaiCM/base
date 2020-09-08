<template>
  <div class="vue-tempalte">
    {{ info }}
    <form name="form" @submit.prevent="login">
      <h3>Sign In</h3>

      <div class="form-group">
        <label>Email address</label>
        <input type="email" v-model="user.email" class="form-control form-control-lg" />
      </div>
      <div
        v-if="errors && errors.has('email')"
        class="alert alert-danger"
        role="alert"
      >Email Is required</div>

      <div class="form-group">
        <label>Password</label>
        <input type="password" v-model="user.password" class="form-control form-control-lg" />
      </div>
      <div
        v-if="errors && errors.has('password')"
        class="alert alert-danger"
        role="alert"
      >Password Is required</div>

      <div class="form-group">
        <button type="submit" class="btn btn-primary btn-lg btn-block" :disabled="loading">
          <span v-show="loading" class="spinner-border spinner-border-sm"></span>
          <span>Login</span>
        </button>
      </div>
      <div class="form-group">
        <div v-if="message" class="alert alert-danger" role="alert">{{ message }}</div>
      </div>

      <p class="forgot-password text-right mt-2 mb-4">
        <router-link to="/forgot-password">Forgot password ?</router-link>
      </p>
    </form>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
      message: "",
      loading: false,
      info: null,
    };
  },
  computed: {
    ...mapState({
      errors: (state) => state.auth.errors,
    }),
  },
  methods: {
    login() {
      this.loading = true;
      if (this.user.email !== "" && this.user.password !== "") {
        this.$store.dispatch("auth/login", this.user).then(() => {
          this.$router.push("/user");
        }),
          (error) => {
            this.loading = false;
            this.message =
              (error.response && error.response.data) ||
              error.message ||
              error.toString();
          };
      }
    },
  },
};
</script>
