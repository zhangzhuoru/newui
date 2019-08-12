<template>
  <div :id="id" :style="style"></div>
</template>
<script>
export default {
  name: "Chart",
  data() {
    return {
      //echarts实例
      chart: ""
    };
  },
  props: {
    //父组件需要传递的参数：id，width，height，option
    id: {
      type: String
    },
    width: {
      type: String,
      default: "100%"
    },
    height: {
      type: String,
      default: "300px"
    },
    option: {
      type: Object,
      //Object类型的prop值一定要用函数return出来，不然会报错。原理和data是一样的，
      //使用闭包保证一个vue实例拥有自己的一份props
      default() {
        return {

          xAxis: {
              type: 'category',
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
              type: 'value'
          },
          series: [{
              data: [120, 200, 150, 80, 70, 110, 130],
              type: 'bar'
          }]
        };
      }
    }
  },
  watch: {
    // 如果 `question` 发生改变，这个函数就会运行
    // option: function (newQuestion, oldQuestion) {
    //   this.init();
    //   console.log('1111');
    // }
  },
  computed: {
    style() {
      return {
        height: this.height,
        width: this.width
      };
    }
  },
  mounted() {
    this.init();

  },
  methods: {
    getmybar(){
      var myChart = this.$echarts.init(document.getElementById(this.id));
      return myChart
    },
    init() {
      this.chart = this.$echarts.init(document.getElementById(this.id));
      this.chart.setOption(this.option);
      console.log('this.option',this.option.series[0].data);
    }
  }
};
</script>