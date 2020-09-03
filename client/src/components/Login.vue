<template>
  <div class="vue-tempalte">
    <form>
      <h3>Sign In</h3>

      <div class="form-group">
        <label>Email address</label>
        <input type="email" class="form-control form-control-lg" />
      </div>

      <div class="form-group">
        <label>Password</label>
        <input type="password" class="form-control form-control-lg" />
      </div>

      <button type="submit" @click="authenticate" class="btn btn-dark btn-lg btn-block">Sign In</button>

      <p class="forgot-password mt-2 mb-4">
        <span class="float-left">
          <router-link to="/forgot-password">Sign Up ?</router-link>
        </span>
        <span class="text-right">
          <router-link to="/forgot-password">Forgot password ?</router-link>
        </span>
      </p>

      <div class="social-icons">
        <ul>
          <li class="border-0">
            <a href="#">
              <i class="btn btn-block btn-outline-info fa fa-google"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa fa-twitter"></i>
            </a>
          </li>
        </ul>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      error: null,
    };
  },
  methods: {
    authenticate () {
      this.$store.dispatch("LOGIN");

      login ()
      {

    }
    }
  },
};
</script>