//Rekor List
let parent = localStorage.currParent
let child = localStorage.currChild
let data = JSON.parse(localStorage.getItem(parent))
// data[child].push(localStorage.currLevel)
// localStorage.setItem(parent, JSON.stringify(data))
// console.log(data[child])
const updateName = () => {
    document.querySelector('#rekor-namaOrtu').innerHTML = `Nama Orang Tua: \n<strong>${localStorage.parentNameDisplay}</strong>`
    document.querySelector('#rekor-namaAnak').innerHTML =  `Nama Anak: \n<strong>${localStorage.childNameDisplay}</strong>`
    // document.querySelector('#namaOrtu').innerHTML = `<strong>${localStorage.parentNameDisplay}</strong>`
    // document.querySelector('#namaAnak').innerHTML =  `<strong>${localStorage.childNameDisplay}</strong>`
}
window.onload = updateName()  //Instantly update name
    
let rekorList = document.querySelector('.rekorList')
for (let i = 0; i < data[child].length; i++) {
    let newLi = document.createElement('li')
    let newText = document.createTextNode(`${i + 1}. ${data[child][i]}`)
    newLi.appendChild(newText)
    rekorList.appendChild(newLi)   
}

let clearBtn = document.querySelector('#clearHistoryBtn')
clearBtn.addEventListener('click', (e) => {
    data[child] = []
    localStorage.setItem(parent, JSON.stringify(data))
    window.location.reload()
})