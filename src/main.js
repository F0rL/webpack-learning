const dom = document.createElement("h1");
dom.innerText = "learning webpack";
document.body.appendChild(dom);

//import './asserts/style.css'
import logo from './asserts/logo.jpg'
import style from "./asserts/main.scss";
import createLogo from "./createLogo";

createLogo();

let img = new Image();
img.src = logo;
img.classList.add(style.logo)
document.body.appendChild(img);
