const x = document.querySelector('h1')

function changeColor() {
  console.log('clicked')
  if (x.style.color === 'blue') {
    x.style.color = 'lavender'
  }
  else {
    x.style.color = 'blue'
  }
}