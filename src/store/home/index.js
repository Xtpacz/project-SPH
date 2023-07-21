import {reqCategoryList, reqGetBannerList} from '@/api';
const state={
    categoryList: [],
    bannerList: []
};
const mutations={
    categoryList(state, categoryList){
        console.log(categoryList)
        state.categoryList = categoryList
    },
    GETBANNERLIST(state, bannerList){
        state.bannerList = bannerList
    }
};
const actions={
    async categoryList({commit}){
        let res = await reqCategoryList()
        console.log(res)
        if(res.code == 200) {
            commit('categoryList', res.data)
        }
    },
    // 获取首页banner
    async getBannerList({commit}){
        let res = await reqGetBannerList();
        if (res.code == 200){
            commit('GETBANNERLIST', res.data)
        }
    }
};
const getters={};


export default {
    state,
    mutations,
    actions,
    getters
}