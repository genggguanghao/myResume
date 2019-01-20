<template>
<div id="app">
   <div id="content">
   <el-row>
  <el-col :span="4"><div class="grid-content bg-purple">
    <router-view name="PartOne"/>
    </div></el-col>
  <el-col :span="10"><div class="grid-content bg-purple-light"><router-view name="PartTwo"/></div></el-col>
  <el-col :span="10"><div class="grid-content bg-purple"><router-view name="PartThree"/></div></el-col>
</el-row>
<el-row>
  <el-col :span="8"><div class="grid-content bg-purple"><router-view name="PartFour"/></div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple-light"><router-view name="PartFive"/></div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple"><router-view name="PartSix"/></div></el-col>
</el-row>
    </div>
    </div>
</template>

<script>

export default {
  name: "jianli",
  data() {
  return {
      
    };
  }
};
</script>

<style>

html,body {
 background: url(../assets/img/true.png) no-repeat center center;
 background-size: 100% 100%;
  color: #fff;
  height: 100%;
}
.app {
  height: 100%;
}
#content{
 background: url(../assets/img/jianli_bg.png) no-repeat center center;
 background-size: 100% ;
 width:1200px;
 height: 700px;
 padding-top: 135px;
 padding-left: 10px;
 margin:0 auto;
}
.part {
  padding: 20px;
}
.p{
  text-align: center
}
</style>
