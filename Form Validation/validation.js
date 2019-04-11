    // let regexPasswordPattern = new RegExp("^.{5,15}$");

function setBorderColor(field, color){
    field.css("border-color", color);
};

$('input[name=username]').keyup(function(e) {
    let regexUsername = new RegExp("^[a-zA-Z0-9]{3,20}$");

    let username = $(this);
    let result = $("p#username-result");
    let usernameValid = regexUsername.test(username.val());

    if (usernameValid) {
        result.text("Username is valid").css('color', 'green');
        setBorderColor(username, "green");
    }
    else {
        result.text("Username must contain 3-20 symbols a-z and 0-9").css('color', 'red');
        setBorderColor(username, "red");
    }
});

$('input[name=email]').keyup(function(e) {
    let regexEmail = new RegExp("^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$");

    let email = $(this);
    let result = $("p#email-result");
    let emailValid = regexEmail.test(email.val());

    if (emailValid) {
        result.text("Email is valid").css('color', 'green');
        setBorderColor(email, "green");
    }
    else {
        result.text("Email must contain '@' and a '.'").css('color', 'red');
        setBorderColor(email, "red");
    };
});

$("input[name=password]").keyup(function(e) {
    let regexPassword = new RegExp("^.{5,15}$");

    let password = $(this);
    let result = $("p#password-result");
    let passwordValid = regexPassword.test(password.val());

    if (passwordValid) {
        result.text("Password is valid").css('color', 'green');
        setBorderColor(password, "green");
    }
    else {
        result.text("Password must contain 5-15 characters").css('color', 'red');
        setBorderColor(password, "red");
    };
});

$("input[name=confirm-password]").keyup(function(e) {
    let confirmPassword = $(this);
    let password = $("input[name=password]");
    let confirmPasswordResult = $("p#confirm-password-result");

    if (confirmPassword.val() === password.val()) {
        confirmPasswordResult.text("Passwords match").css('color', 'green');
        setBorderColor(confirmPassword, "green");
    }
    else {
        confirmPasswordResult.text("Passwords must match").css('color', 'red');
        setBorderColor(confirmPassword, "red");
    };
});

$("input[name=is-company]").change(function(){
    $('div#company-info').slideToggle('slow');
});

$("input[name=company-number]").keyup(function() {
    let companyNumber = $(this);
    let companyNumberResult = $("p#company-number-result");

    if (1000 <= Number(companyNumber.val()) && Number(companyNumber.val()) <= 9999) {
        companyNumberResult.text("Company Number is valid").css('color', 'green');
        setBorderColor(companyNumber, "green");
    }
    else {
        companyNumberResult.text("Company Number must be a number 1000-9999").css('color', 'red');
        setBorderColor(companyNumber, "red");
    }
});