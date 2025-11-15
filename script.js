let saveEl = document.getElementById("ent")
let zeroEl = document.getElementById("zero-el")
let count = 0

function inc(){
     count += 1
     zeroEl.textContent = count
}

function save(){
    let countStr = count + " - "
    saveEl.textContent += countStr
    zeroEl.textContent = 0
   


}
