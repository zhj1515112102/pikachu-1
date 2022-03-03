import string from './css.js'

const demo = document.querySelector('#demo')
const demo2 = document.querySelector('#demo2')
let n = 1
time=100;
let id;

const player = {
    init:()=>{
        demo.innerText = string.substring(0,n);
        demo2.innerHTML = string.substring(0,n);
        player.play();
        player.bindEvents();
    },
    bindEvents:()=>{
        //执行触发器，player.pause()是执行方法pause，相当于调用了一个方法，而不会执行计时器
        document.querySelector('#btnPause').onclick = player.pause;
        document.querySelector('#btnPlay').onclick = () =>{
            window.clearInterval(id);//避免动画叠加
            player.play();
            console.log('playid:'+id);
        }
        document.querySelector('#btnSlow').onclick = player.slow;
        document.querySelector('#btnNormal').onclick = player.normal;
        document.querySelector('#btnFast').onclick = player.fast;
    },
    run:()=>{
        n+=1;
        // console.log(n+':'+string.substring(0,n))
        demo.innerText = string.substring(0,n)
        demo2.innerHTML = string.substring(0,n)
        if(n>string.length){
            window.clearInterval(id)
            console.log('终止')
            return
        }
        demo.scrollTop = demo.scrollHeight;
    },
    play:()=>{
        return id = setInterval(player.run,time);
    },
    pause:()=>{
        window.clearInterval(id);
    },
    slow : () =>{
        player.pause();
        time=300;
        player.play();
    },
    normal : ()=> {
        player.pause();
        time = 100;
        player.play();
    },
    fast : () =>{
        player.pause();
        time=0;
        player.play();
    },
}

player.init();
