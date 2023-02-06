let DIV=document.getElementById("Lists")
let BTTN=document.getElementById("AddBttn")
let TEXTFIELD=document.getElementById("text")
let DATE=document.getElementById("date")
let DELETE=document.getElementById('DltBttn')

BTTN.addEventListener('click',function () {
    let Adder=document.createElement('div');
    Adder.innerText=TEXTFIELD.value+' '+DATE.value;
    DIV.appendChild(Adder);
    TEXTFIELD.value=" ";
    DATE.value=" ";
    DELETE.addEventListener('click',function () {
        Adder.remove();
    })
})