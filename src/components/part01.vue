<template>
  <div class="part-one">
    <img class="part-one-image" :src="headImage" alt="头像">
    <p>姓&emsp;&emsp;名：耿广昊</p>
    <p>学&emsp;&emsp;历：本科</p>
    <p>工作年限：3 年</p>
    <p>年&emsp;&emsp;龄：27</p>
    <p>邮&emsp;&emsp;箱：253910631@qq.com</p>
    <p>联系电话：15103785516</p>
    <p>网&emsp;&emsp;站：<a href="http://gengguanghao.com">gengguanghao.com</a></p>
  </div>
</template>

<script>
export default {
  name: "partOne",
   data() {
    return {
      headImage: require('../assets/img/headPic.png')
    }
  }
};
</script>

<style scoped>
.part-one {
  width: 210px;
    height: 300px;
   padding-left: 18px;
}
a {
  color: deepskyblue;
}
a:hover {
  color: rgb(118, 190, 248);
}
p {
  line-height: 28px;
  font-size: 14px;
}
.part-one-image {
  width: 50px;
  height: 60px;
  border-radius: 50%;
  margin-left: 45px;
  margin-bottom: 10px;
}
</style>
