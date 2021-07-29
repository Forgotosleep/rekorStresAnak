//Rekor List
let parent = localStorage.currParent
let child = localStorage.currChild
let data = JSON.parse(localStorage.getItem(parent))
let counter = 1
const updateName = () => {
    document.querySelector('#rekor-namaOrtu').innerText = `Nama Orang Tua: ${parent}`
    document.querySelector('#rekor-namaAnak').innerText =  `Nama Anak: ${child}`
}
window.onload = updateName()  //Instantly update name


//Loop through the stressLvl array then print
let rekorList = document.querySelector('.rekorList')
for (const stressLvl of data[child]) { 
    let newLi = document.createElement('li')
    let newText = document.createTextNode(`${counter}. ${stressLvl}`)
    counter++
    newLi.appendChild(newText)
    rekorList.appendChild(newLi)
}