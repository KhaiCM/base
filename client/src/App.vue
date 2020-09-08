<template>
  <div class="vue-tempalte">
    <!-- Main -->
    <div class="App">
      <nav class="navbar navbar-expand navbar-dark bg-dark">
        <router-link to="user" class="navbar-brand">Base Vue</router-link>

        <div class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link to="/register" class="nav-link">Sign Up</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/login" class="nav-link">Sign In</router-link>
          </li>
        </div>

        <div class="navbar-nav ml-auto">
          <b-nav>
            <b-nav-item-dropdown class="navbar-dark bg-dark" right>
              <template slot="button-content">Avatar</template>
              <b-dropdown-item>khaiCM</b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item>Log Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-nav>
        </div>
      </nav>
      <div class="vertical-center">
        <div class="inner-block">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
</style>
