<template>
  <b-row class="lab-create-container">
    <form action="#" class="lab-form">
      <h2>Add Course</h2>
      <br>
      <p>Location</p>
      <input type="text" name="lab-name" required v-model="lab.name" class="input-lab-name">

      <p>Half Year</p>
      <input type="text" name="lab-halfYear" required v-model="lab.halfYear" class="input-lab-name">

      <p>Weekday</p>
      <input type="text" name="lab.weekday" v-model="lab.weekday" class="input-lab-name">

      <p>Start Hour</p>
      <input type="text" name="lab.startHour" v-model="lab.startHour" class="input-lab-name">

      <p>End Hour</p>
      <input type="text" name="lab.endHour" v-model="lab.endHour" class="input-lab-name">
      <br>
      <br>
      <input
        type="submit"
        value="Create Lecture"
        class="lab-create-button"
        v-on:click.prevent="createLecture()"
      >
    </form>
  </b-row>
</template>
<script>
import LectureService from "@/api-services/lecture.service";
import Router from "@/router";
export default {
  name: "LectureAdd",
  data() {
    return {
      lab: {
        name: "",
        weekday: "",
        halfYear: "",
        startHour: "",
        endHour: ""
      }
    };
  },
  methods: {
    createLecture() {
      // console.log(localStorage.getItem("token"), localStorage.getItem("subjectId"));
      LectureService.create(
        localStorage.getItem("token"),
        localStorage.getItem("subjectId"),
        this.lab
      )
        .then(response =>
          this.$swal("Success!", "", "success").then(
            Router.push({
              path: "/teacher/subject"
            })
          )
        )
        .catch(error =>
          this.$swal(
            "Error!",
            "An error has occured. Please try again",
            "warning"
          )
        );
    }
  }
};
</script>

<style src="@/assets/teacherDetails.css"></style>
