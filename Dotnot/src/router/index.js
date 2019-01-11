import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import TeacherList from '@/components/teacher/TeacherList'
import TeacherDetails from '@/components/teacher/TeacherDetails'
import Login from '@/components/Login'
import Register from '@/components/Register'

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
      path: '/teacher/:id',
      name: 'TeacherDetails',
      component: TeacherDetails
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    }
  ],
  mode: 'history'
})
