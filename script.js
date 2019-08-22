function validateEmail(str) {
    rxp = /^[A-Za-z0-9]+[A-Za-z0-9]*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)$/;
    if (rxp.test(str)) {
        return true;
    }
    return false;
}
function checkEmail() {
    let txtMail=document.getElementById('txt').value;
    console.log(validateEmail(txtMail));
}