<template>
  <div class="container">
      <el-carousel :interval="4000" type="card" >
        <el-carousel-item v-for="item in imgs" :key="item.id">
          <el-image :src="item.src" fit='cover' class='wfull'></el-image>
        </el-carousel-item>
      </el-carousel>
      <el-card>
      <div slot="header" class="clearfix">
        <span style='font-size: 30px;font-weight: bolder;'>{{pinsjfo.title}}</span>
      </div>
      <p class="price">
        <span style='margin-right:10px;'><del>￥{{pinsjfo.market_price}}</del></span>
        <span style='font-size: 30px;color:red;font-weight: bolder;'>￥{{pinsjfo.sell_price}}</span>
      </p>
      <p>
        <span style='font-size: 30px;font-weight: bolder;vertical-align: middle;'>购买数量：</span>
        <el-button type="primary" icon="el-icon-minus" style='border-radius:0;' @click='input-=1'></el-button>
        <el-input v-model="input" placeholder="请输入内容"style='width:60px;'></el-input>
        <el-button type="primary" icon="el-icon-plus" style='border-radius:0' @click='input+=1'></el-button>
      </p>
      <p style='display:flex;justify-content:flex-end'>
        <el-button type="primary">立即购买</el-button>
        <el-button type="danger">加入购物车</el-button>
      </p>
      </el-card>
      <el-card class="box-card" style='margin-top:20px;'>
        <div slot="header" class="clearfix">
          <span>商品参数</span>

        </div>
        <div class="text item">
          <p>商品货号： {{pinsjfo.goods_no}}</p>
          <p>库存情况： {{pinsjfo.stock_quantity}}</p>
          <p>上架时间： {{pinsjfo.add_time | timefix}}</p>
        </div>
      </el-card>
      <el-card class="box-card" style='margin-top:20px;'>
        <div class="content" v-html='sjdesc.content'></div>
      </el-card>
      <div class="logoout" @click="goback">
        <img src="../../public/img/back.png">
      </div>
  </div>
</template>
<script>
// @ is an alias to /src


import Api from '@/api/index.js'
import {mapMutations} from 'vuex'
export default {
    name: 'Pinfo',
    data() {
        return {
            sjid:0,
            imgs:[],
            pinsjfo:{},
            input:1,
            sjdesc:[]
        };
    },
    // uname:'joker',
    // password:'xiongwujun'
    created(){
        this.sjid = this.$route.query.sjid
        console.log('id',this.sjid);
        this.getgoodsdesc(this.sjid)
        this.getmoreimgs(this.sjid)
        this.getsjdesc(this.sjid)
    },
    watch: {
        'input'(val, newval) {
            if(this.input<=0){
              this.input=0
            }
            if(this.input>=this.pinsjfo.stock_quantity){
              this.input=this.pinsjfo.stock_quantity
            }
        }
    },
    methods: {
      ...mapMutations(["addtocar"]),
      getgoodsdesc(id) {
          Api.getgoodsdesc(id).then((res)=>{
            if(res.status==200){
              this.pinsjfo = res.data.message[0]
            }
               
            }, err => {
                alert('response.data', err)
            });
      },
      getmoreimgs(id) {
          Api.getmoreimgs(id).then((res)=>{
            if(res.status==200){
              this.imgs = res.data.message
            }
            }, err => {
                alert('response.data', err)
            });
      },
      getsjdesc(id) {
          Api.getsjdesc(id).then((res)=>{
            if(res.status==200){
              this.sjdesc = res.data.message[0]
            }
                console.log('33',this.sjdesc);
            }, err => {
                alert('response.data', err)
            });
      },
      goback(){
        this.$router.go(-1)
      },
      addtocart(){
        this.addtocar({
          id:this.id,
          count:this.input,
          selected:true,
          price:this.pinsjfo.sell_price
        })
      },

    }

}
</script>
<style>
  .el-carousel__item span {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  .wfull{
    width: 100%;
    height: 100%;
    border-radius: 10px;
    background-size:cover;
    font-style: 16px;
    color:red;
    font-weight: bold;
  }
  .imgspan{
    background-color: rgba(0,0,0,.6);
    position: absolute;
    bottom: 0;
    left: 0;
    color: #fff;
    border-radius: 0 0 10px 10px;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
