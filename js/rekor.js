//Rekor List
let parent = localStorage.currParent
let child = localStorage.currChild
let data = JSON.parse(localStorage.getItem(parent))
data[child].push(localStorage.currLevel)
localStorage.setItem(parent, JSON.stringify(data))
console.log(data[child])
const updateName = () => {
    document.querySelector('#rekor-namaOrtu').innerText = `Nama Orang Tua: ${parent}`
    document.querySelector('#rekor-namaAnak').innerText =  `Nama Anak: ${child}`
}
window.onload = updateName()  //Instantly update name



//Loop through the stressLvl array then print
let rekorList = document.querySelector('.rekorList')
// for (const stressLvl of localStorage.currLevel) { 
//     let newLi = document.createElement('li')
//     let newText = document.createTextNode(`${counter}. ${stressLvl}`)
//     counter++
//     newLi.appendChild(newText)
//     rekorList.appendChild(newLi)
// }

for (let i = 0; i < data[child].length; i++) {
    let newLi = document.createElement('li')
    let newText = document.createTextNode(`${i + 1}. ${data[child][i]}`)
    newLi.appendChild(newText)
    rekorList.appendChild(newLi)   
}