function getComponent(){
  return import(/* webpackChunkName: "lodash" */ 'lodash').then(({ default: _ }) => {
    let el = document.createElement('p')
    el.innerText = _.join(['Dell','Lee'],'-')
    return el
  })
}

// function getComponent(){
//   return import('lodash').then(({ default: _ }) => {
//     let el = document.createElement('p')
//     el.innerText = _.join(['Dell','Lee'],'-')
//     return el
//   })
// }

getComponent().then(e => {
  document.body.appendChild(e)
})
// document.addEventListener('click',()=>{
//   getComponent().then(e => {
//     document.body.appendChild(e)
//   })
// })