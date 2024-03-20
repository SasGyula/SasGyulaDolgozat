export function tablazat(lista){
    let txt = "<table>"
    txt += "<tr>"
    txt += "<th>Név</th>"
    txt += "<th>Szín</th>"
    txt += "<th>Ár</th>"
    txt += "</tr>"
    for(let i = 0; i<lista.length; i++){
        txt+= "<tr>"
        txt+= `<td class="tulajdonsag">${lista[i].nev}</td>`
        txt+= `<td class="tulajdonsag">${lista[i].szin}</td>`
        txt+= `<td class="tulajdonsag">${lista[i].ar} €</td>`
        txt+= "</tr>"
    }
    txt +="</table>"
    return txt
}