const area = document.getElementsByTagName("area")
for (let i = 0; i < area.length; i++) {
    area[i].addEventListener("mouseover", function () {this.focus();}, false)
    area[i].addEventListener("mouseout", function () {this.blur();}, false)
}
const images = document.querySelectorAll(".image")
for (let i = 0; i < images.length; i++) {
    console.log(images[i])
    images[i].addEventListener("click", function() {
        document.body.style.background = `url('img/ink${i}.jpg') no-repeat center center fixed`
    })
}
