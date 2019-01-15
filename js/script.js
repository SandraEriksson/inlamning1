$(function () {

    $('form').submit(function(e) {

        let nameResult = validateName();
        let passwordResult = validatePassword();
        let radioResult = validateRadio();
        let continentResult = validateContinent();
        let textResult = validateText();
        let checkResult = validateCheck();

        if (nameResult == true && passwordResult == true
            && radioResult == true && continentResult == true && textResult == true && checkResult == true) {
                window.open("submit.html",'_self');
               
        }
        event.preventDefault()
    })


   


    function validateName() {

        let input = $('#name');

        if (input.val() == "") {
            input.addClass('is-invalid');
            document.getElementById("errorName").innerHTML = "Please enter your name";
            input.value.lengt < 2;
            return false;
        }  else {
            input.removeClass('is-invalid').addClass('is-valid');
            return true;
        }
    }

    function validatePassword() {

        let input = $('#password');

        if (input.val() == "") {
            input.addClass('is-invalid');
            document.getElementById("errorPassword").innerHTML = "Please enter your password";
            return false;
        } else {
            input.removeClass('is-invalid').addClass('is-valid');
            return true;
        }

    }

    function validateRadio() {
        let femaleRadio = $('#female');
        let maleRadio = $('#male');
        let otherRadio = $('#other');

        if (femaleRadio.is(':checked')) {
            femaleRadio.addClass('is-valid');
            return true;
        }
        else if (maleRadio.is(':checked')) {
            maleRadio.addClass('is-valid');
            return true;
        }
        else if (otherRadio.is(':checked')) {
            otherRadio.addClass('is-valid');
            return true;
        }

        femaleRadio.addClass('is-invalid');
        maleRadio.addClass('is-invalid');
        otherRadio.addClass('is-invalid');
        document.getElementById("errorRadio").innerHTML = "Please choose your gender";
        return false;
    }




    function validateContinent() {

        let input = $('#continent');

        if (input.val() < 2) {
            input.addClass('is-invalid');
            document.getElementById("errorContinent").innerHTML = "Please choose your continent";
            return false;
        }else {
            input.removeClass('is-invalid').addClass('is-valid');
            return true;
        }

    }


    function validateText() {

        let input = $('#textarea');

        if (input.val() == "") {
            input.addClass('is-invalid');
            document.getElementById("errorText").innerHTML = "Please enter your message"
            return false;
        } else if (input.val() < 2) {
            input.addClass('is-invalid');
            return false;
        } else {
            input.removeClass('is-invalid').addClass('is-valid');
            return true;
        }
    }

    function validateCheck() {
        let check = $('#checkbox');

        for (i = 0; i < check.length; ++i) {
            if (check[i].checked) {
                check.addClass('is-valid');
                return true;
            }else {
                check.addClass('is-invalid');
                document.getElementById("errorCheck").innerHTML = "Please accept the terms";
                return false;
            }
        }
    }


});