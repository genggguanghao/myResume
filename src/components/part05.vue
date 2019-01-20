<template>
  <div :class="partFive">
    <h3 class="p">工作经验</h3>
    <p>
      <a href="javascript:void(0)">上海哲凌科技有限公司</a>
      <span class="text-small">| 2015/06 - 2017.05</span>
    </p>
    <p class="text-small">工作内容：</p>
    <p class="text-small">&emsp;1. 浏览器的兼容，手机适配，样式的优化走查，前端页面的制作,交互,动画等逻辑功能的实现</p>
    <p class="text-small">&emsp;2. 配合后端工程师完成数据的编写和接口调试工作;</p>
    <p class="text-small">&emsp;3. 持续优化项目体验,响应速度,以及执行效率;</p>
    <p class="text-small">&emsp;4. 负责公司外包项目的前端开发任务;</p>
    <p class="text-small">&emsp;5. 现有前端项目的维护;</p>
  </div>
</template>
<script>
  export default {
  name: "partFive",
  data() {
    return {
      partFive: "part-five",
      curWidth: 0
    };
  },
};
</script>

<style scoped>
.part-five {
     width: 100%;
    height: 220px;
    padding-right: 20px;
    font-size: 13px;
    line-height: 24px;
}
.part-five a{
  color: deepskyblue;
}
</style>
