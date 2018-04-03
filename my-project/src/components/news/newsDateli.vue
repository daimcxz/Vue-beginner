<template>
  <div class="tmpl">
      <nav-bar title="新闻详情"></nav-bar>
      <div class="news-title">
          <p v-text="newsDateli.title"></p>
          <div class="news-bottom">
              <span>点击:{{newsDateli.click}} </span>
              <span>分类:{{newsDateli.conent}} </span>
              <span>时间:{{newsDateli.add_time}} </span>
          </div>
      </div>
      <div class="news-content">{{newsDateli.zhaiyao}}</div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      newsDateli: []
    }
  },
  created () {
    this.$axios.get('ZGS_2')
      .then(res => {
        this.newsDateli = res.data.message[0]
      })
  }
}
</script>
<style scoped>
.news-title p{
    font-weight: 600;
    font-size: 20px;
    color:dodgerblue;
    text-align: left;
}
.news-title span:nth-child(1) {
    float: left;
}
.news-title span:nth-child(2) {
    overflow: hidden;
}
.news-title span:nth-child(3) {
    float: right;
}
.news-bottom{
   border-bottom: 1px solid rgba(0, 0, 0, 0.2);
   padding-bottom: 10px;
}
.news-content{
    clear:both;
    text-align: left;
    padding: 5px 0;
    line-height: 130%;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.4);
}
</style>
