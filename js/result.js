const temperature = document.getElementById("temperature");
const termometer = document.getElementById("termometer");
// const level = document.getElementById("level-stress");
const level = localStorage.currLevel
// let desc = document.querySelector('#desc')
// let solution = document.querySelector('#solution')
// let level = '4'

let descArr = ['Anak anda cukup bahagia', 'Anak anda mengalami stress ringan', 'Anak anda mengalami stress sedang!', 'Anak anda mengalami stress cukup berat!!', 'Anak anda mengalami stress berat!!!', 'HATI-HATI, ANAK ANDA BISA JADI CALON PSIKOPAT (dan/atau Coder Brilian)']
let solArr = ['Bangun suasana yang bisa membuat anak nyaman dan pastikan pola makan dan tidur anak sehat.', 'Luangkan waktu lebih untuk anak dan bantu anak memahami perasaannya.', 
'Bantu anak menyadari jika ia sedang stress, jelaskan pada anak bahwa stress itu normal, selalu berikan dukungan positif, dan pastikan pola makan dan tidur anak sehat.', 
'Dengarkan curahan hati sang anak, ajarkan cara mengelola emosi, luangkan waktu lebih untuk anak dan selalu berikan dukungan positif.', 
'Luangkan waktu lebih untuk anak, ajarkan cara mengelola emosi, cari solusi bersama anak, selalu berikan dukungan positif dan pastikan pola tidur dan makan anak sehat.', 
'- Sebelum tidur, kunci ruangan anda\n- Kalau dia menawarkan makanan atau minuman, pastikan anda TIDAK mengkonsumsinya\n- Sebelum memakai sepatu, pastikan tidak ada paku atau benda tajam lain di dalamnya\n- Sebelum berangkat kerja, pastikan tidak ada benda tajam di dalam jangkauan anak anda\n- Waspadalah, waspadalah!']

//Untuk display logged in name
const updateName = () => {
  document.querySelector('#namaOrtu').innerHTML = `<strong>${localStorage.parentNameDisplay}</strong>`
  document.querySelector('#namaAnak').innerHTML =  `<strong>${localStorage.childNameDisplay}</strong>`
}
window.onload = updateName()  //Instantly update name

function setTemperature() {
  if (level === "6") {
    temperature.style.height = 105 + "%";
    temperature.style.borderRadius = 20 + "px";
  }
  if (level === "5") {
    temperature.style.height = 100 + "%";
    temperature.style.borderRadius = 20 + "px";
  }
  level === "4" ? temperature.style.height = 79 + "%" : temperature;
  level === "3" ? temperature.style.height = 60 + "%" : temperature;
  level === "2" ? temperature.style.height = 41 + "%" : temperature;
  level === "1" ? temperature.style.height = 20 + "%" : temperature;
}
function result() {
  document.getElementById("result").innerHTML = level
  temperature.dataset.value = `Level ${level}`;
  if (level === "6") {
    termometer.setAttribute("class", "termoGetar");
    temperature.setAttribute("class", "tempGetar");
    desc.innerText = descArr[5]
    solution.innerText = solArr[5]
  }
  else if (level === "5") {
    desc.innerText = descArr[4]
    solution.innerText = solArr[4]
  }
  else if (level === "4") {
    desc.innerText = descArr[3]
    solution.innerText = solArr[3]
  }
  else if (level === "3") {
    desc.innerText = descArr[2]
    solution.innerText = solArr[2]
  }
  else if (level === "2") {
    desc.innerText = descArr[1]
    solution.innerText = solArr[1]
  }
  else if (level === "1") {
    desc.innerText = descArr[0]
    solution.innerText = solArr[0]
  }
}

setTimeout(result, 5800);
setTimeout(setTemperature, 800);

let rekorButton = document.querySelector('#rekorButton')
rekorButton.addEventListener('click', () => {
  window.open('./rekor.html', '_self')
})

