<template>
  <div>
    <!-- 三级联动全局组件，已经在main.js里面注册为全局组件，不需要重新引入，直接使用即可 -->
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <Recommend></Recommend>
    <Rank></Rank>
    <Like></Like>
    <Floor></Floor>
    <Brand></Brand>
  </div>
</template>

<script>
import ListContainer from '@/views/Home/ListContainer';
import Recommend from '@/views/Home/Recommend';
import Rank from '@/views/Home/Rank';
import Like from '@/views/Home/Like';
import Floor from '@/views/Home/Floor';
import Brand from '@/views/Home/Brand';
import { mapState, add } from 'vuex';
export default {
  name: '',
  components:{
    ListContainer,
    Recommend,
    Rank,
    Like,
    Floor,
    Brand
  },
  computed:{
    ...mapState(['count'])
  }
}
</script>

<style>

</style>



<!-- vue视频P19 -->