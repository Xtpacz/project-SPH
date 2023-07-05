import {reqCategoryList} from '@/api';
const state={
    categoryList: [],
};
const mutations={
    categoryList(state, categoryList){
        console.log(categoryList)
        state.categoryList = categoryList
    }
};
const actions={
    async categoryList({commit}){
        let res = await reqCategoryList()
        console.log(res)
        if(res.code == 200) {
            commit('categoryList', res.data)
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