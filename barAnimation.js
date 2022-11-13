const bar = document.querySelector("#result-bar .bar");

let dog = 35, cat = 40; //false data
let t = 0;
bar.style.width = 0
const barAnimation = setInterval(() => {
    bar.style.width =  t + '%'
    t++ >= dog && clearInterval(barAnimation)
}, 10)
