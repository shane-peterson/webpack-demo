import x from './a.js'

console.log(x)
import jpg from './assets/1.jpg'

const div = document.getElementById('img')
div.innerHTML = `
  <img src="${jpg}" alt="Beautiful woman">
`

const button = document.createElement('button')
button.innerText = '懒加载'
button.onclick = () => {
  const promise = import('./lazy.js')
  promise.then((module) => {
    const fn = module.default
    fn()
  }, () => {
  })
}

document.body.appendChild(button)