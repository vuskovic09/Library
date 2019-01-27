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


    //SLIDER
    $('.slider > img:gt(0)').hide();
    setInterval(function(){
      $('.slider > img:first')
        .fadeOut(1000)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo('.slider');
    }, 3000);

    //SNIZENJA
    var snizenja = document.getElementById('snizeneKnjige');
    var prefiks = 'snizen';
    for (var i = 0; i < 4; i++) {
      snizenja.innerHTML += "<div class=snizeno><img class=snizenKNJ src=images/" + prefiks + [i] + ".jpg /><input type=button class=buyBook value=Naruči /></div>"
    }

    //AUTOR DANA
    var autorDana = document.getElementById('autorDana');
    autorDana.innerHTML = "<div class=miniHeader><p class=miniHeaderText>Autor dana - Kon Igulden</p></div><div class=autorHold><img src=images/autorDana.jpg /><div class=autorText><p>KON IGULDEN rođen je 1971. godine. Detinjstvo je proveo u Londonu, gde se i školovao. Sedam godina predavao je engleski u školi, da bi najzad napustio taj posao kako bi se posvetio pisanju. Oženjen je, ima četvoro dece i živi u Hetfordširu u Engleskoj.</p></div></div>";
});
