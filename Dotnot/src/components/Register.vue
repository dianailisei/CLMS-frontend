<template>
  <div class="main-w3layouts wrapper">
    <div class="main-agileinfo">
      <div class="agileits-top">
        <form action="#">
          <input
            class="text"
            type="text"
            name="FirstName"
            placeholder="First Name"
            required
            v-model="input.firstName"
          >
          <input
            class="text email"
            type="text"
            name="LastName"
            placeholder="Last Name"
            required
            v-model="input.lastName"
          >
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
          <input
            class="text w3lpass"
            type="password"
            name="password2"
            placeholder="Confirm Password"
            required
          >
          <div class="wthree-text">
            <div class="clear"></div>
          </div>
          <input type="submit" value="SIGNUP" v-on:click.prevent="register()">
        </form>
        <p>
          Do you have an account already?
          <a href="/login">Login Now!</a>
        </p>
      </div>
    </div>
    <!-- copyright -->
    <!-- <div class="colorlibcopy-agile">
      <p>© 2018 Colorlib Signup Form. All rights reserved | Design by
        <a href="https://colorlib.com/" target="_blank">Colorlib</a>
      </p>
    </div>-->
    <!-- //copyright -->
  </div>
</template>
<script>
import TeacherService from "@/api-services/teacher.service";
import Router from "@/router";

export default {
  name: "Register",
  data() {
    return {
      input: {
        firstName: "",
        lastName: "",
        email: "",
        password: ""
      },
      errors: []
    };
  },

  methods: {
    register() {
      TeacherService.create(this.input)
        .then(response => {
          localStorage.setItem("token", response.data);
          Router.push({
            name: "TeacherDetails",
            params: { id: response.data }
          });
        })
        .catch(error => console.log(error));
    }
  }
};
</script>

<style src="@/assets/signup.css"></style>