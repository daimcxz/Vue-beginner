<template>
  <div class="tmpl">
    <nav-bar title="图文详情"></nav-bar>
    <div class="photo-title">
        <p v-text="imgInfo.title"></p>
        <span>日期：{{imgInfo.add_time}} </span>
        <span>浏览：{{imgInfo.click}}</span>
        <span>分类</span>
    </div>
    <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li v-for="(img,index) in imgs" :key="index" class="mui-tadle-view-cell mui-media mui-col-xs-4 ">
            <!-- <img :src="img.img"> -->
            <!-- <img class="preview-img" :src="img.img" height="100" @click="$preview.open(index, imgs)"> -->
            <vue-preview :slides="[{src: img.img,msrc: img.img,title: imgInfo.title,w: 600,h: 400}]" @close="handleClose"></vue-preview>
        </li>
    </ul>
    <div class="photo-desc">
        <p v-html="imgInfo.zhaiyao"></p>
    </div>
    <!-- 评论开始 -->
    <div class="photo-bottom">
      <ul>
        <li class="photo-comment">
          <div>
            <span>提交</span>
            <span><a href="">返回</a></span>
          </div>
        </li>
        <li class="txt-comment">
          <textarea v-model="msg"></textarea>
        </li>
        <li>
         <button @click="send">发表</button>
        </li>
        <li class="photo-comment">
          <div>
            <span>评论列表</span>
            <span>44条评论</span>
          </div>
        </li>
      </ul>
      <ul class="comment-list">
        <li v-for="(comment,index) in comments" :key="index">
          {{comment.user_name}}:{{comment.conent}}{{comment.add_time}}
        </li>
      </ul>
      <button @click="addMroe"> 加载更多</button>
    </div>
    <!-- 评论结束 -->
  </div>
</template>
<script>
export default {
  data () {
    return {
      imgs: [], // 图片
      imgInfo: {}, // 缩略图
      comments: [], // 评论
      msg: ''
    }
  },
  created () {
    this.getInfo()
  },
  methods: {
    getInfo: function () {
      console.log(this)
      // 1：获取路由参数
      // 2: 发起请求
      this.$axios.get('ZGS_2')
        .then(res => {
          console.log(res)
          console.log(res.data.message)
          this.imgs = res.data.message
          if (this.comments.length === 0) {
            this.comments = res.data.message
          } else {
            console.log('33333')
            console.log(this.comments)
            console.log(res.data.message)
            this.comments = this.comments.concat(res.data.message)
          }
          this.imgInfo = res.data.message[0]
        })
        .catch(err => {
          console.log(err)
        })
    },
    handleClose: () => {
      console.log('1111')
    },
    addMroe: function () {
      console.log(2222)
      this.getInfo()
    },
    // 发表评论
    send () {
      this.$axios.get('ZGS_2')
        .then(res => {
          console.log(res)
          this.categorys.unshift({
            conent: this.msg
          })
          this.getInfo()
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>
<style scoped>
.mui-media{
  width: 30%;
  float: left;
}
.mui-grid-view{
  content: " ";
  display: table;
}
.photo-desc{
  text-align: left;
}
.photo-title p{
  color: cornflowerblue;
  font-size: 1.1em;
}
li{
  list-style:none
}
ul{
  margin: 0;
  padding: 0;
}
.photo-comment >div span:nth-child(1){
  float: left;
}
.photo-comment >div span:nth-child(2){
  float: right;
}
.photo-comment{
  height: 30px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.4);
  line-height: 30px;
  margin-bottom: 5px;
}
.comment-list li{
  text-align: left;
  padding: 5px 5px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.4);
}
</style>
