$( document ).ready(function() {

    //UCITAVANJE TOP 5
    var topFiveIMG = $('.topFiveImg');
    var autorNaslov = ["Žarko Laušević - Sve prođe, pa i doživotna", "Goran Marković - Beogradski trio", "Fredrik Bakman - Čovek po imenu Uve", "Dušan Radović - Ženski razgovori", "Vuk Drašković - Aleksandar od Jugoslavije"];
    var prefix = "topFive";
    for (var i = 0; i < topFiveIMG.length; i++) {
      topFiveIMG[i].innerHTML = "<img class = 'topFiveImage' src = images/" + prefix + [i+1] + ".jpg /><p class ='topFiveDesc'>" + autorNaslov[i] + "</p>"
    }


    //OTVARANJE REGISTRACIJE
    $('#register').click(function(){
      $('.registerForm').slideDown("slow",function(){
      });
    });

    //VALIDACIJA REGISTRACIJE
    $('#registration').click(function(){
      var checkArr = [];
      var errorArray = [];
      var errorBox = document.getElementById('errorBox');
      errorBox.innerHTML = "";
      var username = document.getElementById('usernameReg').value;
      var usernameRegEx = /^([A-Z][a-z]*)([0-9]){1,3}$/
      var usernameCheck = usernameRegEx.test(username);


      if (usernameCheck) {
        checkArr.push(username);
      }
      else {
        errorArray.push("Username mora imati prvo veliko slovo i 1-3 broja.")
      }

      var password = document.getElementById('passwordReg').value;
      var passwordRepeat = document.getElementById('repeatPassword').value;
      if (password == "") {
        errorArray.push("Lozinka ne može biti prazna.");
      }
      if (password == passwordRepeat) {
        checkArr.push(password);
      }
      else {
        errorArray.push('Lozinke se ne poklapaju.');
      }

      var email = document.getElementById('emailReg').value;
      var emailRegEx = /^[a-z0-9](\.?[a-z0-9_-]){0,}@[a-z0-9-]+\.([a-z]{1,6}\.)?[a-z]{2,6}$/
      var emailCheck = emailRegEx.test(email);
      if (emailCheck) {
        checkArr.push(email);
      }
      else {
        errorArray.push("Mejl adresa nije u odgovarajućem formatu.");
      }

      if (checkArr.length == 3) {
        $('.registerForm').slideUp("slow",function(){
        });
      }
      else {
        for (var i = 0; i < errorArray.length; i++) {
          errorBox.innerHTML += errorArray[i] + "</br>";
        }
        errorBox.style.display = "block";
      }
    });


    var bookArea = document.getElementById('booksHolder');
    var prefix = "bookS";
    for (var i = 0; i < 20; i++) {
      bookArea.innerHTML += "<div class=snizeno><img class=snizenKNJ src=images/" + prefix + [i] + ".jpg /><input type=button class=buyBook value=Naruči /></div>"
    }

});
