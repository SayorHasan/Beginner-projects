


let count = 0 ;
let countEl = document.getElementById("count-el") ;

function increment() {

    count = count + 1;
    countEl.innerText = count;
}

function save() {
    
    countEl.innerText = `People entered: ${countEl.innerText}`
    previous_count();
    
}

let previousCOUNT = document.getElementById("previous-count");
previousCOUNT.innerText = "Previous count "

function previous_count() {
    previousCOUNT.innerText +=  " - "+ `${count}`
    
}