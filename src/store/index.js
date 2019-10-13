/* eslint-disable no-console */
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        total: 0,
        goodsList:[],
    },
    mutations: {
        addGoods(state,payload){
            if(state.goodsList.find(item=>item.id===payload.id)){
                const index = state.goodsList.findIndex(item=>item.id===payload.id);
                state.goodsList[index].num += 1;
                // console.log(state.goodsList);
            }else{
                state.goodsList.push(payload);
            }
        },
        numChanged(state,payload){
            // console.log(payload);
            const index = state.goodsList.findIndex(item => item.id===payload.id)
            state.goodsList[index].num = payload.num;
            // console.log(state.goodsList);
        },
        delGoods(state,payload){
            // console.log(payload);
            state.goodsList.splice(payload.index,1);
            // console.log(state.goodsList);
        }
    },
    getters:{
        totalCount(state){
            let sum = 0;
            state.goodsList.forEach(item=>{
                sum += item.num;
            })
            state.total = sum;
            return state.total;
        },
        totalPrice(state){
            let sum = 0;
            state.goodsList.map(item=>{
                sum += item.num*item.price;
            })
            return sum;
        }
    }
});

export default store;
