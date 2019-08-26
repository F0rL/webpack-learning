function number(){
  const num = document.createElement('p')
  num.innerText = 2000
  num.setAttribute('id','number')
  document.getElementById('app').appendChild(num)
}

export default number