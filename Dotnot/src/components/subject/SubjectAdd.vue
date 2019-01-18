<template>
  <b-row class="subject-add-container">
    <form action="#" class="subject-add-form">
      <input
        type="text"
        name="subject-name"
        placeholder="Subject Name"
        required
        v-model="subject.name"
        class="input-subject-name"
      >
      <br>
      <br>
      <select
        name="subject-year"
        placeholder="Subject Year"
        required
        v-model="subject.year"
        class="input-subject-name"
      >
        <option value hidden disabled selected>Select year</option>
        <option value="1">
          1
          <sup>st</sup> year
        </option>
        <option value="2">
          2
          <sup>nd</sup> year
        </option>
        <option value="3">
          3
          <sup>rd</sup> year
        </option>
      </select>
      <br>
      <br>
      <input type="submit" value="Add subject" v-on:click.prevent="addSubject()">
    </form>
  </b-row>
</template>

<script>
import SubjectService from "@/api-services/subject.service";
import Router from "@/router";

export default {
  name: "SubjectAdd",
  data() {
    return {
      teacher: {},
      subject: {
        name: "",
        year: ""
      }
    };
  },
  created() {
    // var btn = document.getElementById('subject-add');
    // btn.classList.add("selected");
  },
  methods: {
    addSubject() {
      SubjectService.create(localStorage.getItem("token"), this.subject)
        .then(response => {
          localStorage.setItem("subjectId", response.data);
          this.$swal("Success!", "", "success").then(
            Router.push({
              path: "/teacher/subject"
            })
          );
        })
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
