import './asserts/reset.scss'
import './asserts/style.scss'

const ele = document.createElement('p')
ele.innerText = 'box more'
ele.setAttribute('id', 'box')
document.getElementById('app').appendChild(ele)