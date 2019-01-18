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
          <!-- <a class="link-red" href="#">Grades & Attendance</a> -->
          <a class="link-green" href="#">Edit Profile</a>
        </div>
      </b-col>
      <b-col><b-row>
          <router-view></router-view>
        </b-row>
        <b-row class="subjects-list-container">
          <b-col class="subjects-list" v-for="subject in subjects" :key="subject.id">
            <div class="subject-container">
              <img src="@/assets/logo.png">
              <div :id="subject.id" v-on:click="selectSubject()">{{subject.parentSubject.name}} - {{subject.name}}</div>
            </div>
          </b-col>
        </b-row>
        
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import StudentService from "@/api-services/student.service";
import LectureService from "@/api-services/lecture.service";
import AnswerService from "@/api-services/answer.service";
import QuestionService from "@/api-services/question.service";
import Router from "@/router";
export default {
  name: "StudentDetails",
  data() {
    return {
      student: {},
      subjects: {},
      answer: "",
      questions: {},
      subjectId: "",
      questionId: "",
      courseIds: []
    };
  },
  created() {
    StudentService.getById(localStorage.getItem('token')).then(
      response => {
        this.student = response.data;
      }
    );
    LectureService.getByStudentId(localStorage.getItem('token'))
      .then(response => {
        this.subjects = response.data;
        this.subjects.forEach(element => {
          this.courseIds.push(element.id);
        });
      })
      .catch(error => console.log(error));
  },
  methods: {
    submitAnswer() {
      console.log(
        this.$router.currentRoute.params.id,
        this.question.id,
        this.answer
      );
      AnswerService.create({
        studentId: this.$router.currentRoute.params.id,
        questionId: this.question.id,
        text: this.answer
      })
        .then(response => console.log(response.data))
        .catch(error => console.log(error));
    },
    selectSubject() {
      this.subjectId = event.currentTarget.id;
      localStorage.setItem("subjectId", this.subjectId);
      Router.push({
        path: `/student/subject/${this.subjectId}`
      });
    }
  }
};
</script>

<style src="@/assets/studentDetails.css"></style>
<style src="@/assets/teacherDetails.css"></style>