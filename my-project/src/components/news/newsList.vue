<template>
    <!-- 图文列表 -->
  <div class="tmpl">
     <nav-bar title="新闻列表"></nav-bar>
      <ul class="mui-table-view">
          <li v-for="news in newsList" :key="news.id" class="mui-tabel-view-cell mui-media">
              <router-link :to="{name:'news.dateli', query:{id:news.id}}" class="">
                  <img :src="news.img_url" alt="" class="mui-media-object mui-pull-letf">
                  <div class="mui-media-body">
                      <span v-text="news.title"></span>
                      <div class="news-desc cl">
                          <p>点击数:{{news.click}}</p>
                          <p>发表时间：{{news.add_time}}</p>
                      </div>
                  </div>
              </router-link>
          </li>
      </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      newsList: []
    }
  },
  created () {
    this.$axios.get('ZGS_2')
      .then(res => {
        console.log(res)
        this.newsList = res.data.message
      })
  }
}
</script>

<style scoped>
.cl {
    clear: both;
    /* content: ""; */
    overflow: hidden;
    /* display: table; */
}
.mui-media-object{
    float: left;
}
.mui-media-body span{
    width: 80%;
    float: left;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: block;
    overflow: hidden;
}
.mui-media-body p {
    color: #0bb0f5;
}
.news-desc p:nth-child(1) {
    float: left;
}
.news-desc p:nth-child(2) {
    float: right;
}
</style>
