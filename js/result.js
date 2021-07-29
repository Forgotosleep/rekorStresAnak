const temperature = document.getElementById("temperature");
// const level = document.getElementById("level-stress");
const level = localStorage.currLevel
let desc = document.querySelector('#desc')
let solution = document.querySelector('#solution')
// let level = '4'

let descArr = ['Anak anda cukup bahagia', 'Anak anda mengalami stress ringan', 'Anak anda mengalami stress sedang!', 'Anak anda mengalami stress cukup berat!!', 'Anak anda mengalami stress berat!!!']
let solArr = ['Bangun suasana yang bisa membuat anak nyaman dan pastikan pola makan dan tidur anak sehat.', 'Luangkan waktu lebih untuk anak dan bantu anak memahami perasaannya.', 'Bantu anak menyadari jika ia sedang stress, jelaskan pada anak bahwa stress itu normal, selalu berikan dukungan positif, dan pastikan pola makan dan tidur anak sehat.', 'Dengarkan curahan hati sang anak, ajarkan cara mengelola emosi, luangkan waktu lebih untuk anak dan selalu berikan dukungan positif.', 'Luangkan waktu lebih untuk anak, ajarkan cara mengelola emosi, cari solusi bersama anak, selalu berikan dukungan positif dan pastikan pola tidur dan makan anak sehat.']

function setTemperature() {
  if (level === "5") {
    desc.innerText = descArr[4]
    solution.innerText = solArr[4]
    temperature.style.height = 100 + "%";
    temperature.style.borderRadius = 20 + "px";
  }
  if (level === "4") {
    temperature.style.height = 79 + "%"
    desc.innerText = descArr[3]
    solution.innerText = solArr[3]
  }
  else {
    temperature
  }
  if (level === "3") {
    temperature.style.height = 41 + "%"
    desc.innerText = descArr[2]
    solution.innerText = solArr[2]
  }
  else {
    temperature
  }
  if (level === "2") {
    temperature.style.height = 41 + "%"
    desc.innerText = descArr[1]
    solution.innerText = solArr[1]
  }
  else {
    temperature
  }
  if (level === "1") {
    temperature.style.height = 20 + "%"
    desc.innerText = descArr[0]
    solution.innerText = solArr[0]
  }
  else {
    temperature
  }
  // level === "4" ? temperature.style.height = 79 + "%" : temperature;
  // level === "3" ? temperature.style.height = 60 + "%" : temperature;
  // level === "2" ? temperature.style.height = 41 + "%" : temperature;
  // level === "1" ? temperature.style.height = 20 + "%" : temperature;
}
function result() {
  document.getElementById("result").innerHTML = level
  temperature.dataset.value = `Level ${level}`;
}

setTimeout(result, 5800);
setTimeout(setTemperature, 800);

let rekorButton = document.querySelector('#rekorButton')
rekorButton.addEventListener('click', () => {
  window.open('./rekor.html', '_self')
})

