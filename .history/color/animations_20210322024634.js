function overLG () {
    var hello = document.getElementById("lg")
    hello.style.WebkitAnimation = "appear 0.5s linear"
    hello.style.opacity = 1
}
function offLG () {
    var hello = document.getElementById("lg")
    hello.style.WebkitAnimation = "disappear 0.5s linear"
    hello.style.opacity = 0
}