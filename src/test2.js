import string from './css.js'
let n = 1
demo.innerText = string.substring(0,n)
demo2.innerHTML = string.substring(0,n)
console.log(n)

const run=()=>{
    n+=1;
    // console.log(n+':'+string.substring(0,n))
    demo.innerText = string.substring(0,n)
    demo2.innerHTML = string.substring(0,n)
    if(n>string.length){
        window.clearInterval(id)
        console.log('终止')
    }
    demo.scrollTop = demo.scrollHeight;
}
time=100;

const play=()=>{
    return setInterval(run,time);
}
let id= play();
const pause=()=>{
    window.clearInterval(id);
}
const slow = () =>{
    pause();
    time=300;
    id=play();
}
const normal = ()=> {
    pause();
    time = 100;
    id=play();
}
const fast = () =>{
    pause();
    time=0;
    id=play();
}
btnPause.onclick = ()=>{
    pause();
}
btnPlay.onclick = () =>{
    window.clearInterval(id);
    id=play();
    console.log('playid:'+id)  
}
btnSlow.onclick = slow;
btnNormal.onclick = normal;
btnFast.onclick = fast;