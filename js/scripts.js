$( document ).ready(function() {
    console.log( "ready!" );

    var topFiveIMG = $('.topFiveImg');
    var autorNaslov = ["Žarko Laušević - Sve prođe, pa i doživotna", "Goran Marković - Beogradski trio", "Fredrik Bakman - Čovek po imenu Uve", "Dušan Radović - Ženski razgovori", "Vuk Drašković - Aleksandar od Jugoslavije"];
    var prefix = "topFive";
    for (var i = 0; i < topFiveIMG.length; i++) {
      console.log(i);
      topFiveIMG[i].innerHTML = "<img class = 'topFiveImage' src = images/" + prefix + [i+1] + ".jpg /><p class ='topFiveDesc'>" + autorNaslov[i] + "</p>"
    }



    $('#register').click(function(){
      $('.registerForm').slideDown("slow",function(){
      });
    });
});
