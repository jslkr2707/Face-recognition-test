function upload() {
    var a=document.querySelector(".file-upload-image")
    var b=a.getAttribute("src")
    localStorage.setItem("b", b)
    console.log(b)
    window.location.href="result.html"
}
function result() {
    var b=localStorage.getItem("b")
    var c=document.querySelector("img")
    c.setAttribute("src", b)
}
