<template>
  <div>
    <Header></Header>
    <!-- 路由組件出口的地方 -->
    <router-view></router-view>
    <!-- // 在home、search显示，在login、register隐藏 -->

    <Footer v-show=$route.meta.show></Footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
export default {
  components:{
    Header,
    Footer
  },
  mounted(){
    console.log("我是根组件")
    // 在根组件，派发一个action，获取三级列表数据，这样就可以减少网络资源的消耗了
    this.$store.dispatch('categoryList')
  }
}
</script>

<style>

</style>