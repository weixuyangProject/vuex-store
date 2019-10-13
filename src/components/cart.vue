<template>
  <div class="cart">
    <el-breadcrumb separator-class="el-icon-arrow-right" class="bread">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>购物车</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="total">
      <el-table :data="this.$store.state.goodsList" style="width: 100%">
        <el-table-column label="名称">
          <template slot-scope="scope">
            <span style="margin-left: 5px">{{ scope.row.goods_name}}</span>
          </template>
        </el-table-column>

        <el-table-column label="图片">
          <template slot-scope="scope">
            <img :src="scope.row.url" style="width:100px" />
          </template>
        </el-table-column>

        <el-table-column label="数量">
          <template slot-scope="scope">
            <el-input-number
              v-model="scope.row.num"
              @change="handleChange(scope.row.num,scope.row.id)"
              :min="1"
              :max="999"
              size="small"
              label="描述文字"
              ref="goodsID"
            ></el-input-number>
          </template>
        </el-table-column>

        <el-table-column label="单价">
          <template slot-scope="scope">
            <span style="margin-left: 5px">{{ scope.row.price }}</span>
          </template>
        </el-table-column>

        <el-table-column label="总价">
          <template slot-scope="scope">
            <span style="margin-left: 5px">{{ scope.row.price * scope.row.num }}</span>
          </template>
        </el-table-column>

        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>

      <div class="total_price">
        总价：￥
        <em>{{this.$store.getters.totalPrice}}</em>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      aGoods_list: 0,
    };
  },
  methods: {
    handleDelete(index) {
      this.$store.commit({
        type:'delGoods',
        index});
    },
    handleChange(num,id) {
      // console.log(num,id);
      this.$store.commit({
        type:'numChanged',
        num,
        id})
    }
  }
};
</script>

<style>
.el-table thead {
  color: #8eb7fa;
  font-weight: 500;
}

.el-table th {
  background: #eef1f6;
  height: 20px;
}

.cart .total {
  margin-top: 20px;
  width: 100%;
}

.cart .total_price {
  float: left;
  width: 100%;
  height: 50px;
  margin-bottom: 40px;
}
</style>