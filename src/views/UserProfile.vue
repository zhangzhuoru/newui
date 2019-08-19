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
        <material-card
          color="green"
          title="Edit Profile"
          text="Complete your profile"
        >
          <v-form>
            <v-container py-0>
              <v-layout wrap>
                <v-flex
                  xs12
                  md4
                >
                  <v-text-field
                    label="Company (disabled)"
                    disabled/>
                </v-flex>
                <v-flex
                  xs12
                  md4
                >
                  <v-text-field
                    class="purple-input"
                    label="User Name"
                  />
                </v-flex>
                <v-flex
                  xs12
                  md4
                >
                  <v-text-field
                    label="Email Address"
                    class="purple-input"/>
                </v-flex>
                <v-flex
                  xs12
                  md6
                >
                  <v-text-field
                    label="First Name"
                    class="purple-input"/>
                </v-flex>
                <v-flex
                  xs12
                  md6
                >
                  <v-text-field
                    label="Last Name"
                    class="purple-input"/>
                </v-flex>
                <v-flex
                  xs12
                  md12
                >
                  <v-text-field
                    label="Adress"
                    class="purple-input"/>
                </v-flex>
                <v-flex
                  xs12
                  md4>
                  <v-text-field
                    label="City"
                    class="purple-input"/>
                </v-flex>
                <v-flex
                  xs12
                  md4>
                  <v-text-field
                    label="Country"
                    class="purple-input"/>
                </v-flex>
                <v-flex
                  xs12
                  md4>
                  <v-text-field
                    class="purple-input"
                    label="Postal Code"
                    type="number"/>
                </v-flex>
                <v-flex xs12>
                  <v-textarea
                    class="purple-input"
                    label="About Me"
                    value="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  />
                </v-flex>
                <v-flex
                  xs12
                  text-xs-right
                >
                  <v-btn
                    class="mx-0 font-weight-light"
                    color="success"
                  >
                    Update Profile
                  </v-btn>
                </v-flex>
              </v-layout>
            </v-container>
          </v-form>
        </material-card>
      </v-flex>
      <v-flex
        xs12
        md4
      >
        <material-card class="v-card-profile">
          <v-avatar
            slot="offset"
            class="mx-auto d-block"
            size="130"
          >
            <img
              src="https://demos.creative-tim.com/vue-material-dashboard/img/marc.aba54d65.jpg"
            >
          </v-avatar>
          <v-card-text class="text-xs-center">
            <h6 class="category text-gray font-weight-thin mb-3">CEO / CO-FOUNDER</h6>
            <h4 class="card-title font-weight-light">Alec Thompson</h4>
            <p class="card-description font-weight-light">Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...</p>
            <v-btn
              color="success"
              round
              class="font-weight-light"
            >Follow</v-btn>
          </v-card-text>
        </material-card>
      </v-flex>
      <v-flex
        xs12
        md12
        lg3
        v-for='item in goodlist'
        :key='item.id'
      >
      <v-hover v-slot:default="{ hover }"  
         
                >
          <v-card
            class="mx-auto"
            color="grey lighten-4"
            max-width="600"

          >
            <v-img
              :aspect-ratio="9/16"
              :src="item.img_url"
            >
              <v-expand-transition>
                <div
                  v-if="hover"
                  class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text"
                  style="height: 100%;"
                >
                  ￥{{item.sell_price}}
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
              <div class="font-weight-light grey--text title mb-2">￥{{item.title}}</div>
              <div class="font-weight-light title mb-2">
                
              </div>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-flex>
      <v-flex
        xs12
        md12
        lg12>
        <div class="gwcbox">
          <div class="list"
            v-for='items in goodlist'
            :key='items.id'>
            <div class="imgbox">
              <img :src="items.img_url" alt="">
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
            pinfo:{}
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
              this.goodlist = res.data.message
            }
                console.log('22',this.goodlist);
            }, err => {
                alert('response.data', err)
            });
      },
      getmore(){
        this.page++;
        this.getgoods();
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
</style>