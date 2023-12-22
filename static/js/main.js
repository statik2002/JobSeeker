
let persona = {
    name: "You name",
    surname: "You surname",
    email: "You email",

    nameId: "Name",
    surnameId: "Surname",
    emailId: "Email",
    hedlineId: "Headline",
    telephoneId: "Telephone",
    addressId: "Address",
    postCodeId: "PostCode",
    cityId: "City",

    outputNameId: "showName",
    outputSurnameId: "showSurname",
    outputEmailId: "showEmail",
    outputHeadlineId: "showHeadline",
    outputTelephoneId: "showTelephone",
    outputAddressId: "showAddress",
    outputPostCodeId: "showPostcode",
    outputCityId: "showCity",

    setChangeEvent() {
        let nameSelector = document.getElementById(this.nameId);
        let surnameSelector = document.getElementById(this.surnameId);
        let emailSelector = document.getElementById(this.emailId);
        let headlineSelector = document.getElementById(this.hedlineId);
        let telephoneSelector = document.getElementById(this.telephoneId);
        let addressSelector = document.getElementById(this.addressId);
        let postCodeSelector = document.getElementById(this.postCodeId);
        let citySelector = document.getElementById(this.cityId);

        nameSelector.oninput = () => document.getElementById(this.outputNameId).innerHTML = nameSelector.value;
        surnameSelector.oninput = () => document.getElementById(this.outputSurnameId).innerHTML = surnameSelector.value;
        emailSelector.oninput = () => document.getElementById(this.outputEmailId).innerHTML = emailSelector.value;
        headlineSelector.oninput = () => document.getElementById(this.outputHeadlineId).innerHTML = headlineSelector.value;
        telephoneSelector.oninput = () => document.getElementById(this.outputTelephoneId).innerHTML = telephoneSelector.value;
        addressSelector.oninput = () => document.getElementById(this.outputAddressId).innerHTML = addressSelector.value;
        postCodeSelector.oninput = () => document.getElementById(this.outputPostCodeId).innerHTML = postCodeSelector.value;
        citySelector.oninput = () => document.getElementById(this.outputCityId).innerHTML = citySelector.value;
    }
}


let personal = persona;
personal.setChangeEvent();