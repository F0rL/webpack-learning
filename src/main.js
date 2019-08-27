//import _ from 'lodash'  同步载入

// 懒加载
async function getComponent(){
    const { default: _ } = await import(/* webpackChunkName: "lodash" */ 'lodash')
    const el = document.createElement('p')
    el.innerText = _.join(['Dell','Lee'],'-')
    return el
}
document.addEventListener('click',()=>{
  getComponent().then(e => {
    document.body.appendChild(e)
  })
})

// 如果不配置cacheGroups，则打包成 0.js
// function getComponent(){
//   return import('lodash').then(({ default: _ }) => {
//     let el = document.createElement('p')
//     el.innerText = _.join(['Dell','Lee'],'-')
//     return el
//   })
// }

// getComponent().then(e => {
//   document.body.appendChild(e)
// })
