import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Sudoku from "@/components/Sudoku"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "Sudoku",
      component: Sudoku
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
