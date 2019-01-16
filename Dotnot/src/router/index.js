import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import TeacherList from '@/components/teacher/TeacherList'
import TeacherDetails from '@/components/teacher/TeacherDetails'
import StudentDetails from '@/components/student/StudentDetails'
import Login from '@/components/Login'
import Register from '@/components/Register'
import SubjectList from '@/components/subject/SubjectList'
import SubjectAdd from '@/components/subject/SubjectAdd'
import TeacherEdit from '@/components/teacher/TeacherEdit'
import SubjectDetails from '@/components/subject/SubjectDetails'
import LaboratoryDetails from '@/components/laboratory/LaboratoryDetails'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Register',
      component: Register
    },
    {
      path: '/teacher/list',
      name: 'TeacherList',
      component: TeacherList
    },
    {
      path: '/teacher',
      name: 'TeacherDetails',
      component: TeacherDetails,
      children: [
        {
          path: 'subject/list',
          component: SubjectList
        },
        {
          path: 'subject/add',
          component: SubjectAdd
        },
        {
          path: 'edit',
          component: TeacherEdit
        },
        {
          path: 'subject',
          component: SubjectDetails,
          children: [
            {
              path: 'laboratory/:id',
              component: LaboratoryDetails
            }
          ]
        }
      ]
    },

    {
      path: '/student/:id',
      name: 'StudentDetails',
      component: StudentDetails
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    // {
    //   path: '/register',
    //   name: 'Register',
    //   component: Register
    // }
  ],
  mode: 'history'
})
