<template>
  <div>
     <el-carousel :interval="4000" type="card" height="200px">
        <el-carousel-item v-for="item in lunbotu" :key="item.id">
          <el-image :src="item.img" fit='cover' class='wfull'></el-image>
        </el-carousel-item>
      </el-carousel>
      <el-tabs  type="border-card"  @tab-click="getimages">
        <el-tab-pane 
          key="0"
          label="全部" 
        >
          <el-col :span="14" :offset="5" v-for="item in images"  :key="item.id" style='border-radius: 10px;margin-top: 20px;position: relative;' >
              <img :src="item.img_url" alt=""class='wfull' @click='tofinfo(item.id)'>

              <span class='imgspan' @click='tofinfo(item.id)'>{{item.zhaiyao}}</span>
          </el-col>
        </el-tab-pane>
        <el-tab-pane 
        v-for="item in imgcategory" 
        :key="item.id"
        :label="item.title" 
        :data="item.id">
          <el-col :span="14" :offset="5" v-for="item in images"  :key="item.id" style='border-radius: 10px;margin-top: 20px;position: relative;' >
              <img :src="item.img_url" alt=""class='wfull' @click='tofinfo(item.id)'>

              <span class='imgspan' @click='tofinfo(item.id)'>{{item.zhaiyao}}</span>
          </el-col>
        </el-tab-pane>
      </el-tabs>
  </div>
</template>
<script>
// @ is an alias to /src
import Api from '@/api/index.js'
export default {
    name: 'login',
    data() {
        return {
            tip: false,
            token:'',
            lunbotu:[],
            imgcategory:[],
            count: 10,
            images:[]
        };
    },
    // uname:'joker',
    // password:'xiongwujun'
    created(){
      this.gomain()
      this.getlunbotu()
      this.getimgcategory()
      this.getimages(0)
    },
    methods: {
        gomain() {
          Api.goodslist().then((res)=>{
              console.log('11',res);
          }, err => {
              alert('response.data', err)
          });
      },
      getlunbotu() {
          Api.getlunbotu().then((res)=>{
            if(res.status==200){
              this.lunbotu = res.data.message
            }
                console.log('22',res);
            }, err => {
                alert('response.data', err)
            });
      },
      getimgcategory() {
          Api.getimgcategory().then((res)=>{
            if(res.status==200){
              this.imgcategory = res.data.message
            }
                console.log('33',this.imgcategory[0].title);
            }, err => {
                alert('response.data', err)
            });
      },
      getimages(tab){

         if(tab==0){
           Api.getimages(0).then((res)=>{
            if(res.status==200){
              this.images = res.data.message
            }
                console.log('33',res);
            }, err => {
                alert('response.data', err)
            });
         }else{
           Api.getimages(tab.$vnode.key).then((res)=>{
            if(res.status==200){
              this.images = res.data.message
            }
                console.log('33',res);
            }, err => {
                alert('response.data', err)
            });
         }
          
      },
       load () {
        this.count += 2
      },
      tofinfo(id){
        this.$router.push({
          name:'Pinfo',
          query:{
            id:id
          }
        })
      }
    }

}
</script>
<style>
  .el-carousel__item h3 {
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
