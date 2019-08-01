// 1. Validasi Fullname

function checkForFullname(nilai) {
    // validasi Harus Di Isi
    var checkFullName = new Array ("/","!", "@", "#","$","%","%","^","&","*","(",")","_","+","=","-","`","~",";","<",">",".","?","[","]","{","}",",","0","1","2","3","4","5","6","7","8","9");
    var flag = true;
    for(var i = 0; i < checkFullName.length; i++){
        if(nilai.value.indexOf(checkFullName[i])!=-1){
            alert("Fullname must be alphabetic");
            fname.focus();
            flag = false;
            return false;
        }
    }
    if(nilai.value == ""){
        alert('Fullname Must Be filled');
        nilai.focus();
        flag = false;
    }else if(nilai.value.length < 5 || nilai.value.length > 20){
        alert("length Must be Between 5 and 20 character");
        nilai.focus();
        flag = false;
    }else {
        flag  = true;
        // if(flag == true ){
        //     alert("Fullname anda benar");
        // }
    }

}

// 2. Validasi Email

function checkForEmail(nilai){
    var flag = true;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(nilai.value == ""){
        alert('Email Must Be Filled');
        nilai.focus();
        flag = false;
    }

    
    if(nilai.value.match(mailformat)){
        flag = true;
    }else {
        alert("You have entered an invalid email address!");
        flag = false;
    }
}

// 3. Validasi Telephone
function checkForTelephone(nilai) {
    var flag = true;
    var checkNumber = new Array ("/","!", "@", "#","$","%","%","^","&","*","(",")","_","+","=","-","`","~",";","<",">",".","?","[","]","{","}",",","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z");
    for(var y = 0; y < checkNumber.length; y++){
        if(nilai.value.indexOf(checkNumber[y])!=-1){
            alert("Telephone must be Numeric");
            telephone.focus();
            flag = false;
            return false;
        }
    }
    if(nilai.value == ""){
        alert('Telephone Must Be Filled');
        nilai.focus();
        flag = false;
    }else if(nilai.value.length < 10 || nilai.value.length > 12){
        alert("length Must be Between 10 and 12 character");
        nilai.focus();
        flag = false
    }else {
        flag = true;
    }

}

// 4. Validasi ComboBox
function checkForComboBox(nilai) {
    var flag = true;

    if(nilai.value == "0"){
        alert("Visit Type Must Be Selected");
        flag = false;
    }else {
        flag = true;
    }
}

// 5. Validasi Radio Button

function checkForRadioBtn() {
    var check = 0;
    var nilai = document.getElementsByName('radio');
    var flag = true;
    for(var i = 0; i < nilai.length; i++){
        if(nilai.item(i).checked == false){
            check++;
        }
    }

    if(check == nilai.length){
        alert("Please Select Your Guide");
        flag = false;
    }else {
        flag = true;
    }
}

// 6. Validasi Visitor

function checkForVisitor() {
    var flag =  true;
    var nilai = document.getElementById('visitor').value;
    var numberVisitor = parseInt(nilai);
    var validasiAngka = /^[a-zA-Z ]+$/;
    console.log(numberVisitor);
    if(nilai == ""){
        alert("Number Of Visitor Must Be Filled");
        flag = false;
    }else if(numberVisitor <= 0){
        alert("Visitor Must Be More Than 0");
        flag = false;
    }else if(nilai.match(validasiAngka)){
        alert("Must Be Numeric");
        flag = false;
    }else{
        flag = true;
    }
}
// 8. validasi visit date
    function checkVisitDate() {
        var date = document.getElementById("visit-date");
        var flag = true;
        var checkDate = new Date();
        var datechoosen = new Date(date.value);
        if(date.value == ""){
            alert("visit date must be choosen");
            flag = false;
            return false;
        }
        if(checkDate > datechoosen){
            alert("cannt past day");
            flag = false;
            return false;
        }
        flag =  true;
        return true;
    }

// 7. validasi Agreement
function checkForAgreement() {
    var check = 0;
    var nilai = document.getElementsByName('checkboxagrmnt');
    var flag = true;
    for(var i = 0; i < nilai.length; i++){
        if(nilai.item(i).checked == false){
            check++;
        }
    }

    if(check == nilai.length){
        alert("Agreement Must Be Checked");
        flag = false;
    }else {
        flag = true;
    }
}



function validasi() {
    checkForFullname(document.getElementById('fullname'));
    checkForEmail(document.getElementById('email'));
    checkForTelephone(document.getElementById('telephone'));
    checkForComboBox(document.getElementById("visit-type"));
    checkForRadioBtn();
    checkForVisitor();
    checkForAgreement();
    checkVisitDate();
}