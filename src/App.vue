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
  }
}
</script>

<style>

</style>