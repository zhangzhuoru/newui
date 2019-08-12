<template>
  <v-container
    fill-height
    fluid
    grid-list-xl
  >
    <v-layout
      justify-center
      wrap
    >
      <v-flex
        md12
      >
        <material-card
          color="green"
          title="Simple Table"
          text="Here is a subtitle for this table"
        >
          <v-data-table
            :headers="headers"
            :items="items"
            hide-actions
          >
            <template
              slot="headerCell"
              slot-scope="{ header }"
            >
              <span
                class="subheading font-weight-light text-success text--darken-3"
                v-text="header.text"
              />
            </template>
            <template
              slot="items"
              slot-scope="{ item }"
            >
              <td>{{ item.name }}</td>
              <td>{{ item.country }}</td>
              <td>{{ item.city }}</td>
              <td class="text-xs-right">{{ item.salary }}</td>
            </template>
          </v-data-table>
        </material-card>
      </v-flex>
      <v-flex
        md12
        sm12
        lg4
      >
        <v-hover v-slot:default="{ hover }">
          <v-card
            class="mx-auto"
            color="grey lighten-4"
            max-width="600"
          >
            <v-img
              :aspect-ratio="16/9"
              src="https://cdn.vuetifyjs.com/images/cards/kitchen.png"
            >
              <v-expand-transition>
                <div
                  v-if="hover"
                  class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text"
                  style="height: 100%;"
                >
                  $14.99
                </div>
              </v-expand-transition>
            </v-img>
            <v-card-text
              class="pt-6"
              style="position: relative;"
            >
              <v-btn
                absolute
                color="orange"
                class="white--text"
                fab
                large
                right
                top
              >
                <v-icon>mdi-cart</v-icon>
              </v-btn>
              <div class="font-weight-light grey--text title mb-2">For the perfect meal</div>
              <h3 class="display-1 font-weight-light orange--text mb-2">QW cooking utensils</h3>
              <div class="font-weight-light title mb-2">
                Our Vintage kitchen utensils delight any chef.<br>
                Made of bamboo by hand
              </div>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-flex>
      <v-flex
        md12
        sm12
        lg4
      >
        <v-hover v-slot:default="{ hover }">
          <v-card
            class="mx-auto"
            color="grey lighten-4"
            max-width="600"
          >
            <v-img
              :aspect-ratio="16/9"
              src="https://cdn.vuetifyjs.com/images/cards/kitchen.png"
            >
              <v-expand-transition>
                <div
                  v-if="hover"
                  class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text"
                  style="height: 100%;"
                >
                  $14.99
                </div>
              </v-expand-transition>
            </v-img>
            <v-card-text
              class="pt-6"
              style="position: relative;"
            >
              <v-btn
                absolute
                color="orange"
                class="white--text"
                fab
                large
                right
                top
              >
                <v-icon>mdi-cart</v-icon>
              </v-btn>
              <div class="font-weight-light grey--text title mb-2">For the perfect meal</div>
              <h3 class="display-1 font-weight-light orange--text mb-2">QW cooking utensils</h3>
              <div class="font-weight-light title mb-2">
                Our Vintage kitchen utensils delight any chef.<br>
                Made of bamboo by hand
              </div>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-flex>
            <v-flex
        md12
        sm12
        lg4
      >
        <v-hover v-slot:default="{ hover }">
          <v-card
            class="mx-auto"
            color="grey lighten-4"
            max-width="600"
          >
            <v-img
              :aspect-ratio="16/9"
              src="https://cdn.vuetifyjs.com/images/cards/kitchen.png"
            >
              <v-expand-transition>
                <div
                  v-if="hover"
                  class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text"
                  style="height: 100%;"
                >
                  $14.99
                </div>
              </v-expand-transition>
            </v-img>
            <v-card-text
              class="pt-6"
              style="position: relative;"
            >
              <v-btn
                absolute
                color="orange"
                class="white--text"
                fab
                large
                right
                top
              >
                <v-icon>mdi-cart</v-icon>
              </v-btn>
              <div class="font-weight-light grey--text title mb-2">For the perfect meal</div>
              <h3 class="display-1 font-weight-light orange--text mb-2">QW cooking utensils</h3>
              <div class="font-weight-light title mb-2">
                Our Vintage kitchen utensils delight any chef.<br>
                Made of bamboo by hand
              </div>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-flex>
      <v-flex
        md12
        sm12
        xs12
        lg6
      >
        <material-card
          color="green"
          title="Echars"
        >
           <Chart id="test" :option='option' ref="mychild1" />
        </material-card>
      </v-flex>
      <v-flex
        md12
        sm12
        xs12
        lg6
      >
        <material-card
          color="green"
          title="Echars"
        >
           <Chart id="test1" :option='option' ref="mychild" />
        </material-card>
      </v-flex>
      <v-flex
        md12
        sm12
        xs12
        lg6
      >
        <material-card
          color="green"
          title="Echars"
        >
           <Lines id="line1" :option='line1'  ref="mychild2"/>
        </material-card>
      </v-flex>
      <v-flex
        md12
        sm12
        xs12
        lg6
      >
        <material-card
          color="green"
          title="Echars"
        >
           <Pies id="pie1" :option='pie1'  ref="mychild3"/>
        </material-card>
      </v-flex>
      <v-flex
        md12
        sm12
        xs12
        lg12
      >
        <material-card
          color="green"
          title="Echars"
        >
           <Bars id="bar1" :option='bar1'  ref="mychild4"/>
        </material-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

