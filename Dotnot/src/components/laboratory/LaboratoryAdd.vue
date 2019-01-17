<template>
  <b-row class="lab-create-container">
    <form action="#" class="lab-form">
      <h2>Add Laboratory</h2>
      <br>
      <p>Location</p>
      <input type="text" name="lab-name" required v-model="lab.name" class="input-lab-name">

      <p>Group</p>
      <input type="text" name="lab-group" required v-model="lab.group" class="input-lab-name">

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
        value="Create Laboratory"
        class="lab-create-button"
        v-on:click.prevent="createLaboratory()"
      >
    </form>
  </b-row>
</template>
<script>
import LaboratoryService from "@/api-services/laboratory.service";
import Router from "@/router";

export default {
  name: "LaboratoryAdd",
  data() {
    return {
      lab: {
        name: "",
        weekday: "",
        group: "",
        startHour: "",
        endHour: ""
      }
    };
  },
  methods: {
    createLaboratory() {
      LaboratoryService.create(
        localStorage.getItem("subjectId"),
        localStorage.getItem("token"),
        this.lab
      )
        .then(response =>
          Router.push({
            path: "/teacher/subject"
          })
        )
        .catch(error => console.log(error));
    }
  }
};
</script>

<style src="@/assets/teacherDetails.css"></style>