<template>
  <div class="main-w3layouts wrapper login-container">
    <div class="main-agileinfo">
      <div class="agileits-top">
        <form action="#">
          <input
            class="text email"
            type="email"
            name="email"
            placeholder="Email"
            required
            v-model="input.email"
          >
          <input
            class="text"
            type="password"
            name="password"
            placeholder="Password"
            required
            v-model="input.password"
          >
          <div class="wthree-text">
            <div class="clear"></div>
          </div>
          <input type="submit" value="Sign In" v-on:click.prevent="login()">
        </form>
        <p>
          Don't have an Account?
          <a href="/#/register">Sign Up Now!</a>
        </p>
      </div>
    </div>
    <!-- copyright -->
    <!-- <div class="colorlibcopy-agile">
			<p>© 2018 Colorlib Signup Form. All rights reserved | Design by <a href="https://colorlib.com/" target="_blank">Colorlib</a></p>
    </div>-->
    <!-- //copyright -->
  </div>
  <!-- //main -->
</template>

<script>
import TeacherService from "@/api-services/teacher.service";
import Router from '@/router';
export default {
  name: "Login",
  data() {
    return {
      input: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    login() {
      TeacherService.getByEmail(this.input.email, this.input.password)
        .then(response => {
          localStorage.setItem("token", response.data);
          Router.push({
            name: "TeacherDetails",
            params: { id: response.data.id }
          });
        })
        .catch(error => console.log(error));
    }
  }
};
</script>

<style src="@/assets/signup.css"></style>
<style>
</style>
