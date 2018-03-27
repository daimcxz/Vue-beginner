<template>
  <div id="app">
    <mt-header title="管理系统"></mt-header>
    <router-view></router-view>
    <nav class='mui-bar mui-bar-tab'>
      <router-link class="mui-tab-item " :to="{name: 'home'}">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item " :to="{name: 'membeer'}">
        <span class="mui-icon mui-icon-email"></span>
        <span class="mui-tab-label">消息</span>
      </router-link>
      <router-link class="mui-tab-item" :to="{name: 'shopcart'}">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">购物</span>
      </router-link>
      <router-link  class="mui-tab-item" :to="{name: 'search'}">
        <span class="mui-icon mui-icon-gear"></span>
        <span class="mui-tab-label">自定义</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
    }
  }
}
</script>

<style >
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.mint-swipe{
  height: 150px;
}
.tmpl{
  margin-bottom: 50px;
  overflow: hidden;
}
</style>
