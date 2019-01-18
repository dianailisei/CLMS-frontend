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
      <textarea rows="4" cols="50" v-model="question.text"></textarea>
      <br>
      <br>
      <input
        type="text"
        class="input-laboratory-form"
        v-model="question.points"
        placeholder="No. of points"
      >
      <br>
      <br>
      <input
        type="text"
        class="input-laboratory-form"
        v-model="question.time"
        placeholder="Time for submitting answers"
      >
      <br>
      <br>
      <input
        type="submit"
        value="Add Question"
        class="laboratory-update-button"
        v-on:click.prevent="addQuestion()"
      >
    </div>
    <div class="questions-container">
      <h2>Questions</h2>
      <div class="myBox questions" v-if="questions && questions.length != 0">
        <div v-for="q in questions" :key="q.id">
          <div
            style="font-size: 14px;"
            v-on:click.prevent="toggleOption()"
            v-on:dblclick.prevent="viewQuestion()"
            :id="q.id"
          >"{{q.text}}" - {{q.points}} points</div>
        </div>
      </div>
      <div v-else>
        <p>There are no questions.</p>
      </div>
    </div>
  </b-row>
</template>

<script>
import LectureService from "@/api-services/lecture.service";
import StudentService from "@/api-services/student.service";
import QuestionService from "@/api-services/question.service";
import Router from "@/router";

export default {
  name: "LectureDetails",
  data() {
    return {
      laboratory: {},
      lecturer: "",
      question: {
        text: "",
        points: "",
        time: ""
      },
      questions: []
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

    QuestionService.getByCourse(this.$route.params.id)
      .then(response => (this.questions = response.data))
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
          this.$swal("Success!", "", "success").then(
            Router.push({
              path: `/teacher/subject/lecture/${this.laboratory.id}`
            })
          );
        })
        .catch(error => this.$swal(
            "Error!",
            "An error has occured. Please try again",
            "danger"
          ));
    },
    addQuestion() {
      QuestionService.create({
        teacherId: localStorage.getItem("token"),
        courseId: this.$route.params.id,
        duration: this.question.time,
        points: this.question.points,
        text: this.question.text
      })
        .then(response =>
          Router.push({
            path: `/teacher/subject/lecture/${this.$route.params.id}`
          })
        )
        .catch(error => console.log(error));
    },
    toggleOption() {
      var div = event.target;
      if (div.className == "") {
        div.className = "selected-option";
        localStorage.setItem("sessionId", div.id);
      } else {
        div.classList.remove("selected-option");
      }
    },
    viewQuestion() {
      let questionId = event.target.id;
      Router.push({
        path: `/teacher/subject/lecture/question/${questionId}`,
        params: {
          questionId: questionId
        }
      });
    }
  }
};
</script>

<style src="@/assets/teacherDetails.css"></style>