function check(){
  var pytanie1 = document.quiz.pytanie1.value;
  var pytanie2 = document.quiz.pytanie2.value;
  var pytanie3 = document.quiz.pytanie3.value;
  var pytanie4 = document.quiz.pytanie4.value;
  var pytanie5 = document.quiz.pytanie5.value;
  var cnt = 0;
  if(pytanie1 == "dobre"){
      cnt++;
  }
  if(pytanie2 == "dobre"){
      cnt++;
  }
  if(pytanie3 == "dobre"){
        cnt++;
    }
  if(pytanie4 == "dobre"){
        cnt++;
    }
  if(pytanie5 == "dobre"){
        cnt++;
    }

  document.getElementById("correct_answers").innerHTML ="Twój wynik to " + cnt + " /5 punktów. Odpowiedzi: 1. d, 2. a, 3. b, 4. b, 5. a "
}