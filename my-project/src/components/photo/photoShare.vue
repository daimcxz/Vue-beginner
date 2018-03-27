<template>
  <div class="tmpl">
    <nav-bar title="图文分享"></nav-bar>
    <div class="photo-header">
      <ul>
        <li v-for="category in categorys" :key="category.id">
          <a href="">{{category.title}}</a>
        </li>
      </ul>
    </div>
    <div class="photo-list">
      <ul>
        <li v-for="item in imgs" :key="item.id">
          <router-link :to="{name:'photo.detail',params:{id:item.id}}">
            <img :src="item.img">
            <p>
              <span v-text="item.title"></span>
              <br>
              <span v-text="item.zhaiyao"></span>
            </p>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      categorys: [],
      imgs: []
    }
  },
  created () {
    let that = this
    this.$axios.get('ZGS_2')
      .then(res => {
        that.categorys = res.data.message
        // 添加数组元素
        this.categorys.unshift({
          id: 0,
          title: '全部'
        })
      })
      .catch(error => {
        console.log(error)
      })
    this.$axios.get('ZGS_2')
      .then(res => {
        that.imgs = res.data.message
        console.log(that.imgs)
      })
      .catch(error => {
        console.log(error)
      })
  }
}
// methods: {
//   loadImg (id) {
//     this.$axios.get('ZGS_2')
//       .then(res => {
//         that.imgs = res.data.message
//         console.log(that.imgs)
//       })
//       .catch( (error) => {
//         console.log(error);
//       })
//   }
// }
</script>
<style scoped>
.photo-header li {
  list-style: none;
  display: inline-table;
  margin-left: 10px;
  height: 30px;
}
.photo-header ul {
  /*强制不换行*/
  white-space: nowrap;
  overflow-x: auto;
  padding-left: 0px;
  margin: 5px;
}
.photo-list li {
  list-style: none;
  position: relative;
}
.photo-list li img {
  width: 100%;
  height: 230px;
  vertical-align: top;
}
.photo-list ul {
  padding-left: 0px;
  margin: 0;
}
.photo-list p {
  position: absolute;
  bottom: 0px;
  color: white;
  background-color: rgba(0, 0, 0, 0.3);
  margin-bottom: 0px;
}
.photo-list p span:nth-child(1) {
  font-weight: bold;
  width: 80%;
  font-size: 16px;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: block;
  overflow: hidden;
}
.photo-list p span:nth-child(3){
  width: 99%;
  display: block;
  text-align: left;
}
.mui-bar.mui-bar-nav {
  margin-top: 200px;
}
</style>