import Chart from "../components/Charts";
import Lines from "../components/Lines";
import Bars from "../components/Bars";
import Pies from "../components/Pies";
export default {
  components: {
        Chart,
        Lines,
        Pies,
        Bars,
    },
  mounted() {

        var test1=this.$refs.mychild.getmyChart()
        var test=this.$refs.mychild1.getmyChart()
        var test2=this.$refs.mychild2.getmyLine()
        var test3=this.$refs.mychild3.getpie()
        var test4=this.$refs.mychild4.getmybar()
        console.log('x',)
        window.onresize = function(){
          test1.resize();
          test.resize();
          test2.resize();
          test3.resize();
          test4.resize();
        }
    },
  data: () => ({
    bar1:{
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
    },
    pie1: {
      title : {
          text: '某站点用户访问来源',
          x:'center'
      },
      tooltip : {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      legend: {
          bottom:- 5,
          left: 'center',
          data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
      },
      series : [
          {
              name: '访问来源',
              type: 'pie',
              radius : '70%',
              center: ['50%', '50%'],
              data:[
                  {value:335, name:'直接访问'},
                  {value:310, name:'邮件营销'},
                  {value:234, name:'联盟广告'},
                  {value:135, name:'视频广告'},
                  {value:1548, name:'搜索引擎'}
              ],
              itemStyle: {
                  emphasis: {
                      shadowBlur: 10,
                      shadowOffsetX: 0,
                      shadowColor: 'rgba(0, 0, 0, 0.5)'
                  }
              }
          }
      ]
    },
    line1: {
      title: {
          text: '未来一周气温变化',
          subtext: '纯属虚构'
      },
      tooltip: {
          trigger: 'axis'
      },
      legend: {
          data:['最高气温','最低气温']
      },
      toolbox: {
          show: true,
          feature: {
              dataZoom: {
                  yAxisIndex: 'none'
              },
              dataView: {readOnly: false},
              magicType: {type: ['line', 'bar']},
              restore: {},
              saveAsImage: {}
          }
      },
      xAxis:  {
          type: 'category',
          boundaryGap: false,
          data: ['周一','周二','周三','周四','周五','周六','周日']
      },
      yAxis: {
          type: 'value',
          axisLabel: {
              formatter: '{value} °C'
          }
      },
      series: [
          {
              name:'最高气温',
              type:'line',
              data:[11, 11, 15, 13, 12, 13, 10],
              markPoint: {
                  data: [
                      {type: 'max', name: '最大值'},
                      {type: 'min', name: '最小值'}
                  ]
              },
              markLine: {
                  data: [
                      {type: 'average', name: '平均值'}
                  ]
              }
          },
          {
              name:'最低气温',
              type:'line',
              data:[1, -2, 2, 5, 3, 2, 0],
              markPoint: {
                  data: [
                      {name: '周最低', value: -2, xAxis: 1, yAxis: -1.5}
                  ]
              },
              markLine: {
                  data: [
                      {type: 'average', name: '平均值'},
                      [{
                          symbol: 'none',
                          x: '90%',
                          yAxis: 'max'
                      }, {
                          symbol: 'circle',
                          label: {
                              normal: {
                                  position: 'start',
                                  formatter: '最大值'
                              }
                          },
                          type: 'max',
                          name: '最高点'
                      }]
                  ]
              }
          }
      ]
    },
    option: {
        title: {
            text: "vue-Echarts"
        },
        legend: {
            data: ["销量"]
        },
        xAxis: {
            data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: [{
            type: "value"
        }],
        series: [{
            name: "销量",
            type: "line",
            data: [10, 40, 16, 30, 30, 20]
        }]

    },
    headers: [
      {
        sortable: false,
        text: 'Name',
        value: 'name'
      },
      {
        sortable: false,
        text: 'Country',
        value: 'country'
      },
      {
        sortable: false,
        text: 'City',
        value: 'city'
      },
      {
        sortable: false,
        text: 'Salary',
        value: 'salary',
        align: 'right'
      }
    ],
    items: [
      {
        name: 'Dakota Rice',
        country: 'Niger',
        city: 'Oud-Tunrhout',
        salary: '$35,738'
      },
      {
        name: 'Minerva Hooper',
        country: 'Curaçao',
        city: 'Sinaai-Waas',
        salary: '$23,738'
      }, {
        name: 'Sage Rodriguez',
        country: 'Netherlands',
        city: 'Overland Park',
        salary: '$56,142'
      }, {
        name: 'Philip Chanley',
        country: 'Korea, South',
        city: 'Gloucester',
        salary: '$38,735'
      }, {
        name: 'Doris Greene',
        country: 'Malawi',
        city: 'Feldkirchen in Kārnten',
        salary: '$63,542'
      }, {
        name: 'Mason Porter',
        country: 'Chile',
        city: 'Gloucester',
        salary: '$78,615'
      }
    ]
  })
}
</script>
<style>
  .v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .5;
  position: absolute;
  width: 100%;
}
</style>