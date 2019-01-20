import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const jianli = () => import('@/components/jianli');
const PartOne = () => import('@/components/part01');
const PartTwo = () => import('@/components/part02');
const PartThree = () => import('@/components/part03');
const PartFour = () => import('@/components/part04');
const PartFive = () => import('@/components/part05');
const PartSix = () => import('@/components/part06');

export default new Router({
  routes: [
    {
      path: '/',
      components:{
        PartOne: PartOne,
        PartTwo: PartTwo,
        PartThree: PartThree,
        PartFour: PartFour,
        PartFive: PartFive,
        PartSix: PartSix,
      } ,  
    },
    // {
    //   path: '/',
    //   components:{
    //     jianli:jianli, 
    //   },
    //   children:[
    //     {path: 'PartOne',
    //     name: 'PartOne',
    //     component: {PartOne:PartOne}}
    //   ]
    // },
    {
      path: '/PartOne',
      name: 'PartOne',
      component: PartOne
    },
    {
      path: '/PartTwo',
      name: 'PartTwo',
      component: PartTwo
    },
    {
      path: '/PartThree',
      name: 'PartThree',
      component: PartThree
    },
    {
      path: '/PartFour',
      name: 'PartFour',
      component: PartFour
    },
    {
      path: '/PartFive',
      name: 'PartFive',
      component: PartFive
    },
    {
      path: '/PartSix',
      name: 'PartSix',
      component: PartSix
    },
  ]
})
