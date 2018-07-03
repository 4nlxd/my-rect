<template>
	<div>
		<h2 class="title">{{msg}}</h2>
	</div>
</template>

<script >
	
export default {
  props:["number"],
  name: 'Title1',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted(){
  	console.log(this.number)
  }
}
</script>
 
<style scoped>
	 .title{width:100%;color:#fff;font-size:24px;margin:0;padding:0;}
</style>