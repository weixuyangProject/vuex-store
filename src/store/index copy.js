// import Vue from 'vue'
// import Vuex from 'vuex'

// Vue.use(Vuex)

// const store = new Vuex.Store({
//     state:{
//         count:3
//     },
//     getters:{
//         getCount(state){
//             return state.count
//         }
//     },
//     // mutations中的是同步
//     mutations:{
//         add(state,num){
//             state.count += num
//         },
//         substrict(state,num){
//             state.count -= num
//         }
//     },
//     // actions中的是异步
//     actions:{
//         asyncSubstrict(context,num){
//             // 模拟异步
//             setTimeout(() => {
//                 // 如何调用mutations?
//                 context.commit('substrict',num)
//             }, 1000);
//         }
//     }
// })

// export default store