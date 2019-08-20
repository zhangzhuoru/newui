<template>
  <v-container
    fill-height
    fluid
    grid-list-xl>
    <v-layout
      justify-center
      wrap
    >
      <v-flex
        xs12
        md8
      >
       <el-tabs type="border-card">
            <el-tab-pane>
              <span slot="label"><i class="el-icon-date"></i> 课程章节目录</span>
              <div class="yijitimu" v-for='items in list'>
                <p>{{items.label}}</p>
                <div class="erjitimu" v-for='item in items.children'>
                  <p>{{item.label}}</p>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="课程软件资源">课程软件资源</el-tab-pane>
            <el-tab-pane label="课程共享资源">课程共享资源</el-tab-pane>
          </el-tabs>

      </v-flex>
      <v-flex
        xs12
        md4
      >
        <material-card class="v-card-profile">
            <img
              src="https://demos.creative-tim.com/vue-material-dashboard/img/marc.aba54d65.jpg"
              style='width:100%;'
            >

          <v-card-text class="text-xs-center">
            <h4 class="card-title font-weight-light">Alec Thompson</h4>
            <p class="card-description font-weight-light">Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...</p>
            <div class="butbox">
              <v-btn
              color="primary"
              class="font-weight-light"
              >进入课程</v-btn>
              <v-btn
                color="warning"
                class="font-weight-light"
              >退出课程</v-btn>
            </div>

          </v-card-text>
        </material-card>
      </v-flex>

      <v-flex
        xs12
        md12
        lg12>
        <div class="gwcbox">
          <div class="list"
            v-for='items in goodlist'
            :key='items.id'
            @click='gogoodsinfo(items.id)'>
            <div class="imgbox">
              <img :src="items.img_url" alt=""
                :onerror="img404"
              >
            </div>
            <div class="jiage">
              <span>￥</span><span class='oldprice'>{{items.market_price}}</span>
              <span class='money'>￥</span><span class='newprice'>{{items.sell_price}}</span>
            </div>
            <div class="title">{{items.title}}</div>
            <div class="gwcfoot">
              <span>剩{{items.stock_quantity}}件</span>
            </div>
          </div>
        </div>
      </v-flex>
      <v-flex
        xs12
        md12
        lg12>
        <el-col :span="6">
          <div class="imgbox"><img src="https://img.mukewang.com/5d410c6509a237dd06000338-240-135.jpg" alt="图片"></div>
        </el-col>
        <el-col :span="18" style='padding-left:32px;'>
          <div class="sptitle">
            Android事件分发机制
          </div>
          <div class="diehang">
            <span class='sp1'>已学0%</span>
            <span>用时 0分</span>
            <span>学习至1-1 什么是事件分发</span>
          </div>
          <div class="disanhang">
            <el-button type="danger" round>学习</el-button>
          </div>
        </el-col>
      </v-flex>
      
      <div class="logoout" @click="getmore">
        <img src="../../public/img/add.png" alt>
      </div>

    </v-layout>
    
  </v-container>
</template>

<script>
  // @ is an alias to /src


  import Api from '@/api/index.js'
  export default {
      name: 'Pinfo',
      data() {
          return {
              id:0,
              page:1,
              goodlist:[],
              pinfo:{},
              isloaded:false,
              img404: "this.src='http://demo.dtcms.net/upload/201504/20/thumb_201504200119256512.jpg'",
              list:[{
          label: '一级 1',
          children: [{
            label: '二级 1-1',
          }]
        }, {
          label: '一级 2',
          children: [{
            label: '二级 2-1',
          }, {
            label: '二级 2-2',
          }]
        }, {
          label: '一级 3',
          children: [{
            label: '二级 3-1',
          }, {
            label: '二级 3-2',
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
          };
      },
      // uname:'joker',
      // password:'xiongwujun'
      created(){
          this.getgoods()
      },
      methods: {
        getgoods() {
            Api.getgoods(this.page).then((res)=>{
              if(res.status==200){
                if(res.data.message.length<=0){
                  this.isloaded = true
                }
                this.goodlist = this.goodlist.concat(res.data.message)
              }
                  console.log('22',this.goodlist);
              }, err => {
                  alert('response.data', err)
              });
        },
        getmore(){
          if(this.isloaded) return
          this.page++;
          this.getgoods();
        },
        gogoodsinfo(id){
        this.$router.push({
            name:'Pinsjfo',
            query:{
              sjid:id
            }
          })
        },
        handleNodeClick(data) {
          console.log(data);
        }


        
      }

  }
</script>
<style>
  .gwcbox{
    width: 100%;
    height: 100%;
     display: flex;
    flex-wrap: wrap;
}
.list {
    width: 24%;
    height: 400px;
    background-color: skyblue;
    margin-top: 15px;
}
.list:not(:nth-child(4n)) {
    margin-right: calc(4% / 3);
}

.jiage{
  display: flex;
  align-items:flex-end;
  height: 45px;
}

.oldprice{
  text-decoration: line-through;
  font-size: 14px;
  margin-right: 10px;
}
.newprice{
  margin: 0;
  padding: 0;
  vertical-align: middle;
  font-size: 30px;
  color: #FF0036;
  font-weight: bolder;
  font-family: Arial;
  top:10px;
  transform:translateY(6px)
}
@media screen and (max-width:640px) {
  .list {
    width: 48%;
    height: 400px;
    background-color: skyblue;
    margin-top: 15px;
}
}
.title{
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.imgbox{
  width: 100%;
  padding: 5px;
  display:flex;
  align-items:center;
  justify-content:center;
}
.imgbox img{
  width:100%;
  height:auto;
}
.sptitle{
  margin-top: 15px;
  color: #1c1f21;
  font-weight: 700;
  font-size: 20px;
  line-height: 36px;
}
.diehang span{
  margin-right: 14px;
  line-height: 24px;
  font-size: 14px;
  color: #787d82;
}
.diehang .sp1{
  color: #f01400;

}
.disanhang{
  margin-top: 12px;
}
.erjitimu{
  padding-left: 20px;
}
</style>