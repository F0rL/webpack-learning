//如果设置的是usage，可以省略下行
//import "@babel/polyfill"; 

// const dom = document.createElement("h1");
// dom.innerText = "learning webpack";
// document.getElementById("app").appendChild(dom);

// import logo from "./asserts/logo.jpg";
// import "./asserts/reset.scss";

// let img = new Image();
// img.src = logo;
// img.classList.add("logo");
// document.getElementById("app").appendChild(img);

// console.log("watch````````````");

// const btn = document.createElement("button");
// btn.innerText = "click add";
// btn.addEventListener("click", () => {
//   const addNode = document.createElement("p");
//   addNode.innerText = "item";
//   document.getElementById("app").appendChild(addNode);
// });
// document.getElementById("app").appendChild(btn);

// 模块热更新
// import number from './number'
// import counter from './counter'
// number()
// counter()

// if(module.hot){
//   module.hot.accept('./number.js', ()=>{
//     let num = document.getElementById('number')
//     document.getElementById("app").removeChild(num)
//     number()
//   })
// }

// babel使用
// const arr = [new Promise(() => {}), new Promise(() => {})];

// arr.map(item => {
//   console.log(item);
// });


import React, { Component } from 'react'
import ReactDOM from 'react-dom'
class App extends Component {
  render() {
    return (
      <div className="react">
        hello React
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'))