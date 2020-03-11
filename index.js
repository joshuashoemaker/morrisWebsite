function navBarChange () {
  const viewH = window.innerHeight
  const scrollH = window.scrollY
  if (scrollH > viewH / 2) {
    document.getElementsByTagName('nav')[0].setAttribute('class', 'alterNav')
  } else {
    document.getElementsByTagName('nav')[0].setAttribute('class', '')
  }
}

function jumpto (anchor) {
  window.location.href = '#' + anchor
}

window.addEventListener('scroll', function (e) {
  navBarChange()
})
