import Vue from 'vue'
import Router from 'vue-router'
import Content1 from '@/components/Content1'
import HelloWord from '@/components/HelloWord'
import Content2 from '@/components/Content2'
Vue.use(Router)

export default new Router({
  routes: [
    {path:'/', component:HelloWord,
     children: [  
        {  
          path:'foo1',  
          name:'foo1',  
          component: Content1  
        },
       {path:'foo2/:num', component: Content2}
     ]
    }
   
  ]
})
