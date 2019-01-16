<template>
  <b-container class="wrapper" fluid>
    <b-row class="header-login-signup">
      <b-col class="header-limiter">
        <h1>
          {DOT
          <span>!</span>}
        </h1>
        <a href="/login">Sign out</a>
      </b-col>
    </b-row>
    <b-row>
      <b-col class="sidebar-left" cols="2">
        <img src="@/assets/logo.png">
        <p style="color: white;">{{student.firstName}} {{student.lastName}}</p>
        <div class="sidebar-links">
          <a class="link-blue selected" href="#">View Subjects</a>
          <a class="link-red" href="#">Grades & Attendance</a>
          <a class="link-green" href="#">Edit Profile</a>
        </div>
      </b-col>
      <b-col>
        
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import StudentService from "@/api-services/student.service";

export default {
  name: "StudentDetails",
  data() {
    return {
      student: {}
    };
  },
  created() {
    StudentService.getById(this.$router.currentRoute.params.id).then(
      response => {
        this.student = response.data;
        console.log(this.student);
      }
    );
  }
};
</script>

<style src="@/assets/studentDetails.css"></style>