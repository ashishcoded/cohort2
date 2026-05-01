var arr = [
    { dp: "https://4kwallpapers.com/images/walls/thumbs_3t/25354.jpg", story: "https://4kwallpapers.com/images/walls/thumbs_3t/1716.jpg" },
    { dp: "https://4kwallpapers.com/images/walls/thumbs_3t/6643.jpg", story: "https://4kwallpapers.com/images/walls/thumbs_2t/6346.jpg" },
    { dp: "https://4kwallpapers.com/images/walls/thumbs_3t/26251.jpg", story: "https://4kwallpapers.com/images/walls/thumbs_2t/7840.jpg", },
    { dp: "https://4kwallpapers.com/images/walls/thumbs_3t/25421.jpg", story: "https://4kwallpapers.com/images/walls/thumbs_2t/2250.jpg", },
    { dp: "https://wallpaperaccess.com/full/18540923.jpg", story: "https://wallpaperaccess.com/full/18540948.jpg", },
    { dp: "https://4kwallpapers.com/images/walls/thumbs_3t/5413.jpg", story: "https://4kwallpapers.com/images/walls/thumbs_2t/19003.jpg", },
    { dp: "https://4kwallpapers.com/images/walls/thumbs_2t/16334.jpg", story: "https://4kwallpapers.com/images/walls/thumbs_2t/6949.jpg", }

]

var storiyan = document.querySelector("#storiyan")


var clutter = ""
arr.forEach(function (elem, idx) {
    clutter += `<div class="story">
                <img id="${idx}" src="${elem.dp}" alt="">
            </div>`


})

document.querySelector("#storiyan").innerHTML = clutter


storiyan.addEventListener("click", function (dets) {
    document.querySelector("#full-screen").style.display = "block"
    document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`


    setTimeout(function () {
        document.querySelector("#full-screen").style.display = "none"
    }, 3000)

}) 