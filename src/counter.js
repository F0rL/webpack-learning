function counter(){
  const num = document.createElement('p')
  num.innerText = 1
  num.onclick = function(){
    num.innerText = parseInt(num.innerText) + 1
  }
  document.getElementById('app').appendChild(num)
}

export default counter