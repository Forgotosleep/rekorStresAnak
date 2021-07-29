// //Login Page
//Since we're using Local Storage, highly unlikely that there's two different parents with the same name, so instead the child name will be saved inside as a property, so the same parent can enter multiple child.

let currParent
let currChild

//Login checks whether there's data or not, if not, it returns false
//If there is data in both input, it will process the data and checks whether there's a parent or child and adds them accordingly, after that it returns true
const login = (data1, data2) => {
    if (!data1 || !data2) {
        return false
    }
    namaOrtu = namaFix(data1)
    namaAnak = namaFix(data2)
    localStorage.setItem('currParent', namaOrtu)  //Untuk setup user dan anaknya
    localStorage.setItem('currChild', namaAnak)
    if (!localStorage.getItem(namaOrtu)) {  
        localStorage.setItem(namaOrtu, childWrite(childFactory(namaAnak)))
        console.log('Registration Successful!');
        return true
    }
    else {
        let data = childRead(localStorage.getItem(namaOrtu))
        if (!data[namaAnak]) {
            data[namaAnak] = []
            localStorage.setItem(namaOrtu, childWrite(data))
            console.log('New child registered!');
        }
        console.log('Login Success!');
        return true
    }
}

const namaFix = (nama) => {  //Untuk ubah semua nama jadi huruf kecil dan tanpa spasi
    let data = nama.toLowerCase().split(' ')
    let output = ""
    if (data.length > 1) {
        for (let i = 0; i < data.length; i++) {
            output += data[i];
        }
    }
    else if (data.length === 1) {
        output = data
    }
    return output
}
// console.log(namaFix('Manan Kaman Budiman'));  //Test case for namaFix

const childFactory = (namaAnak) => {  //Just to make things a little bit easier for formatting, not necessary
    let output = {}
    output[namaAnak] = []
    return output
}

const childWrite = (namaAnak) => {  //Useless function, delete in refactoring
    return JSON.stringify(namaAnak)
}

const childRead = (namaAnak) => {  //Useless function, delete in refactoring
    return JSON.parse(namaAnak)
}
// console.log(childFactory(namaFix('Manan Kaman Budiman'))); //Test case for childFactory


const updateData = (namaOrtu, namaAnak, value) => {  //When the questionarre is filled out and a level of stress output is produced, place said output in the 'value' parameter, along with the parent's name(namaOrtu) and also the child's name(namaAnak) so the data updates
    let data = JSON.parse(localStorage[namaOrtu])
    data[namaAnak].push(value)
    localStorage[namaOrtu] = JSON.stringify(data)
}

const returnRekor = (namaOrtu, namaAnak) => {  //This one searches for the data of the child of the parent and returns and array consisting of test results past and present. Not future.
    let data = JSON.parse(localStorage[namaOrtu])
    return data[namaAnak]
}

///DOM for login/register page
let submitButton = document.querySelector('#submitButton')

submitButton.addEventListener('click', (event) => {
    let namaOrtu = document.querySelector('#ortuName')
    let namaAnak = document.querySelector('#anakName')
    let loginResult = login(namaOrtu.value, namaAnak.value)
    event.preventDefault()
    namaOrtu.value = ''  //reset the input to empty/placeholder
    namaAnak.value = ''
    //Checks whether data is complete or not before logging in
    if (!loginResult) {
        if (document.querySelector('#loginError')) {
            document.querySelector('#loginError').remove()  //If there's 
        }
        console.log('Login Failed')
        let login = document.querySelector('.input-form')
        let newDiv = document.createElement('div')
        newDiv.innerHTML = '<p id="loginError" style="color:red" ><b>* Login failed, please fill in both names</b></p>'
        login.appendChild(newDiv)
    }
    else {
        window.open('question.html', '_self')
    }
})

// //DOM for List Rekor Page
// const updateName = () => {
//     document.querySelector('#rekor-namaOrtu').innerText = localStorage.currParent
//     document.querySelector('#rekor-namaAnak').innerText =  localStorage.currChild
// }
// window.onload = updateName()


