<template>
  <div>
    <b-row>
      <b-col md="2" offset-md="10">
        <a href="#">Create teacher</a>
      </b-col>
    </b-row>
    <br>
    <b-row>
      <b-col md="12">
        <div class="table-responsive">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Id</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="teacher in teachers" :key="teacher.id">
                <td>{{ teacher.firstName }}</td>
                <td>{{ teacher.lastName }}</td>
                <td> {{ teacher.id}} </td>
                <td>
                  <a :href="'/login'"><b-button variant="success">Log in</b-button></a>
                </td>
                <td>
                  <a href="#"><b-button variant="danger">Delete</b-button></a>
                </td>
                
              </tr>
            </tbody>
          </table>
        </div>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import TeacherService from "@/api-services/teacher.service";
export default {
  name: "TeacherList",
  data() {
    return {
      title: "Teachers List",
      teachers: []
    };
  },
  created() {
    TeacherService.getAll().then(response => {
      this.teachers = response.data;
    });
  },
  methods: {
    
  }
};
</script>

<style>
a, a:hover {
  font-style: none;
  color: white;
  text-decoration: none;
}
</style>