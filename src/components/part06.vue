<template>
  <div class="part-six">
    <div>
     <p class="p">求职意向</p>
     <p class="text-small"><span class="font-bold">期望职位：</span>前端工程师</p>
    <p class="text-small"><span class="font-bold">工作技能：</span>Vue,React,node</p>
    <p class="text-small"><span class="font-bold">目标城市：</span>郑州</p>
    <p class="text-small"><span class="font-bold">期望薪资：</span>9K - 13K</p>
    <p class="text-small"><span class="font-bold">入职时间：</span>目前在职</p>
    </div>
    <div class="partSixR">
      <p class="p">开发技能</p>
       <div class="partSixR1">
         <div class="partSixR1_flexRow">
           <a href="http://gengguanghao.com">  <span>HTML5</span> </a>
            <a href="http://gengguanghao.com">  <span>CSS3</span> </a>
            <a href="http://gengguanghao.com">  <span>ES6</span> </a>
         </div>
         <div class="partSixR1_flexRow">
           <a href="http://gengguanghao.com">  <span>Vue</span> </a>
            <a href="http://gengguanghao.com">  <span>React</span> </a>
            <a href="http://gengguanghao.com">  <span>jQuery</span> </a>
         </div>
         <div class="partSixR1_flexRow">
           <a href="http://gengguanghao.com">  <span>node</span> </a>
            <a href="http://gengguanghao.com">  <span>java</span> </a>
            <a href="http://gengguanghao.com">  <span>php</span> </a>
         </div>
          <div class="partSixR1_flexRow">
           <a href="http://gengguanghao.com">  <span>TS</span> </a>
            <a href="http://gengguanghao.com">  <span>Webpack</span> </a>
            <a href="http://gengguanghao.com">  <span>Gulp</span> </a>
         </div>
         <div class="partSixR1_flexRow">
           <a href="http://gengguanghao.com">  <span>Nginx</span> </a>
            <a href="http://gengguanghao.com">  <span>Koa</span> </a>
            <a href="http://gengguanghao.com">  <span>express</span> </a>
         </div>
         <div class="partSixR1_flexRow">
           <a href="http://gengguanghao.com">  <span>RxJS</span> </a>
            <a href="http://gengguanghao.com">  <span>Postcss</span> </a>
            <a href="http://gengguanghao.com">  <span>PWA</span> </a>
         </div>
         


       </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "partSix"
};
</script>

<style scoped>
.part-six {
        height: 220px;
    padding-right: 15px;
    font-size: 14px;
    line-height: 28px;
    display: flex;
}
.partSixR{
  padding-left:10px;
  width:210px;

}
.partSixR1{
  height: 180px;
  margin-top: 8px;
  border-left: 3px solid green;
   border-image: -webkit-linear-gradient(#E6D704,deepskyblue) 30 30;
     border-image: -moz-linear-gradient(#E6D704,deepskyblue) 30 30;
     border-image: linear-gradient(#E6D704,deepskyblue) 30 30;
}
.partSixR1_flexRow{
  padding:0 10px;
  display: flex;
}
.partSixR1_flexRow span{
  display: inline-block;
  width: 60px;
  height: 20px;
  line-height: 14px;
  font-size: 14px;
  text-align: center;
  text-decoration: underline;
   background-image: -webkit-gradient(linear, left 0, right 0, from(#E6D704), to(deepskyblue));
    -webkit-background-clip: text; /*必需加前缀 -webkit- 才支持这个text值 */
    -webkit-text-fill-color: transparent; /*text-fill-color会覆盖color所定义的字体颜色： */
}
</style>
