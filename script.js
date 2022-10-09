var buttonSubmit = document.getElementById('submit')

buttonSubmit.addEventListener('click', function (event) {
    event.preventDefault()
    var inputNama = document.getElementById('input-nama')
    var inputRole = document.getElementById('input-role')
    var inputAvailability = document.getElementById('input-availability')
    var inputUsia = document.getElementById('input-usia')
    var inputWork = document.getElementById('input-work')
    var inputEmail = document.getElementById('input-email')
    
    document.getElementById('value-nama').innerText = inputNama.value
    document.getElementById('value-role').innerText = inputRole.value
    document.getElementById('value-availability').innerText = inputAvailability.value
    document.getElementById('value-usia').innerText = inputUsia.value
    document.getElementById('value-work').innerText = inputWork.value
    document.getElementById('value-email').innerText = inputEmail.value
    var formInput = document.getElementById('form-input')
    inputNama.value = ''
    inputUsia.value = ''
    formInput.style.display = 'none'
})

var showButton = document.getElementById('show-form')
showButton.addEventListener('click', (event) => {
    event.preventDefault()
    var formInput = document.getElementById('form-input')
   
    if (formInput.style.display == 'block' ) {
        formInput.style.display = 'none'
    } else {
        formInput.style.display = 'block'
    }

    // kalo disini ketika diklik, akan diassign ulang ke formnya
    var valueNama = document.getElementById('value-nama')
    var valueRole = document.getElementById('value-role')
    var valueAvailability = document.getElementById('value-availability')
    var valueUsia = document.getElementById('value-usia')
    var valueWork = document.getElementById('value-work')
    var valueEmail = document.getElementById('value-email')

    
    document.getElementById('input-nama').value = valueNama.innerText
    document.getElementById('input-role').value = valueRole.innerText
    document.getElementById('input-availability').value = valueAvailability.innerText
    document.getElementById('input-usia').value =valueUsia.innerText
    document.getElementById('input-work').value = valueWork.innerText
    document.getElementById('input-email').value = valueEmail.innerText
})