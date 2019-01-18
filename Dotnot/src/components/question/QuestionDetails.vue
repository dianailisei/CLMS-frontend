<template>
  <b-row class="laboratory-details-container">
    <h3>"{{question.text}}"</h3>
    <br>
    <br>
    <br>
    <div v-if="question.answers && question.answers.length != 0">
      <div v-for="(q,index) in question.answers" :key="q.id">
        <div :id="q.id">"{{q.text}}" - {{studentNames[index]}}</div>
        <br>
      </div>
    </div>
    <div v-else>
      <p>There are no answers.</p>
    </div>
  </b-row>
</template>

<script>
import QuestionService from "@/api-services/question.service";
import StudentService from "@/api-services/student.service";
export default {
  name: "QuestionDetails",
  data() {
    return {
      question: {},
      studentNames: []
    };
  },
  created() {
    QuestionService.getById(this.$route.params.id)
      .then(response => {
        this.question = response.data;
        this.question.answers.forEach(element => {
          StudentService.getById(element.studentId)
            .then(response => {
              console.log(
                response.data.firstName + " " + response.data.lastName
              );
              this.studentNames.push(
                response.data.firstName + " " + response.data.lastName
              );
              // console.log(this.studentNames);
            })
            .catch(error => console.log(error));
        });
      })
      .catch(error => console.log(error));
  }
};
</script>

<style src="@/assets/teacherDetails.css"></style>