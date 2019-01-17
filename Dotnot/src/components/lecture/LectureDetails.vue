<template>
  <b-row class="laboratory-details-container">
    <form action class="laboratory-update-form">
      <h2>Update Details</h2>
      <br>
      <p>Location</p>
      <input
        type="text"
        name="laboratory-name"
        :placeholder="laboratory.name"
        required
        v-model="laboratory.name"
        class="input-laboratory-form"
      >
      <br>
      <p>Half Year</p>
      <input
        type="text"
        name="laboratory-halfYear"
        :placeholder="laboratory.halfYear"
        required
        v-model="laboratory.halfYear"
        class="input-laboratory-form"
      >
      <br>
      <p>Weekday</p>
      <input
        type="text"
        name="laboratory-weekday"
        :placeholder="laboratory.weekday"
        required
        v-model="laboratory.weekday"
        class="input-laboratory-form"
      >
      <br>
      <p>Start hour</p>
      <input
        type="text"
        name="laboratory-startHour"
        :placeholder="laboratory.startHour"
        required
        v-model="laboratory.startHour"
        class="input-laboratory-form"
      >
      <br>
      <p>End hour</p>
      <input
        type="text"
        name="laboratory-endHour"
        :placeholder="laboratory.endHour"
        required
        v-model="laboratory.endHour"
        class="input-laboratory-form"
      >
      <br>
      <p>Teacher</p>
      <input
        type="text"
        name="laboratory-lecturer"
        :placeholder="lecturer"
        readonly
        v-model="lecturer"
        class="input-laboratory-form"
      >
      <br>
      <input
        type="submit"
        value="Update laboratory"
        class="laboratory-update-button"
        v-on:click.prevent="updateLecture()"
      >
    </form>
    <div class="add-question">
      <h2>Add Question</h2>
      <textarea rows="4" cols="50"></textarea>
      <br>
      <br>
      <input
        type="submit"
        value="Add Question"
        class="laboratory-update-button"
        v-on:click.prevent="addQuestion()"
      >
    </div>
    <div class="add-session-container"></div>
  </b-row>
</template>

<script>
import LectureService from "@/api-services/lecture.service";
import StudentService from "@/api-services/student.service";
import Router from "@/router";

export default {
  name: "LectureDetails",
  data() {
    return {
      laboratory: {},
      lecturer: ""
    };
  },
  created() {
    LectureService.getById(this.$route.params.id)
      .then(response => {
        this.laboratory = response.data;
        this.lecturer =
          this.laboratory.lecturer.firstName +
          " " +
          this.laboratory.lecturer.lastName;
      })
      .catch(error => console.log(error));
  },
  methods: {
    updateLecture() {
      LectureService.update(
        localStorage.getItem("token"),
        this.laboratory.id,
        this.laboratory
      )
        .then(response => {
          Router.push({
            path: `/teacher/subject/lecture/${this.laboratory.id}`
          });
        })
        .catch(error => console.log(error));
    },
    addQuestion() {
      console.log("aici");
    }
  }
};
</script>

<style src="@/assets/teacherDetails.css"></style>