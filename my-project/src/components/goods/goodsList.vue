<template>
  <div class="tmpl">
    <nav-bar title="图文分享"></nav-bar>
  <!-- <mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded"  ref="loadmore"> -->
    <ul  v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10" class="mui-table-view mui-grid-view">
        <li v-for="prod in prods" :key="prod.id" class="mui-table-view-cell mui-media mui-col-xs-6">
            <router-link :to="{name:'goods.detail'}" href="">
                <img class="mui-media-object" :src="prod.img" alt="">
                <div class="mui-media-boady">{{prod.title}}</div>
                <div class="desc">
                    <div class="sell">
                        <span>￥{{prod.sell}}</span>
                        <s>￥{{prod.market}}</s>
                    </div>
                    <div class="detail">
                        <div class="hot">
                            热卖中
                        </div>
                        <div class="count">
                            剩{{prod.stock}}件
                        </div>
                    </div>
                </div>
            </router-link>
        </li>
    </ul>
  <!-- </mt-loadmore> -->
  </div>
</template>
<script>
export default {
  data () {
    return {
      prods: []
      //   allLoaded: false // 是否禁止上拉刷新
      // isAutoFill: false // 是否自动上拉刷新
    }
  },
  created () {
    this.getInfo()
  },
  methods: {
    loadBottom () {
      console.log('上拉刷新')
      console.log('上拉刷新')
      this.getInfo() // 加载更多数据
      this.allLoaded = true // 若数据已全部获取完毕
      this.$refs.loadmore.onBottomLoaded()
    },
    getInfo: function () {
      console.log(this)
      // 1：获取路由参数
      // 2: 发起请求
      this.$axios.get('ZGS_2')
        .then(res => {
          console.log(res)
          console.log(res.data.message)
          this.imgs = res.data.message
          if (this.prods.length === 0) {
            this.prods = res.data.message
          } else {
            console.log('33333')
            console.log(this.prods)
            console.log(res.data.message)
            this.prods = this.prods.concat(res.data.message)
          }
          this.imgInfo = res.data.message[0]
        })
        .catch(err => {
          console.log(err)
        })
    },
    loadMore () {
      this.loading = true
      this.getInfo()
    }
  }
}
</script>
<style scoped>
.mui-table-view .mui-table-view-cell{
    margin: 0;
    padding: 0;
    border: 1px solid #5c5c5c;
    box-shadow: 0 0 4px #666;
}
.sell > span {
    float: left;
    color: red;
    text-align: left;
}
.detail > .hot{
    float: left;
    text-align: left;
    margin-left: 16px;
    font-size: 15px;
}
.detail > .count{
    float: right;
    text-align: right;
    font-size: 15px;
}
.mui-media-boady{
    text-align: left;
    margin-left: 16px;
}
.mui-media-boady{
    text-overflow: ellipsis;
    white-space: nowrap;
    display: block;
    overflow: hidden;
}
.mui-table-view{
    margin: 0;
    padding: 0;
}
li{
    margin: 0;
    padding: 0;
}
</style>
