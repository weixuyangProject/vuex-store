<template>
  <div class="list">
    <el-breadcrumb separator-class="el-icon-arrow-right" class="bread">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>商品列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row>
      <el-col
        :span="5"
        v-for="(item, index) in aGoods_list"
        :key="item.id"
        :offset="index > 0 ? 1 : 0"
      >
        <el-card :body-style="{ padding: '0px' }" class="box">
          <img :src="item.url" class="image goods_pic" />
          <div style="padding: 14px;">
            <span class="goodsname">{{item.goods_name}}</span>
            <div class="bottom clearfix">
              <div class="price">
                ￥
                <em>{{item.price}}</em>
              </div>
              <el-button type="danger" round @click="addCart(item)">加入购物车</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      aGoods_list: [
        {
          id: 1001,
          goods_name: "男式黑白格子衬衫",
          url: require("../assets/images/clothes01.jpg"),
          price: 169,
          num: 1
        },
        {
          id: 1002,
          goods_name: "纯棉印花宽松长袖T恤",
          url: require("../assets/images/clothes02.jpg"),
          price: 69,
          num: 1
        },
        {
          id: 1003,
          goods_name: "男士连帽夹克2019春季新款",
          url: require("../assets/images/clothes03.jpg"),
          price: 249,
          num: 1
        },
        {
          id: 1004,
          goods_name: "2019夏装新品时尚百搭",
          url: require("../assets/images/clothes04.jpg"),
          price: 49,
          num: 1
        }
      ]
    };
  },
  methods: {
    addCart(value){
      this.$store.commit('addGoods',value);
    }
  }
};
</script>

<style>
.list {
  margin-top: 20px;
}
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
.box {
  width:210px;
  height:400px;
}
.goodsname{
  color:black;
  font-size: 13px;
  font-weight:bold;
}

.bread{
  margin-bottom: 20px;
}
</style>
