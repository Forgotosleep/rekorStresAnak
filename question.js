let listQuestion = [
    '1. Apakah temperamen anak anda labil?',
    '2. Apakah anak anda mudah merasa takut?',
    '3. Apakah anak anda menghindari interaksi sosial?',
    '4. Apakah jam makan anak anda berubah-ubah, atau tidak pasti?',
    '5. Apakah anak anda mengalami kesulitan tidur?',
    '6. Apakah anak anda seringkali sakit perut, mual-mual, pusing, dll tanpa penyebab jelas?',
    '7. Apakah anak anda sering melamun?',
    '8. Apakah anak anda melakukan self-harm (melukai diri sendiri)?',
    '9. Apakah anak anda merasa lesu, kehilangan minat pada aktivitas yang biasa dijalani?',
    '10. Apakah anak anda tidak bersemangat dalam segala hal?',
    '11. Apakah total waktu Wakatime anak anda kurang dari 40 jam dalam satu minggu?'
]


let indexSoal = 0

let listResult = {} /// dipush sesuai inputan, index == index question
let level = 0

let buttonNext = document.getElementById('buttonNext')
let buttonPrevious = document.getElementById('buttonPrevious')
let buttonSubmit = document.getElementById('submit')
let saveData = document.querySelector('.jawaban')
let hasil = document.getElementById('result')

//function check semua pertanyaan sudah dijawab
function checkComplete() {
    if (listQuestion.length === Object.keys(listResult).length){
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


//function calculate score
function calculateScore(objResult) {
    let result = 0
    for (let item in objResult){
        result += Number(objResult[item])
    }
    return result * 100/ (Object.keys(objResult).length * 5) ///(level jawaban ada 5) percentage score
}

function saveResult(questionKe, answer){
    if (!listResult[questionKe]){
        listResult[questionKe]
    }
    listResult[questionKe] = answer
}

function showResult(){
    
    let percentageScore = calculateScore(listResult)
    let level = checkLevel(percentageScore)

    // hasil.style.display = 'inline'
    // hasil.textContent += level

    
    renderResult(level)
}

function showSoal(){
    if (indexSoal === listQuestion.length-1){
        buttonNext.disabled = true;
    } else {
        buttonNext.disabled = false;
    }
    if (indexSoal === 0){
        buttonPrevious.disabled = true;
    } else {
        buttonPrevious.disabled = false;
    }
    let showsoal = document.getElementById('soal')
    showsoal.textContent = listQuestion[indexSoal]
}

function emptyAnswer(){
    let item = document.querySelector('.jawaban')
    for (perItem of item){
        perItem.checked = false;
    }
}
 
showSoal()

function renderResult(level){
    //ganti page atau show popup
    localStorage.setItem('currLevel', level)
    window.open('./result.html', '_self')
}



buttonNext.addEventListener('click', function(e){
    indexSoal++
    let udahAdaJawaban = false;
    for (let key in listResult){
        if (Number(key) === indexSoal){
            udahAdaJawaban = true
        } 
    }
    if (udahAdaJawaban){
        let jawaban = 'jawaban' + listResult[indexSoal]
        let radio = document.getElementById(jawaban)
        radio.checked = true
    } else {
        emptyAnswer()
    }
    showSoal()
})

buttonPrevious.addEventListener('click', function(){
    indexSoal--
    let udahAdaJawaban = false;
    for (let key in listResult){
        if (Number(key) === indexSoal){
            udahAdaJawaban = true
        } 
    }
    if (udahAdaJawaban){
        let jawaban = 'jawaban' + listResult[indexSoal]
        let radio = document.getElementById(jawaban)
        radio.checked = true
    } else {
        emptyAnswer()
    }
    showSoal()
})

saveData.addEventListener('click', function(e) {
    console.log(e)
    let value = e.target.value
    saveResult(indexSoal, value)
    indexSoal++
    if (indexSoal === listQuestion.length){
        buttonSubmit.style.display = 'inline'
    } else {
        showSoal()
        emptyAnswer()
    }
    console.log(listResult);
})

buttonSubmit.addEventListener('click', function(){
    if (!checkComplete()){
        let indexygkosong = 0
        for (let key in listResult){
            if (Number(key) === indexygkosong){
                indexygkosong++
            } else {
                indexSoal = indexygkosong
                emptyAnswer()
                showSoal()
            }
        }
    } else {
        showResult()
        indexSoal = 0
    }
})

