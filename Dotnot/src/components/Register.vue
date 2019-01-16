<template>
  <div class="main-w3layouts wrapper">
    <div class="teacher-form-container register">
      <div class="agileits-top">
        <h1>Teacher</h1>
        <br>
        <form action="#">
          <input
            class="text"
            type="text"
            name="Teacher-FirstName"
            placeholder="First Name"
            required
            v-model="teacherInput.firstName"
          >
          <input
            class="text email"
            type="text"
            name="Teacher-LastName"
            placeholder="Last Name"
            required
            v-model="teacherInput.lastName"
          >
          <input
            class="text email"
            type="email"
            name="Teacher-email"
            placeholder="Email"
            required
            v-model="teacherInput.email"
          >
          <input
            class="text"
            type="password"
            name="Teacher-password"
            placeholder="Password"
            required
            v-model="teacherInput.password"
          >
          <input
            class="text w3lpass"
            type="password"
            name="Teacher-password2"
            placeholder="Confirm Password"
            required
          >
          <div class="wthree-text">
            <div class="clear"></div>
          </div>
          <input type="submit" value="SIGNUP" v-on:click.prevent="registerAsTeacher()">
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
    <div class="student-form-container register">
      <div class="agileits-top">
        <h1>Student</h1>
        <br>
        <form action="#">
          <input
            class="text"
            type="text"
            name="Student-FirstName"
            placeholder="First Name"
            required
            v-model="studentInput.firstName"
          >
          <input
            class="text email"
            type="text"
            name="Student-LastName"
            placeholder="Last Name"
            required
            v-model="studentInput.lastName"
          >
          <input
            class="text"
            type="text"
            name="Student-Group"
            placeholder="Group ex: A2"
            required
            v-model="studentInput.group"
          >
          <input
            class="text email"
            type="text"
            name="Student-Year"
            placeholder="Year"
            required
            v-model="studentInput.year"
          >
          <input
            class="text email"
            type="email"
            name="Student-email"
            placeholder="Email"
            required
            v-model="studentInput.email"
          >
          <input
            class="text"
            type="password"
            name="Student-password"
            placeholder="Password"
            required
            v-model="studentInput.password"
          >
          <input
            class="text w3lpass"
            type="password"
            name="Student-password2"
            placeholder="Confirm Password"
            required
          >
          <div class="wthree-text">
            <div class="clear"></div>
          </div>
          <input type="submit" value="SIGNUP" v-on:click.prevent="registerAsStudent()">
        </form>
        <p>
          Do you have an account already?
          <a href="/login">Login Now!</a>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import TeacherService from "@/api-services/teacher.service";
import StudentService from "@/api-services/student.service";
import Router from "@/router";

export default {
  name: "Register",
  data() {
    return {
      teacherInput: {
        firstName: "",
        lastName: "",
        email: "",
        password: ""
      },
      studentInput: {
        firstName: "",
        lastName: "",
        password: "",
        email: "",
        group: "",
        year: ""
      },
      errors: []
    };
  },

  methods: {
    registerAsTeacher() {
      TeacherService.create(this.teacherInput)
        .then(response => {
          localStorage.setItem("token", response.data);
          Router.push({
            name: "TeacherDetails",
            params: { id: response.data }
          });
        })
        .catch(error => console.log(error));
    },
    registerAsStudent() {
      StudentService.create(this.studentInput)
        .then(response => {
          Router.push({
            name: "StudentDetails",
            params: { id: response.data }
          });
        })
        .catch(error => console.log(error));
    }
  }
};
</script>

<style src="@/assets/signup.css"></style>