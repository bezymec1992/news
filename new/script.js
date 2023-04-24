const cross = document.getElementById("cross");
const overlay = document.getElementById("overlay");
const body = document.querySelector("body");
const btn = document.getElementById("btn");

//data -5 days
var dt = new Date();
document.getElementById("datetime").innerHTML = (("0"+dt.getDate()).slice(-2)-5) +"."+ (("0"+(dt.getMonth()+1)).slice(-2)) +"."+ (dt.getFullYear()) +" ";



//click cross to close popup
cross.addEventListener("click", () => {
    body.classList.toggle("show");
    body.style = "overflow-y: visible";
});
//click overlay to close popup
overlay.addEventListener("click", () => {
    body.classList.toggle("show");
    body.style = "overflow-y: visible";
});
//click btn to close popup
btn.addEventListener("click", () => {
    body.classList.toggle("show");
    body.style = "overflow-y: visible";
});

//popup interval 20sec
var intervalID = window.setInterval(myCallback, 20000);
function myCallback() {
    body.classList.add("open");
}

//popup open when mouse leave from site
const ht = document.querySelector("html");
ht.addEventListener("mouseleave", () => {
    body.classList.add("open");
    body.classList.remove("show");
    body.style = "overflow-y: hidden";
})