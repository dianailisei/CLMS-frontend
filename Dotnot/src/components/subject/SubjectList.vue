<template>
  <b-row class="subjects-list-container">
    <!-- <h1>Subject list</h1> -->
    <b-col class="subjects-list" v-for="subject in subjects" :key="subject.id">
      <div class="subject-container">
        <img src="@/assets/logo.png">
        <div :id="subject.id" v-on:click="selectSubject()">{{subject.name}}</div>
      </div>
    </b-col>
  </b-row>
</template>
<script>
import TeacherService from "@/api-services/teacher.service";
import SubjectService from "@/api-services/subject.service";
import Router from "@/router";

export default {
  name: "SubjectList",
  data() {
    return {
      subjects: {}
    };
  },
  created() {
    // var btn = document.getElementById('subject-list');
    // btn.classList.add("selected");
    SubjectService.getByTeacher(localStorage.getItem("token"))
      .then(response => {
        this.subjects = response.data;
        // console.log(this.subjects);
      })
      .catch(error => console.log(error));
  },
  methods: {
    selectSubject() {
      this.subjectId = event.currentTarget.id;
      localStorage.setItem("subjectId", this.subjectId);
      Router.push({
            path: "/teacher/subject"
          });
    }
  }
};
</script>

<style src="@/assets/teacherDetails.css"></style>
