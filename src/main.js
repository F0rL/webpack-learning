import './asserts/reset.scss'
import './asserts/style.scss'
import ui from './jquery.ui'

ui()
const dom = $('<div>')
dom.html(_.join(['kuma','forl'],'----'))
$('#app').append(dom)