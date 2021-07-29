const updateName = () => {
    document.querySelector('#rekor-namaOrtu').innerText = localStorage.currParent
    document.querySelector('#rekor-namaAnak').innerText =  localStorage.currChild
}
window.onload = updateName()