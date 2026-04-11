
let count = 0 
let totalCOUNT = 0
let countEl = document.getElementById("count-el") 

function increment() {

    count = count + 1
    countEl.innerText = count
}

function save() {
    
    
    previous_count()
    
}

let previousCOUNT = document.getElementById("previous-count");


function previous_count() {
    totalCOUNT += count 
    previousCOUNT.innerText += " "+ `${count}` + " - "
    countEl.innerText = 0 
    count = 0
    
}

function totalC() {
    previousCOUNT.innerText =  `Total People's Count of today : ${totalCOUNT}`
    totalCOUNT = 0
    setInterval(() => {
    location.reload();
    }, 1000);

}