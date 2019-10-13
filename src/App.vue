<template>
  <div class="wrap" id="app">
    <img src="./assets/images/banner.png" />
    <div class="menu">
      <a href="#/">
        <el-button type="primary">商品列表</el-button>
      </a>
      <router-link to="/cart">
        <el-badge :value="this.$store.getters.totalCount" :max="999" class="item">
          <el-button type="success">商品列表</el-button>
        </el-badge>
      </router-link>
    </div>
    
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    };
  },
  name: "app"
};
</script>

<style src="./main.css">
</style>

