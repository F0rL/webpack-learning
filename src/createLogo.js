import logo from './asserts/logo.jpg'
function createLogo(){
  let img = new Image()
  img.src = logo
  img.classList.add('logo')
  document.body.appendChild(img)
}

export default createLogo