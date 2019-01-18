<template>
  <div style="margin-left:20em;">
    <form action class="lab-form answer-form">
      <select v-model="qId">
        <option disabled selected hidden value>Select question</option>
        <option v-for="q in questions" :key="q.id" :value="q.id">{{q.text}}</option>
      </select>
      <br>
      <br>
      <textarea rows="4" cols="30" placeholder="Type your answer here..." v-model="text"></textarea>
      <br>
      <br>
      <input class="lab-create-button" type="submit" v-on:click.prevent="submitAnswer()">
    </form>
  </div>
</template>
<script>
import StudentService from "@/api-services/student.service";
import LectureService from "@/api-services/lecture.service";
import AnswerService from "@/api-services/answer.service";
import QuestionService from "@/api-services/question.service";

export default {
  name: "StudSubjectDetails",
  data() {
    return {
      questions: {},
      qId: "",
      text: ""
    };
  },
  created() {
    QuestionService.getByCourse(this.$route.params.id)
      .then(response => (this.questions = response.data))
      .catch(error => console.log(error));
  },
  methods: {
    submitAnswer() {
      AnswerService.create({
        studentId: localStorage.getItem("token"),
        questionId: this.qId,
        text: this.text
      })
        .then(response => this.$swal("Success!", "", "success"))
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

<style src="@/assets/studentDetails.css"></style>
<style src="@/assets/teacherDetails.css"></style>