var main = document.querySelector("main")
var cusror = document.querySelector("#cursor")



main.addEventListener("mousemove",function(dets){
    console.log(dets.x)
   

    cusror.style.left = dets.x +"px"
    cusror.style.top = dets.y +"px"
})