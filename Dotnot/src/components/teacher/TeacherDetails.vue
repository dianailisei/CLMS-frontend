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
      <b-col class="sidebar-left">
        <img src="@/assets/logo.png">
        <p style="color: white;">{{teacher.firstName}} {{teacher.lastName}}</p>
        <div class="sidebar-links">
          <router-link :to="{ path: '/teacher/subject/list' }" class="link-blue">View Subjects</router-link>
          <router-link :to="{ path: '/teacher/subject/add' }" class="link-red">Add Subject</router-link>
          <router-link :to="{ path: '/teacher/edit' }" class="link-green">Edit Profile</router-link>
        </div>
      </b-col>
      <b-col>
        <router-view></router-view>
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
    TeacherService.getById(localStorage.getItem("token"))
      .then(response => {
        this.teacher = response.data;
      })
      .catch(error => console.log(error));
  }
};
</script>

<style src="@/assets/teacherDetails.css"></style>