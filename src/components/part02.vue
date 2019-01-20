<template>
  <div class="part-two" id="part-two">
  </div>
</template>

<script>
// 引入基本模板
let echarts = require("echarts/lib/echarts");

// 引用中国地图
require("echarts/map/js/china.js");

export default {
  name: "PartTwo",
  data() {
    return {};
  },
  mounted() {
    this.drawECharts();
  },
  methods: {
    drawECharts() {

      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById("part-two"));

      // 排行前五城市
      let myFirendCity = [
        { name: "长春", value: ["125.366673","43.959093","10"] },
        { name: "郑州", value: ["113.678829", "34.741524", "12"] },
        { name: "上海", value: ["121.48", "31.22", "8"] },
        { name: "北京", value: ["116.46", "39.92", "6"] },
        { name: "南京", value: ["118.799691", "32.0450662", "3"] },
      ];

      // 好友分布省份
      let myFriendProvince = [
        { name: "黑龙江", value: 1 },
        { name: "吉林", value: 1 },
        { name: "辽宁", value: 21 },
        { name: "天津", value: 1 },
        { name: "北京", value: 12 },
        { name: "内蒙古", value: 1 },
        { name: "新疆", value: 10 },
        { name: "河南", value: 4 },
        { name: "山东", value: 1 },
        { name: "上海", value: 1 },
        { name: "江苏", value: 1 },
      ];

      myChart.setOption({
        // 标题
        title: {
          text: "我的足迹分布",
          textStyle: {
            color: "#fff"
          },
          subtext: "QQ统计",
          subtextStyle: {
            color: "#fff"
          },
          x: "center"
        },
        // 移动显示
        tooltip: {
          trigger: "item",
          // 鼠标移动过去显示
          formatter: function(params) {
            if (params.value[2] == undefined) {
              if(!params.name) {
                return "该地区暂无好友";
              } else {
                return params.name + " : " + params.value;
              }
            } else {
              return params.name + " : " + params.value[2];
            }
          }
        },
        // 左边注记
        visualMap: {
          text: ["", "好友数"],
          min: 0,
          max: 30,
          // 是否能通过手柄显示
          calculable: true,
          inRange: {
            color: ["#e4e004", "#ff5506", "#ff0000"]
          },
          textStyle: {
            color: "#fff"
          }
        },
        // geo
        geo: {
          map: "china"
        },
        // 数据
        series: [
          // 排行前五城市
          {
            name: "排行前五",
            type: "effectScatter",
            coordinateSystem: "geo",
            symbolSize: function(val) {
              return val[2] * 2;
            },
            showEffectOn: "render",
            rippleEffect: {
              brushType: "stroke"
            },
            hoverAnimation: true,
            label: {
              normal: {
                formatter: "{b}",
                position: "right",
                show: true,
                color: "#fff"
              }
            },
            itemStyle: {
              normal: {
                color: "#ddb926",
                shadowBlur: 10,
                shadowColor: "#333"
              }
            },
            // 类似于 z-index
            zlevel: 1,
            data: myFirendCity,
          },
          // 好友分布省份
          {
            name: "好友数",
            type: "map",
            mapType: "china",
            // 是否允许缩放
            roam: false,
            label: {
              // 显示省份标签
              normal: {
                formatter: myFirendCity,
                show: false,
                textStyle: {
                  color: "#fff"
                }
              },
              // 对应的鼠标悬浮效果
              emphasis: {
                show: false
              }
            },
            itemStyle: {
              normal: {
                borderWidth: 0.5, // 区域边框宽度
                borderColor: "#fff", // 区域边框颜色
                areaColor: "deepskyblue" // 区域颜色
              },
              // 对应的鼠标悬浮效果
              emphasis: {
                borderWidth: 1,
                borderColor: "#fff",
                areaColor: "#00aeff"
              }
            },
            // 数据
            data: myFriendProvince
          }
        ]
      });
    }
  }
};  
</script>

<style scoped>
.part-two {
  width: 100%;
    height: 280px;
        padding: 0 25px 0 55px;
}
</style>
