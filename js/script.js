/*Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.*/

const arrayLength = 5
const randomArray = []
for(let i = 0; i < arrayLength; i++) {
    randomArray.push(Math.floor(Math.random() * 100) + 1);
    
    }

   const arrayNumbers = document.getElementById("numbers");
   arrayNumbers.innerHTML = randomArray;

    var timeLeft = 5;
    var element = document.getElementById('countdown');
    
    var timerId = setInterval(countdown, 1000);
    
    function countdown() {
      if (timeLeft == -1) {
        clearTimeout(timerId);
        for(let i = 1; i <= 5; i++){
            element.innerHTML = ' ';
            arrayNumbers.innerHTML = ' ';
        }
      } else {
        element.innerHTML ='Hai 30 secondi per memorizzare i numeri!! ' + timeLeft + ' secondi rimasti';
        timeLeft--;
      }
    }

    setTimeout(function() {
         for(let i = 1; i <= 5; i++){
             prompt('inserisci i numeri visti precedentemente');
         }
      }, 7300)