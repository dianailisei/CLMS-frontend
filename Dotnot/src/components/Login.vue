<template>
  <div class="main-w3layouts wrapper login-container">
    <div class="teacher-form-container">
      <div class="agileits-top">
        <form action="#">
          <input
            class="text email"
            type="email"
            name="teacher-email"
            placeholder="Email"
            required
            v-model="teacherInput.email"
          >
          <input
            class="text"
            type="password"
            name="teacher-password"
            placeholder="Password"
            required
            v-model="teacherInput.password"
          >
          <div class="wthree-text">
            <div class="clear"></div>
          </div>
          <input type="submit" value="Sign in as teacher" v-on:click.prevent="loginAsTeacher()">
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
    <div class="student-form-container">
      <div class="agileits-top">
        <form action="#">
          <input
            class="text email"
            type="email"
            name="student-email"
            placeholder="Email"
            required
            v-model="studentInput.email"
          >
          <input
            class="text"
            type="password"
            name="student-password"
            placeholder="Password"
            required
            v-model="studentInput.password"
          >
          <div class="wthree-text">
            <div class="clear"></div>
          </div>
          <input type="submit" value="Sign in as student" v-on:click.prevent="loginAsStudent()">
        </form>
        <p>
          Don't have an Account?
          <a href="/#/register">Sign Up Now!</a>
        </p>
      </div>
    </div>
  </div>
  <!-- //main -->
</template>

<script>
import TeacherService from "@/api-services/teacher.service";
import StudentService from "@/api-services/student.service";
import Router from "@/router";
export default {
  name: "Login",
  data() {
    return {
      teacherInput: {
        email: "",
        password: ""
      },
      studentInput: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    loginAsTeacher() {
      TeacherService.getByEmail(
        this.teacherInput.email,
        this.teacherInput.password
      )
        .then(response => {
          localStorage.setItem("token", response.data.id);
          Router.push({
            name: "TeacherDetails"
          });
        })
        .catch(error => console.log(error));
    },
    loginAsStudent() {
      StudentService.getByEmail(
        this.studentInput.email,
        this.studentInput.password
      )
        .then(response => {
          localStorage.setItem("token", response.data);
          Router.push({
            name: "StudentDetails"
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
