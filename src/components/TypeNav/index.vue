<template>
    <div class="type-nav">
        <div class="container">
            <!-- 事件委托，将方法交给父节点去执行 -->
            <div  @mouseleave="removeColor()" @mouseenter="changeShow()">
                <h2 class="all">全部商品分类</h2>
                <!-- 过渡动画 -->
                <transition name="sort">
                    <!-- 三级联动 -->
                    <div class="sort" v-show="show">
                        <div class="all-sort-list2" @click="goSearch">
                            <div class="item" v-for="(c1, index) in categoryList" :key="c1.categoryId" :class="{cur:currentIndex == index}">
                                <h3 @mouseenter="changeIndex(index)">
                                    <a :data-categoryName="c1.categoryName" :data-category1Id="c1.categoryId">{{c1.categoryName}}</a>
                                    <!-- <router-link to="/search">{{c1.categoryName}}</router-link> -->
                                </h3>
                                <!-- 二级、三级分类 -->
                                <div class="item-list clearfix">
                                    <div class="subitem" v-for="(c2, index) in c1.categoryChild" :key="c2.categoryId">
                                        <dl class="fore">
                                            <dt>
                                                <a :data-categoryName="c1.categoryName" :data-category2Id="c2.categoryId">{{c2.categoryName}}</a>
                                                <!-- <router-link to="/search">{{c2.categoryName}}</router-link> -->
                                            </dt>
                                            <dd>
                                                <em v-for="(c3, index) in c2.categoryChild" :key="c3.categoryId">
                                                    <a :data-categoryName="c1.categoryName" :data-category3Id="c3.categoryId">{{c3.categoryName}}</a>
                                                    <!-- <router-link to="/search">{{c3.categoryName}}</router-link> -->
                                                </em>
                                                
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </transition>

            </div>
            <nav class="nav" >
                <a href="###">服装城</a>
                <a href="###">美妆馆</a>
                <a href="###">尚品汇超市</a>
                <a href="###">全球购</a>
                <a href="###">闪购</a>
                <a href="###">团购</a>
                <a href="###">有趣</a>
                <a href="###">秒杀</a>
            </nav>

        </div>
    </div> 
</template>

<script>
import {mapState} from 'vuex';
import throttle from "lodash/throttle"
export default {
    name: 'TypeNav',
    data(){
        return {
            // 存储用户鼠标移动到了哪个一级分类
            currentIndex: -1,
            show: true
        }
    },
    // 组件挂载完毕，就可以发请求了
    mounted(){
        // 加载数据
        // this.$store.dispatch('categoryList')
        if (this.$route.path == "/search"){
            this.show = false
        }
    },
    computed:{
        ...mapState({
            categoryList:state=>state.home.categoryList
        })
    },
    methods:{
        // changeIndex(index){
        //     this.currentIndex = index
        //     console.log(index);
        //     // alert(this.currentIndex)
        // },
        changeIndex: throttle(function(index){
            this.currentIndex = index
        }, 50),
        goSearch(event){

            let targetNode = event.target
            // 直接获取标签是A还是H3之类的。。。。
            // console.log(targetNode.nodeName) 
            let {categoryname, category1id, category2id, category3id} = targetNode.dataset
            if(categoryname){
                // 整理路由跳转参数
                var locations = {name:'search', query: {categoryName:categoryname}, };

                if(category1id){
                    locations.query.category1Id = category1id
                } else if(category2id) {
                    locations.query.category2Id = category2id
                } else if(category3id){
                    locations.query.category3Id = category3id
                }
            }
            // 判断，如果路由跳转的时候，带有params参数，则带上params参数
            if(this.$route.params){
                locations.params = this.$route.params
            }
            //目前商品分类这里携带参数只有query参数
            this.$router.push(locations);
        },
        changeShow(){
            if (this.$route.path != "/home"){
                this.show = true
             }
        },
        removeColor(){
            this.currentIndex = -1;
            if (this.$route.path != "/home"){
                this.show = false
             }
        }
    }
}
</script>

<style scoped lang="less">
    .type-nav {
        border-bottom: 2px solid #e1251b;

        .container {
            width: 1200px;
            margin: 0 auto;
            display: flex;
            position: relative;

            .all {
                width: 210px;
                height: 45px;
                background-color: #e1251b;
                line-height: 45px;
                text-align: center;
                color: #fff;
                font-size: 14px;
                font-weight: bold;
            }

            .nav {
                a {
                    height: 45px;
                    margin: 0 22px;
                    line-height: 45px;
                    font-size: 16px;
                    color: #333;
                }
            }

            .sort {
                position: absolute;
                left: 0;
                top: 45px;
                width: 210px;
                height: 461px;
                position: absolute;
                background: #fafafa;
                z-index: 999;

                .all-sort-list2 {
                    .item {
                        h3 {
                            line-height: 30px;
                            font-size: 14px;
                            font-weight: 400;
                            overflow: hidden;
                            padding: 0 20px;
                            margin: 0;

                            a {
                                color: #333;
                            }
                        }

                        .item-list {
                            display: none;
                            position: absolute;
                            width: 734px;
                            min-height: 460px;
                            background: #f7f7f7;
                            left: 210px;
                            border: 1px solid #ddd;
                            top: 0;
                            z-index: 9999 !important;

                            .subitem {
                                float: left;
                                width: 650px;
                                padding: 0 4px 0 8px;

                                dl {
                                    border-top: 1px solid #eee;
                                    padding: 6px 0;
                                    overflow: hidden;
                                    zoom: 1;

                                    &.fore {
                                        border-top: 0;
                                    }

                                    dt {
                                        float: left;
                                        width: 54px;
                                        line-height: 22px;
                                        text-align: right;
                                        padding: 3px 6px 0 0;
                                        font-weight: 700;
                                    }

                                    dd {
                                        float: left;
                                        width: 415px;
                                        padding: 3px 0 0;
                                        overflow: hidden;

                                        em {
                                            float: left;
                                            height: 14px;
                                            line-height: 14px;
                                            padding: 0 8px;
                                            margin-top: 5px;
                                            border-left: 1px solid #ccc;
                                        }
                                    }
                                }
                            }
                        }

                        &:hover {
                            .item-list {
                                display: block;
                            }
                        }
                    }
                    .cur{
                        background: skyblue;
                    }
                }
            }

            // 过渡动画的样式
            // 过渡动画开始（进入
            .sort-enter {
                height: 0px;
                // transform: rotate(0deg);
                opacity: 0;
            }
            // 过渡动画结束（进入
            .sort-enter-to {
                height: 461px;
                // transform: rotate(360deg);
                opacity: 1;
            }
            // 定义动画的时间、速率
            .sort-enter-active {
                transition: all .1s linear;
            }
        }
    }
</style>