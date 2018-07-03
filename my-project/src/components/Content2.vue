<template>
<div>
   <p>餐馆名称：{{resturantName}}</p>
   <button class="btn" @click="clickfnB('B餐厅')">B修改餐厅名</button>
   {{msg}}
</div>
</template>

<script>
import {mapActions,mapGetters} from 'vuex'
export default {
  name: 'Content',
  data () {
    return {
      msg: '内容2',
      msg1:""
    }
  },
  methods:{
 	...mapActions(['clickfnB'])
 },
  computed:{
    ...mapGetters(['resturantName'])
  },
 mounted(){
 	console.log(this.$route.params.num)
 }
}
</script>

<style>
</style>