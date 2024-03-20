import { tablazat } from "./fuggvenyek.js";
import { AUTOK } from "./adat.js";

const marvolt = [];

console.log(tablazat(AUTOK))
const TABLAZAT = document.getElementById("tartalom")
TABLAZAT.innerHTML = tablazat(AUTOK)
const TABLAZATELEM = document.getElementsByClassName("tulajdonsag")
const KIVALASZTOTT = document.querySelectorAll(".kivalasztottak")[0]
for(let i = 0; i<TABLAZATELEM.length;i++){
    TABLAZATELEM[i].addEventListener("click", kattintas)
}
function kattintas(event){
    if(marvolt.indexOf(event.target.innerHTML) < 0){
        marvolt.push(event.target.innerHTML)
            KIVALASZTOTT.innerHTML = `<li>${marvolt}</li>`
    }
}
TABLAZAT.addEventListener("mouseover", kivalasztas)
function kivalasztas(event){
    TABLAZAT.classList.add("kiv")
}