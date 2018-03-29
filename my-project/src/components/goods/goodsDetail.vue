<template>
  <div class="tmpl">
    <nav-bar title="商品详情"></nav-bar>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(img,index) in imgs" :key="index"><a :href="img.url"><img :src="img.img" alt=""></a></mt-swipe-item>
    </mt-swipe>
    <div class="desc">
        <ul>
            <li>
                <h3 class="desc-h3">
                    {{ducts.title}}
                </h3>
            </li>
            <li class="price-li">
                市场价 :<s>￥{{ducts.market}}</s> 销售价 ：<span>￥{{ducts.sell}}</span>
            </li>
            <li class="number-li">
                购买数量：
                <!-- <div class="mui-numbox"  data-numbox-step='10' data-numbox-min='0' data-numbox-max='100'>
                    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
                    <input class="mui-numbox-input" type="number" value="1">
                    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
                </div> -->
                <div class="mui-numbox" data-numbox-min='0'>
                    <button class="mui-btn mui-numbox-btn-minus" type="button">-</button>
                    <input class="mui-numbox-input" type="number"/>
                    <button class="mui-btn mui-numbox-btn-plus" type="button">+</button>
                </div>
            </li>
            <li>
                <mt-button >立即购买</mt-button>
                <mt-button >加入购物车</mt-button>
            </li>
        </ul>
    </div>
    <div class="product-props">
        <ul>
            <li>商品参数</li>
            <li>商品货号: {{ducts.id}}</li>
            <li>库存:{{ducts.stock}}件 </li>
            <li>上架时间: {{ducts.add_time}}</li>
        </ul>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      imgs: [],
      ducts: []
    }
  },
  created () {
    this.$axios.get('tu')
      .then(res => {
        console.log(res.data.message)
        this.imgs = res.data.message
      })
    this.$axios.get('ZGS_2')
      .then(res => {
        console.log(res)
        console.log(22222222)
        console.log(this.ducts)
        this.ducts = res.data.message[0]
      })
      .catch(err => {
        console.log(err)
      })
  }
}
</script>
<style scoped>
li{
    text-align: left;
    padding: 4px 4px;
}
.desc-h3{
    display: block;
    border-bottom: 1px solid #555;
}
.desc{
    border: 1px solid rgba(126, 119, 119, 0.2);
    border-radius: 8px;
    margin: 2px 0;
}
.product-props{
    text-align: left;
    padding: 4px 4px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.4)
}
.price-li>span{
    color: red;
    font-weight: 600;
}
</style>
