function CheckForm() {

// Function 1 
// First Name

function validateForm() {
    let fName = document.forms["affiliateForm"]["first-name"].value.trim();


    if (!/^[a-zA-Z]{3,50}$/.test(fName)) {
        FCorrection.style.display = 'block'
        return false;
    }
    else {
        FCorrection.style.display = 'none'
        return true;
    }


}
 
// Function 2
// Last Name

function validateForm2() {

    let lName = document.forms["affiliateForm"]["last-name"].value.trim();
    if (!/^[a-zA-Z]{3,50}$/.test(lName)) {
        LCorrection.style.display = 'block'
        return false;
    }
    else {
        LCorrection.style.display = 'none'
        return true;
    }

}

// Function 3
// User Name

function validateForm3() {

    let UName = document.forms["affiliateForm"]["username"].value.trim();
    if (!/^[a-zA-Z]{3,50}$/.test(UName)) {
        UCorrection.style.display = 'block'
        return false;
    }
    else {
        UCorrection.style.display = 'none'
        return true;
    }

}


// Function 4
// Password

function validateForm4() {

    let Pass = document.forms["affiliateForm"]["password"].value.trim();
    if (!/^\d{6,16}$/.test(password)) {
        PCorrection.style.display = 'block'
        return false;
    }
    else {
        PCorrection.style.display = 'none'
        return true;
    }

}

// Function 5
// Repeat Password

function validateForm5() {

    let rPass = document.forms["affiliateForm"]["repeat-password"].value.trim();
    if (Pass!=rPass) {
        RCorrection.style.display = 'block'
        return false;
    }
    else {
        RCorrection.style.display = 'none'
        return true;
    }

}

// Function 6
// Checkbox

function validateForm6() {

    let checkBox = document.forms["affiliateForm"]["agreement"].checked;
    if(!checkBox){
        return false;
    }
    else{
        return true;
    }


}



if(CheckForm == false){
    CheckForm.preventDefault()
}



}

