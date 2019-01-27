$(document).ready(function(){
  $('#imeError').hide();
  $('#emailError').hide();
  $('#buttonContact').click(function(){
    var imePrezime = $('#imePrezime').value;
    var emailForm = $('#emailForm').value;
    var imeError = $('#imeError');
    var emailError = $('#emailError');
    var imePrezimeRegEx = /^[A-Z]{1}[a-z]+(\s[A-Z]{1}[a-z]+)+$/;
    var emailFormRegEx = /^[a-z0-9](\.?[a-z0-9_-]){0,}@[a-z0-9-]+\.([a-z]{1,6}\.)?[a-z]{2,6}$/;
    var imePrezimeCheck = imePrezimeRegEx.test(imePrezime);
    var emailCheck = emailFormRegEx.test(emailForm);
    console.log(imePrezimeCheck);
    if (imePrezimeCheck) {
      imeError.hide();
    }
    else {
        imeError.show();
    }
    if (emailCheck) {
      emailError.hide();
    }
    else {
      emailError.show();
    }
  });

})
