const awal = document.getElementById('awal');
const ul = document.getElementById('list');

let awalOffset = awal.getBoundingClientRect();
console.log(awalOffset);

setTimeout(()=>{
    document.getElementById('awal').style.color = 'green'
    awal.innerText = "Game Start";
    awal.removeAttribute('class');
    awalOffset.left = 100;
},9000)


const belt = document.getElementById('belt');
console.log(belt);
setInterval(()=>{
    const span = document.createElement('span');
    let tentu = Math.floor(Math.random() * 10);
    if (tentu >6){
        span.innerText =Math.floor(Math.random() * 10);
        belt.appendChild(span); 
    }
    else {
        span.innerText = "-";
        belt.appendChild(span);
    }
    if(document.getElementById('belt').childElementCount == 10){
        var list = document.getElementById('belt');
        list.removeChild(list.childNodes[1]);
    }
},1000);

const belt2 = document.getElementById('belt2');
console.log(belt2);
setInterval(()=>{
    const span2 = document.createElement('span2');
    let tentu = Math.floor(Math.random() * 10);
    if (tentu >6){
        span2.innerText = Math.floor(Math.random() * 10);
        belt2.appendChild(span2); 
    }
    else {
        span2.innerText = "-";
        belt2.appendChild(span2);
    }
    if(document.getElementById('belt2').childElementCount == 10){
        var list = document.getElementById('belt2');
        list.removeChild(list.childNodes[1]);
    }
},500);

const belt3 = document.getElementById('belt3');
console.log(belt3);
setInterval(()=>{
    const span3 = document.createElement('span3');
    let tentu = Math.floor(Math.random() * 10);
    if (tentu >7){
        span3.innerText = Math.floor(Math.random() * 10);
        belt3.appendChild(span3); 
    }
    else {
        span3.innerText = "-";
        belt3.appendChild(span3);
    }
    if(document.getElementById('belt3').childElementCount == 10){
        var list = document.getElementById('belt3');
        list.removeChild(list.childNodes[1]);
    }
},250);


function tambah() {
    let sementara = document.getElementById("hasil").innerHTML
    let atas =  document.getElementById('belt').firstElementChild.innerHTML;
    a=parseInt(sementara)
    b=parseInt(atas)
    let temp =a+b
    if(isNaN(temp)){
        temp="0";
    }
    document.getElementById("hasil").innerHTML = temp
}

function kurang() {
    let sementara = document.getElementById("hasil").innerHTML
    let atas =  document.getElementById('belt2').firstElementChild.innerHTML;
    a=parseInt(sementara)
    b=parseInt(atas)
    let temp =a-b
    if(isNaN(temp)){
        temp="0";
    }
    document.getElementById("hasil").innerHTML = temp
}

function kali() {
    let sementara = document.getElementById("hasil").innerHTML
    let atas =  document.getElementById('belt3').firstElementChild.innerHTML;
    a=parseInt(sementara)
    b=parseInt(atas)
    let temp =a*b
    if(isNaN(temp)){
        temp="0";
    }
    document.getElementById("hasil").innerHTML = temp
}

function cek(){
    let test=document.getElementById("hasil").innerHTML
    if (test!=40){
        document.getElementById("test").innerHTML="Nilai Tidak Tepat Harap Mengulang"
        document.getElementById("hasil").innerHTML="0"
    }
    else {
        document.getElementById("test").innerHTML="SELAMAT ANDA MENANG"
    }
}
function reset(){
    document.getElementById("test").innerHTML=""
    document.getElementById("hasil").innerHTML="0"
}