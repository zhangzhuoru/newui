<template>
  <div class="container">
      <div >
        <h3>{{pinfo.title}}</h3>
        <p class="info">
          <span>发表时间：{{pinfo.add_time | timefix}}</span>
          <span>点击：{{pinfo.click}}次</span>
        </p>
      </div>
      <el-carousel :interval="4000" type="card" >
        <el-carousel-item v-for="item in imgs" :key="item.id">
          <el-image :src="item.src" fit='cover' class='wfull'></el-image>
        </el-carousel-item>
      </el-carousel>
      <div  v-html='pinfo.content'></div>
  </div>
</template>
<script>
// @ is an alias to /src


import Api from '@/api/index.js'
export default {
    name: 'Pinfo',
    data() {
        return {
            id:0,
            imgs:[],
            pinfo:{}
        };
    },
    // uname:'joker',
    // password:'xiongwujun'
    created(){
        this.id = this.$route.query.id
        console.log('id',this.id);
        this.getimageinfo(this.id)
        this.getthumbImg(this.id)
    },
    methods: {
      getimageinfo(id) {
          Api.getimageinfo(id).then((res)=>{
            if(res.status==200){
              this.pinfo = res.data.message[0]
            }
                console.log('22',res);
            }, err => {
                alert('response.data', err)
            });
      },
      getthumbImg(id) {
          Api.getthumbImg(id).then((res)=>{
            if(res.status==200){
              this.imgs = res.data.message
            }
                console.log('33',res);
            }, err => {
                alert('response.data', err)
            });
      },
      
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
