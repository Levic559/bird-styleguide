function over () {
    var hello = document.body.querySelector(this)
    hello.style.WebkitAnimation = "appear 0.5s linear"
    hello.style.opacity = 1
}
function off () {
    var hello = document.body.querySelector(this)
    hello.style.WebkitAnimation = "disappear 0.5s linear"
    hello.style.opacity = 1
}