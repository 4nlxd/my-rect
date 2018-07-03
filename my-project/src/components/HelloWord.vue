
<template>
  <div class="hello">
		  <el-container>
				    <el-header><Title1 :number=888></Title1></el-header>
				    <el-container>
						    <el-aside width="150px">
						    	<el-row class="tac">
						    		<el-col :span="24">
											    <el-menu
											      default-active="2"
											      class="el-menu-vertical-demo"
											      @open="handleOpen"
											      @close="handleClose"
											      @select="handleCurrent"
											      background-color="#545c64"
											      text-color="#fff"
											      active-text-color="#ffd04b">
											      <el-submenu index="1">
											        <template slot="title">
											          <i class="el-icon-location"></i>
											          <router-link :to="{name: 'foo1'}"><span>导航一</span></router-link>
											        </template>
											        <el-menu-item-group>
											          <el-menu-item index="1-1">选项1</el-menu-item>
											          <el-menu-item index="1-2">选项2</el-menu-item>
											        </el-menu-item-group>
											      </el-submenu>
											       <el-submenu index="2">
												      	<template slot="title">
												      		<i class="el-icon-menu"></i>
												          <router-link  to="/foo2/123"><span>导航二</span></router-link>
												      	</template>
												       <el-menu-item-group>
											          <el-menu-item index="2-1">选项1</el-menu-item>
											          <el-menu-item index="2-2">选项2</el-menu-item>
											        </el-menu-item-group>
											     </el-submenu>
											      <el-menu-item index="3">
											        <i class="el-icon-document"></i>
											        <span slot="title">导航三</span>
											      </el-menu-item>
											      <el-menu-item index="4">
											        <i class="el-icon-setting"></i>
											        <span slot="title">导航四</span>
											      </el-menu-item>
											    </el-menu>
											  </el-col>
						    	</el-row>
						    </el-aside>
						    <el-container>
						      <el-main>
						      	<router-view></router-view>
						      </el-main>
						    </el-container>
				  </el-container>
		</el-container>
  </div>
</template>
<script>
import Title1 from './Title'
import {mapActions,mapGetters} from 'vuex'
export default {
  name:'HelloWord',
  data(){
  	return{
  		num:123
  	}
  },
  components: { Title1 },
  methods: {
      handleOpen(key, keyPath) {
        console.log(keyPath)
      },
      
      handleClose(key, keyPath) {
        console.log(key, keyPath)
      },
      handleCurrent(key, keyPath) {
        console.log(key, keyPath)
      }
      
   },
   computed:{
    ...mapGetters(['resturantName'])
  }
}
</script>


<style scoped>
	body{margin:0;}
	*{padding:0;margin:0;}
  .el-header{
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-menu a{text-decoration: none;color:#fff;}
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    height:600px;
  }
  .el-menu{height:600px}
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    height:600px;
  }
  .el-submenu__icon-arrow{right:10px;margin-top:-2px;}
  .el-menu-item{padding:0 20px;min-width:100px;}
</style>

