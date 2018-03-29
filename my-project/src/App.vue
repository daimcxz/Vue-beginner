<template>
  <div id="app">
    <mt-header title="管理系统"></mt-header>
    <router-view></router-view>
    <nav class='mui-bar mui-bar-tab'>
      <div class="mui-tab-item home" @click.prevent="goHerf('home')">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </div>
      <div class="mui-tab-item email" @click.prevent="goHerf('email')">
        <span class="mui-icon mui-icon-email"></span>
        <span class="mui-tab-label">消息</span>
      </div>
      <div class="mui-tab-item contact" @click.prevent="goHerf('contact')">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">购物</span>
      </div>
      <div  class="mui-tab-item gear" @click.prevent="goHerf('gear')">
        <span class="mui-icon mui-icon-gear"></span>
        <span class="mui-tab-label">自定义</span>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
    }
  },
  methods: {
    goHerf: function(name) {
      this.$router.push({
        name: name
      })
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
ul{
    margin: 0;
    padding: 0;
}
li{
  list-style: none;
}
</style>
