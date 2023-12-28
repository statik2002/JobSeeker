/*
class Persona {

    name = "You name";
    surname = "You surname";
    email = "You email";
    headline = "Headline";
    telephone = "+7 999 888 77 66";
    address = "You address";
    poscode = "000000";
    city = "You city";
    palceOfBirth = "You place of birth";
    driverLicence = "Driver licence";
    gender = "Gender";
    nationality = "Nationality";
    civilStatus = "Civil status";
    website = "www.website.com";
    telegram = "@telegram";

    nameId = "Name";
    surnameId = "Surname";
    emailId = "Email";
    hedlineId = "Headline";
    telephoneId = "Telephone";
    addressId = "Address";
    postCodeId = "PostCode";
    cityId = "City";
    palceOfBirthId = "placeOfBirth";
    driverLicenceId = "driverLicence";
    genderId = "gender";
    nationalityId = "nationality";
    civilStatusId = "civilStatus";
    websiteId = "website";
    telegramId = "telegram";

    outputNameId = "showName";
    outputSurnameId = "showSurname";
    outputEmailId = "showEmail";
    outputHeadlineId = "showHeadline";
    outputTelephoneId = "showTelephone";
    outputAddressId = "showAddress";
    outputPostCodeId = "showPostcode";
    outputCityId = "showCity";
    outputPlaceOfBirthId = "showPalceOfBirth";
    outputDiverLicenceId = "showDriverLicence";
    outputGenderId = "";
    outputNationalityId = "";
    outputCivilStatusId = "";
    outputWebsiteId = "";
    outputTelegramId = "";

    setChangeEvent() {
        let nameSelector = document.getElementById(this.nameId);
        let surnameSelector = document.getElementById(this.surnameId);
        let emailSelector = document.getElementById(this.emailId);
        let headlineSelector = document.getElementById(this.hedlineId);
        let telephoneSelector = document.getElementById(this.telephoneId);
        let addressSelector = document.getElementById(this.addressId);
        let postCodeSelector = document.getElementById(this.postCodeId);
        let citySelector = document.getElementById(this.cityId);
        let palceOfBirthSelector = document.getElementById(this.palceOfBirthId);
        let driverLicenceSelector = document.getElementById(this.driverLicenceId);

        //nameSelector.oninput = () => document.getElementById(this.outputNameId).innerHTML = nameSelector.value;
        surnameSelector.oninput = () => document.getElementById(this.outputSurnameId).innerHTML = surnameSelector.value;
        emailSelector.oninput = () => document.getElementById(this.outputEmailId).innerHTML = emailSelector.value;
        headlineSelector.oninput = () => document.getElementById(this.outputHeadlineId).innerHTML = headlineSelector.value;
        telephoneSelector.oninput = () => document.getElementById(this.outputTelephoneId).innerHTML = telephoneSelector.value;
        addressSelector.oninput = () => document.getElementById(this.outputAddressId).innerHTML = addressSelector.value;
        postCodeSelector.oninput = () => document.getElementById(this.outputPostCodeId).innerHTML = postCodeSelector.value;
        citySelector.oninput = () => document.getElementById(this.outputCityId).innerHTML = citySelector.value;
        palceOfBirthSelector.oninput = () => document.getElementById(this.outputPlaceOfBirthId).innerHTML = palceOfBirthSelector.value;
        driverLicenceSelector.oninput = () => {
            if (driverLicenceSelector.value) {
                document.getElementById(this.outputDiverLicenceId).innerHTML = driverLicenceSelector.value;
                document.getElementById(this.outputDiverLicenceId).parentElement.setAttribute('style', 'visibility: visible');
            } else {
                document.getElementById(this.outputDiverLicenceId).parentElement.setAttribute('style', 'visibility: hidden');
            }
            
        };

        let targets = new Set([this.nameId, this.surnameId]);

        let root = document.querySelector('.accordion');
        root.addEventListener('input', function(event) {
            switch(event.target.id) {
                case "Name": document.getElementById('showName').innerHTML = event.target.value; break;
            }
            
        });  
    }
}
*/

function toPDF() {
    let element = document.getElementById('wrapper');
    let options = {
        margin: 1,
        html2canvas: {scale: 3},
    }
    html2pdf().set(options).from(element).save();
}

window.addEventListener('load', function() {
    document.querySelector('#uploadAvatar').addEventListener('change', function() {
        if(this.files && this.files[0]) {
            let avtarImage = document.querySelector('#avatarImage');
            let avatarResume = document.querySelector('#avatarShow');
            avtarImage.onload = () => {
                URL.revokeObjectURL(avtarImage.src);
            }
            avtarImage.src = URL.createObjectURL(this.files[0]);
            avatarResume.src = URL.createObjectURL(this.files[0]);
        }
    });
});

//let personal = persona;
//let personal = new Persona();
//personal.setChangeEvent();

let editForm = document.querySelector('.accordion');
editForm.oninput = function(event) {
    //console.log(event.target);
    //console.log(this);
    const enteredWord = event.target.value;
    switch(event.target.id) {
        case 'Name':
            document.getElementById('showName').innerHTML = enteredWord;
            break;
        case 'Surname':
            document.getElementById('showSurname').innerHTML = enteredWord;
            break;
        case 'Email':
            document.getElementById('showEmail').innerHTML = enteredWord;
            break;
        case 'Headline':
            document.getElementById('showHeadline').innerHTML = enteredWord;
            break;
        case 'Telephone':
            document.getElementById('showTelephone').innerHTML = enteredWord;
            break;                        
        case 'Address':
            document.getElementById('showAddress').innerHTML = enteredWord;
            break; 
        case 'PostCode':
            document.getElementById('showPostcode').innerHTML = enteredWord;
            break; 
        case 'City':
            document.getElementById('showCity').innerHTML = enteredWord;
            break; 
        case 'placeOfBirth':
            const palceOfBirth = document.getElementById('showPalceOfBirth');
            if (enteredWord) {
                palceOfBirth.innerHTML = enteredWord;
                palceOfBirth.parentElement.setAttribute('style', 'visibility: visible');
            } else {
                palceOfBirth.parentElement.setAttribute('style', 'visibility: hidden');
            }
            break; 
        case 'driverLicence':
            const driverLicence = document.getElementById('showDriverLicence');
            if (enteredWord) {
                driverLicence.innerHTML = enteredWord;
                driverLicence.parentElement.setAttribute('style', 'visibility: visible');
            } else {
                driverLicence.parentElement.setAttribute('style', 'visibility: hidden');
            }
            break; 
    }
}

