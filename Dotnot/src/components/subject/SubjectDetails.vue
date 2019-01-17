<template>
  <b-row class="subject-details-container">
    <form action="#" class="subject-update-form">
      <h2>Update Details</h2>
      <br>
      <p>Name</p>
      <input
        type="text"
        name="subject-name"
        :placeholder="subject.name"
        required
        v-model="subject.name"
        class="input-subject-name"
      >
      <br>
      <br>
      <p>Year</p>
      <input
        type="text"
        name="subject-year"
        :placeholder="subject.year"
        required
        v-model="subject.year"
        class="input-subject-name"
      >
      <br>
      <br>
      <p>Head of Department</p>
      <input
        type="text"
        name="subject-HoD-lastName"
        :placeholder="HoD.name"
        v-model="HoD.name"
        class="input-subject-name"
        readonly
      >
      <br>
      <br>
      <input
        type="submit"
        value="Update subject"
        class="subject-update-button"
        v-on:click.prevent="updateSubject()"
      >
    </form>
    <div class="subject-laboratories-container">
      <h2>Laboratories</h2>
      <div class="lab-wrapper" v-if="subject.laboratories && subject.laboratories.length != 0">
        <div class="laboratories-list">
          <div
            class="laboratory-container"
            v-for="laboratory in subject.laboratories"
            :key="laboratory.id"
          >
            <img src="@/assets/logo.png">
            <div
              :id="laboratory.id"
              v-on:click.prevent="selectLaboratory()"
            >{{laboratory.name}} - {{laboratory.group}}</div>
          </div>
        </div>
      </div>
      <div v-else>
        <p>There are no laboratories for this subject.</p>
      </div>
    </div>
    <div class="subject-courses-container">
      <h2>Courses</h2>
      <div class="lab-wrapper" v-if="subject.lectures && subject.lectures.length != 0">
        <div class="lectures-list">
          <div class="lecture-container" v-for="lecture in subject.lectures" :key="lecture.id">
            <img src="@/assets/logo.png">
            <div
              :id="lecture.id"
              v-on:click="selectLecture()"
            >{{lecture.name}} - {{lecture.halfYear}}</div>
          </div>
        </div>
      </div>
      <div v-else>
        <p>There are no lectures for this subject.</p>
      </div>
    </div>
    <div class="buttons-wrapper">
      <div class="laboratories-list-btn">
        <div class="laboratory-container">
          <img src="@/assets/plus.png">
          <div v-on:click.prevent="addLaboratory()">Add Laboratory</div>
        </div>
      </div>
      <div class="laboratories-list-btn lecture-btn">
        <div class="laboratory-container">
          <img src="@/assets/plus.png">
          <div v-on:click.prevent="addLecture()">Add Lecture</div>
        </div>
      </div><br><br><br><br><br><br><br><br><br><br><br><br><br>
      <input
        type="submit"
        value="Delete subject"
        class="subject-delete-button"
        v-on:click.prevent="deleteSubject()"
      >
    </div>
  </b-row>
</template>

<script>
import SubjectService from "@/api-services/subject.service";
import LaboratoryService from "@/api-services/laboratory.service";
import Router from "@/router";

export default {
  name: "SubjectDetails",
  data() {
    return {
      subject: {},
      HoD: {
        name: ""
      }
    };
  },
  created() {
    SubjectService.getById(localStorage.getItem("subjectId"))
      .then(response => {
        console.log(response.data);
        this.subject = response.data;
        this.HoD.name =
          this.subject.headOfDepartment.firstName +
          " " +
          this.subject.headOfDepartment.lastName;
      })
      .catch(error => console.log(error));
  },
  methods: {
    updateSubject() {
      SubjectService.update(localStorage.getItem("subjectId"), this.subject)
        .then(response => {
          Router.push({
            path: "/teacher/subject"
          });
        })
        .catch(error => console.log(error));
    },
    deleteSubject() {
      SubjectService.delete(localStorage.getItem("subjectId"))
        .then(response => {
          Router.push({
            path: "/teacher/subject/list"
          });
        })
        .catch(error => console.log(error));
    },
    selectLecture() {
      var labId = event.target.id;
      Router.push({
        path: `subject/lecture/${labId}`,
        params: {
          lectureId: labId
        }
      });
    },
    selectLaboratory() {
      var labId = event.target.id;
      Router.push({
        path: `subject/laboratory/${labId}`,
        params: {
          laboratoryId: labId
        }
      });
    },
    addLaboratory() {
      Router.push({
        path: "subject/laboratory"
      });
    },
    addLecture() {
      Router.push({
        path: "subject/lecture"
      });
    }
  }
};
</script>

<style src="@/assets/teacherDetails.css"></style>