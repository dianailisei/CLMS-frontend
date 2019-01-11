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
        <p style="color: white;">{{ teacher.firstName}} {{teacher.lastName }}</p>
        <div class="sidebar-links">
          <a class="link-blue selected" href="#">View Subjects</a>
          <a class="link-red" href="#">Add Subject</a>
          <a class="link-green" href="#">Edit Profile</a>
        </div>
      </b-col>
      <b-col>
        <b-row class="subjects-list-container">
          <b-col class="subjects-list"  v-for="subject in teacher.subjects" :key="subject">
            <div class="subject-container">
              <img src="@/assets/logo.png">
              <p>{{subject.name}}</p>
            </div>
          </b-col>
          
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import TeacherService from "@/api-services/teacher.service";

export default {
  name: "TeacherDetails",
  data() {
    return {
      teacher: {}
    };
  },
  created() {
    TeacherService.getById(this.$router.currentRoute.params.id).then(
      response => {
        this.teacher = response.data;
        console.log(this.teacher);
      }
    );
  }
};
</script>

<style src="@/assets/teacherDetails.css"></style>