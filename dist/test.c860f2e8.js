let string = importScripts('./css.js');
let n = 1;
demo.innerText = string.substring(0, n);
demo2.innerHTML = string.substring(0, n);
console.log(n);
let id = setInterval(()=>{
    n += 1;
    console.log(n + ':' + string.substring(0, n));
    demo.innerText = string.substring(0, n);
    demo2.innerHTML = string.substring(0, n);
    if (n > string.length) {
        window.clearInterval(id);
        console.log('终止');
    }
    demo.scrollTop = demo.scrollHeight;
}, 0);

//# sourceMappingURL=test.c860f2e8.js.map
