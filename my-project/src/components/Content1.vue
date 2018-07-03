<template>
<div>
   <p>餐馆名称：{{resturantName}}</p>
   {{msg}}
</div>
</template>

<script>
import {mapActions,mapGetters} from 'vuex'
export default {
  name: 'Content',
  data () {
    return {
      msg: '内容1'
    }
  },
   computed:{
    ...mapGetters(['resturantName'])
  }
}
</script>

<style>
</style>