<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(img,index) in imgs" :key="index"><a :href="img.url"><img :src="img.img" alt=""></a></mt-swipe-item>
    </mt-swipe>
    <router-view></router-view>
    <div class="mui-content">
      <ul class="mui-table-view mui-grid-view mui-grid-9">
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <router-link :to="{name: 'news.list'}">
              <span class="mui-icon mui-icon-home"></span>
              <div class="mui-media-body">router-link</div>
            </router-link>
          </li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <router-link :to="{ name: 'photo.share'}">
              <span class="mui-icon mui-icon-email">
                <span class="mui-badge">5</span>
              </span>
              <div class="mui-media-body">Email</div>
            </router-link>
          </li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <a>
              <span class="mui-icon mui-icon-chatbubble"></span>
              <div class="mui-media-body">Chat</div>
            </a>
          </li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <a href="#">
              <span class="mui-icon mui-icon-location"></span>
              <div class="mui-media-body">location</div>
            </a>
          </li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <a href="#">
              <span class="mui-icon mui-icon-search"></span>
              <div class="mui-media-body">Search</div>
            </a>
          </li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <a href="#">
              <span class="mui-icon mui-icon-phone"></span>
              <div class="mui-media-body">Phone</div>
            </a>
          </li>
      </ul>
  </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      imgs: []// 轮播图列表
    }
  },
  created () {
    this.$axios.get('tu')
      .then(res => {
        console.log(res.data.message)
        this.imgs = res.data.message
      })
  }
}
</script>

<style scoped>
.mui-table-view.mui-grid-view.mui-grid-9{
  background-color: white;
  margin-top: 0;
}
.mint-swipe{
  max-height: 150px;
}
.mint-swipe img{
  max-height: 100%;
}
</style>
