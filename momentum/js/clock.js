const clock = document.querySelector("#clock");

function getClock() {
    const date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    s = String(s);
    h = String(h);
    m = String(m);
    h = h.padStart(2, "0");
    m = m.padStart(2, "0");
    s = s.padStart(2, "0");
    
    clock.innerText = (`${h}:${m}:${s}`);
}

getClock();
setInterval(getClock, 1000);
