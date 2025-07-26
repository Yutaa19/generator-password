let getPasswordLength = document.getElementById("Passwordlength")
let Password = document.getElementById("Password")
let savebutton = document.getElementById("savebutton")

function generatedPassword(len) {
    const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz"
    const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const numerik = "0123456789"
    const simbol = "~!@#$%^&*()_+=-[]{};':,./:'"

    const data = lowerAlphabet + upperAlphabet + numerik + simbol
    let generator = ""
    for (let index = 0; index < len; index++) {
        generator += data[Math.floor(Math.random() * data.length)]
    }
    return generator
}
 function getPassword() {
    const newPassword = generatedPassword(getPasswordLength.value)
    Password.value = newPassword
   
    
 }

 function savePassword() {
    document.title = Password.value
    savebutton.setAttribute("href", `data:text/plain;charset=utf-8,${Password.value}`)
    savebutton.setAttribute("download", "password.txt")
 }