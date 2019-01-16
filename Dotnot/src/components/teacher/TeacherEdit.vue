<template>
  <b-row class="subjects-list-container">
    <h1>Edit profile</h1>
    <!-- <b-col class="subjects-list" v-for="subject in teacher.subjects" :key="subject.id">
            <div class="subject-container">
              <img src="@/assets/logo.png">
              <p>{{subject.name}}</p>
            </div>
    </b-col>-->
  </b-row>
</template>

<script>
import TeacherService from "@/api-services/teacher.service";

export default {
  name: "SubjectAdd",
  data() {
    return {
      teacher: {}
    };
  },
  created() {
    // var btn = document.getElementById('edit-profile');
    // btn.classList.add("selected");
    //    TeacherService.getById(localStorage.getItem("token"))
    //       .then(response => {
    //         this.teacher = response.data;
    //         console.log(this.teacher);
    //       })
    //       .catch(error => console.log(error));
  }
};
</script>

<style src="@/assets/teacherDetails.css"></style>