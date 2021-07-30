let listQuestion = [
    '1. Apakah temperamen anak anda labil?',
    '2. Apakah anak anda mudah merasa takut?',
    '3. Apakah anak anda menghindari interaksi sosial?',
    '4. Apakah jam makan anak anda berubah-ubah, atau tidak pasti?',
    '5. Apakah anak anda mengalami kesulitan tidur?',
    '6. Apakah anak anda seringkali sakit perut, mual-mual, pusing, dan lain-lain tanpa penyebab jelas?',
    '7. Apakah anak anda sering melamun?',
    '8. Apakah anak anda melakukan self-harm (melukai diri sendiri)?',
    '9. Apakah anak anda merasa lesu, kehilangan minat pada aktivitas yang biasa dijalani?',
    '10. Apakah anak anda tidak bersemangat dalam segala hal?'
]

let extraQuestion = 'Apakah total waktu Wakatime anak anda kurang dari 40 jam dalam satu minggu?'

let indexSoal = 0
let listResult = {}

let buttonNext = document.getElementById('buttonNext')
let buttonPrevious = document.getElementById('buttonPrevious')
let buttonSubmit = document.getElementById('submit')
let saveData = document.querySelector('.jawaban')
let hasil = document.getElementById('result')

//Untuk display logged in name
const updateName = () => {
    document.querySelector('#namaOrtu').innerHTML = `<strong>${localStorage.parentNameDisplay}</strong>`
    document.querySelector('#namaAnak').innerHTML =  `<strong>${localStorage.childNameDisplay}</strong>`
}
window.onload = updateName()  //Instantly update name

//function check semua pertanyaan sudah dijawab
function checkComplete() {
    if (listQuestion.length === Object.keys(listResult).length) {
        return true
    } else {
        return false
    }
}

//function check score ==> hasil dari calculate result
function checkLevel(score) {
    if (score <= 20) {
        level = 1
    } else if (score <= 40) {
        level = 2
    } else if (score <= 60) {
        level = 3
    } else if (score <= 80) {
        level = 4
    } else {
        level = 5
    }
    return level
}


//function calculate score mencari percentase score
function calculateScore(objResult) {
    let result = 0
    for (let item in objResult) {
        result += Number(objResult[item])
    }
    return result * 100 / (Object.keys(objResult).length * 5)
}


//menyimpan result dalam bentuk object dengan indexSoal sebagai key
function saveResult(questionKe, answer) {
    if (!listResult[questionKe]) {
        listResult[questionKe]
    }
    listResult[questionKe] = answer
}

// menampilkan page result
function showResult() {
    let percentageScore = calculateScore(listResult)
    let level = checkLevel(percentageScore)
    if (percentageScore === 100){
        showExtraQuestion()
    } else {
        renderResult(level)
    }
}

function showExtraQuestion(){
    let modal = document.getElementById('myModal')
    let question = document.getElementById('extraquestion')
    let submitExtra = document.getElementById('submitExtra')
    question.textContent = extraQuestion
    modal.style.display = "block";
    submitExtra.addEventListener('click', function(){
        renderResult(6)
    })
}



function renderResult(level) {
    localStorage.setItem('currLevel', level)

    //To push into data
    let parent = localStorage.currParent
    let child = localStorage.currChild
    let data = JSON.parse(localStorage.getItem(parent))
    data[child].push(localStorage.currLevel)
    localStorage.setItem(parent, JSON.stringify(data))
    
    window.open('./result.html', '_self')
}


// Menampilkan Soal
function showSoal() {
    if (indexSoal === listQuestion.length - 1) {
        buttonNext.disabled = true;
    } else {
        buttonNext.disabled = false;
    }
    if (indexSoal === 0) {
        buttonPrevious.disabled = true;
    } else {
        buttonPrevious.disabled = false;
    }

    checkJawaban()
    let showsoal = document.getElementById('soal')
    showsoal.textContent = listQuestion[indexSoal]
}


function emptyAnswer() {
    let item = document.querySelector('.jawaban')
    for (perItem of item) {
        perItem.checked = false;
    }
}

function checkJawaban() {
    let udahAdaJawaban = false;
    for (let key in listResult) {
        if (Number(key) === indexSoal) {
            udahAdaJawaban = true
        }
    }
    if (udahAdaJawaban) {
        let jawaban = 'jawaban' + listResult[indexSoal]
        let radio = document.getElementById(jawaban)
        radio.checked = true
        return true
    } else {
        emptyAnswer()
        return false
    }
}

buttonNext.addEventListener('click', function (e) {
    indexSoal++
    showSoal()
})

buttonPrevious.addEventListener('click', function () {
    indexSoal--
    showSoal()
})

//menympan data ketika pilihan jawaban diklik dan langsung ke soal berikutnya
saveData.addEventListener('click', function (e) {
    document.querySelector('#reminder').style.display = 'none'
    let value = e.target.value
    saveResult(indexSoal, value)
    if (indexSoal === listQuestion.length - 1) {
        buttonSubmit.style.display = 'flex'
    } else {
        indexSoal++
        setTimeout(showSoal, 500)
    }
    console.log(listResult);
})

// button submit keluar ketika sudah di soal terakhir
buttonSubmit.addEventListener('click', function () {
    if (!checkComplete()) {
        let indexygkosong = 0
        for (let key in listResult) {
            if (Number(key) === indexygkosong) {
                indexygkosong++
            } else {
                indexSoal = indexygkosong
                document.querySelector('#reminder').style.display = 'block'
                showSoal()
            }
        }
    } else {
        showResult()
    }
})

showSoal()