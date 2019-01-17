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
      <p>Group</p>
      <input
        type="text"
        name="laboratory-group"
        :placeholder="laboratory.group"
        required
        v-model="laboratory.group"
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
        name="laboratory-teacher"
        :placeholder="teacher"
        readonly
        v-model="teacher"
        class="input-laboratory-form"
      >
      <br>
      <input
        type="submit"
        value="Update laboratory"
        class="laboratory-update-button"
        v-on:click.prevent="updateLaboratory()"
      >
    </form>
    <div class="active-sessions-container">
      <h2>Sessions</h2>
      <div class="myBox active-sessions">
        <div v-for="s in sessions" :key="s.id">
          <div :id="s.id" v-on:click.prevent="toggleOption()">{{s.day}}</div>
        </div>
      </div>
      <input
        type="submit"
        value="View session"
        class="view-session"
        v-on:click.prevent="viewSession()"
      >
    </div>
    <div class="add-session-container">
      <h2>Add new session</h2>
      <form action class="laboratory-update-form">
        <p>Time for subscription (in minutes)</p>
        <input type="text" placeholder="ex: 120" v-model="session.time">
        <br>
        <input
          type="submit"
          value="Add Session"
          class="add-session"
          v-on:click.prevent="addSession()"
        >
      </form>
      <div v-if="confirmationCode && confirmationCode!='' ">
        <p>Confirmation code: {{confirmationCode}}</p>
      </div>
    </div>
  </b-row>
</template>

<script>
import LaboratoryService from "@/api-services/laboratory.service";
import SessionService from "@/api-services/session.service";
import StudentService from "@/api-services/student.service";
import Router from "@/router";

export default {
  name: "LaboratoryDetails",
  data() {
    return {
      laboratory: {},
      teacher: "",
      session: {
        time: ""
      },
      confirmationCode: "",
      sessions: {},
      message: ""
    };
  },
  created() {
    LaboratoryService.getById(this.$route.params.id)
      .then(response => {
        this.laboratory = response.data;
        this.teacher =
          this.laboratory.teacher.firstName +
          " " +
          this.laboratory.teacher.lastName;
      })
      .catch(error => console.log(error));

    SessionService.getByLabId(this.$route.params.id)
      .then(response => {
        this.sessions = response.data;
        this.sessions.forEach(s => {
          var dt = new Date(Date.parse(s.startDate));
          s.day =
            dt.getFullYear() + "/" + (dt.getMonth() + 1) + "/" + dt.getDate();
        });
        var scrollbox = document.getElementsByClassName("active-sessions");
        console.log(scrollbox);
        scrollbox[0].addEventListener("click", e => {
          e.preventDefault();
        });
      })
      .catch(error => console.log(error));
  },
  methods: {
    updateLaboratory() {
      LaboratoryService.update(
        localStorage.getItem("token"),
        this.laboratory.id,
        this.laboratory
      )
        .then(response => {
          Router.push({
            path: `/teacher/subject/laboratory/${laboratory.id}`
          });
        })
        .catch(error => console.log(error));
    },
    addSession() {
      SessionService.create({
        laboratoryId: this.laboratory.id,
        duration: this.session.time
      })
        .then(response => {
          console.log(response.data);
          //adaugare la sesiuni active
          this.confirmationCode = response.data.confirmationCode;
        })
        .catch(error => console.log(error));
    },
    viewSession() {
      var presences, students;
      SessionService.getById(localStorage.getItem("sessionId"))
        .then(response => {
          this.presences = response.data.presences;
          // console.log(this.presences);
          for (let i = 0; i < this.presences.length; i++) {
            StudentService.getById(this.presences[i].studentId).then(resp => {
              console.log(resp.data);
              this.message +=
                resp.data.firstName + " " + resp.data.lastName + "\n";
            });
          }
        })
        .catch(error => console.log(error));
        setTimeout(() => alert(this.message), 4000);
    },
    exampleFilter(elem) {
      switch (elem.nodeName.toUpperCase()) {
        case "DIV":
          return true;
        case "SPAN":
          return true;
        default:
          return false;
      }
    },
    getAllSiblings(elem, filter) {
      var sibs = [];
      elem = elem.parentNode.firstChild;
      do {
        if (elem.nodeType === 3) continue; // text node
        if (!filter || filter(elem)) sibs.push(elem);
      } while ((elem = elem.nextSibling));
      return sibs;
    },
    toggleOption() {
      var div = event.target;
      if (div.className == "") {
        div.className = "selected-option";
        localStorage.setItem("sessionId", div.id);
      } else {
        div.classList.remove("selected-option");
      }
    }
  }
};
</script>

<style src="@/assets/teacherDetails.css"></style>