/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
console.log("**************ESERCIZIOA**************");
let sum = 10 + 20;

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
console.log("**************ESERCIZIOB**************");
let random = Math.floor(Math.random() * 20);

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
console.log("**************ESERCIZIOC**************");
let me = {
  name: "Manuel",
  surname: "Barone",
  age: 24
}

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
console.log("**************ESERCIZIOD**************");
delete me.age;

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
console.log("**************ESERCIZIOE**************");
me.skills = ["HTML", "CSS", "Javascript", "Java", "Python", "Php"];

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
console.log("**************ESERCIZIOF**************");
me.skills.push("C#");

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
console.log("**************ESERCIZIOG**************");
me.skills.pop();

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
console.log("**************ESERCIZIO 1**************");
function dice() {
  return Math.floor(Math.random() * 5) + 1;
}
console.log(dice());

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
console.log("**************ESERCIZIO 2**************");
function whoIsBigger(x, y) {
  return x > y ? x : y > x ? y : `${x} ${y}`;
}
console.log(whoIsBigger(1, 2));

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
console.log("**************ESERCIZIO 3**************");
function splitMe(str) {
  let arr = [];
  str.split(" ").forEach(element => {
    arr.push(element[0].toUpperCase() + element.slice(1));
  });
  return arr;
}
console.log(splitMe("buongiorno come stai?"));

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
console.log("**************ESERCIZIO 4**************");
function deleteOne(str, bool) {
  return bool ? str.slice(1) : str.slice(0, str.length - 1);
}
console.log(deleteOne("ciao", false));

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
console.log("**************ESERCIZIO 5**************");
function onlyLetters(str) {
  return str.replace(/[0-9]/g, "");
}
console.log(onlyLetters("734574357buon753473734gio743574357rno8327456 itali45673573a37564"));

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
console.log("**************ESERCIZIO 6**************");
function isThisAnEmail(str) {
  const validReg = /^[a-z0-9]+\@[a-z0-9]+\.[a-z]+$/i;
  return validReg.test(str);
}
console.log(isThisAnEmail("buongiorno@gioJHGgio.pippo"));

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
console.log("**************ESERCIZIO 7**************");
function whatDayIsIt() {
  const dataOdierna = new Date();
  return dataOdierna.getDay() == 0 ? "domenica" :
    dataOdierna.getDay() == 1 ? "lunedi" :
      dataOdierna.getDay() == 2 ? "martedi" :
        dataOdierna.getDay() == 3 ? "mercoledi" :
          dataOdierna.getDay() == 4 ? "giovedi" :
            dataOdierna.getDay() == 5 ? "venerdi" :
              dataOdierna.getDay() == 6 ? "sabato" : "bho";
}
console.log(whatDayIsIt());

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
console.log("**************ESERCIZIO 8**************");
function rollTheDices(n) {
  const obj = {
    sum: 0,
    values: []
  }
  for (let i = 0; i < n; i++) {
    let value = dice();
    obj.values.push(value);
    obj.sum += value;
  }
  return obj;
}
console.log(rollTheDices(3));

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
console.log("**************ESERCIZIO 9**************");
function howManyDays(date) {
  return Math.floor((new Date() - date) / (1000 * 60 * 60 * 24));
}
console.log(howManyDays(new Date(2024, 1, 28)));

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
console.log("**************ESERCIZIO 10**************");
function isTodayMyBirthday() {
  const myBirthday = "28-06".split("-");
  return myBirthday[0] == new Date().getDate() && myBirthday[1] == new Date().getMonth() + 1;
}
console.log(isTodayMyBirthday());

// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file
/* Questo array viene usato per gli esercizi. Non modificarlo. */

const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/

function deleteProp(obj, str) {
  delete obj[str];
  return obj;
}

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
console.log("**************ESERCIZIO 12**************");
function newestMovie() {
  let mostRecent = movies[0].Title;
  let recentYear = movies[0].Year;
  for (let i = 0; i < movies.length; i++)
    if (movies[i].Year > recentYear) {
      recentYear = movies[i].Year;
      mostRecent = movies[i].Title;
    }
  return mostRecent;
}
console.log(newestMovie());

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
console.log("**************ESERCIZIO 13**************");
function countMovies() {
  let count = 0;
  for (let i = 0; i < movies.length; i++)
    if (movies[i].Type == "movie")
      count++;
  return count;
}
console.log(countMovies());

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
console.log("**************ESERCIZIO 14**************");
function onlyTheYears() {
  let years = [];
  for (let i = 0; i < movies.length; i++)
    years.push(movies[i].Year)
  // const years = movies.map(movie => movie.Year);
  return years;
}
console.log(onlyTheYears());

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
console.log("**************ESERCIZIO 15**************");
function onlyInLastMillennium() {
  let notMillennialsFilms = [];
  for (let i = 0; i < movies.length; i++)
    if (movies[i].Year[0] === "1")
      notMillennialsFilms.push(movies[i]);
  return notMillennialsFilms;
}

// function onlyInLastMillennium() {
//   const lastMillenniumMovies = movies.filter(movie => {
//     return movie.Year[0] === "1";
//   });
//   return lastMillenniumMovies;
// }

console.log(onlyInLastMillennium());

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
console.log("**************ESERCIZIO 16**************");
function sumAllTheYears() {
  return movies.reduce((acc, item) => acc + parseInt(item.Year), 0);
}
console.log(sumAllTheYears());

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
console.log("**************ESERCIZIO 17**************");
function searchByTitle(str) {
  let films = [];
  for (let i = 0; i < movies.length; i++)
    if (movies[i].Title.toLowerCase().includes(str))
      films.push(movies[i].Title);
  return films;
}

// function searchByTitle(str) {
//   const filteredMovies = movies.filter(movie => {
//     return movie.Title.toLowerCase().includes(str);
//   });
//   return filteredMovies.map(movie => movie.Title);
// }

console.log(searchByTitle("avengers"));

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/
console.log("**************ESERCIZIO 18**************");
function searchAndDivide(str) {
  let obj = {
    match: [],
    unmatch: []
  };
  movies.forEach(item => (item.Title.toLowerCase().includes(str.toLowerCase())) ? obj.match.push(item.Title) : obj.unmatch.push(item.Title));
  return obj;
}
console.log(searchAndDivide("avengers"));

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
console.log("**************ESERCIZIO 19**************");
function removeIndex(n) {
  let films = [...movies];
  films.splice(n, 1);
  return films;
}
console.log(removeIndex(5));

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
console.log("**************ESERCIZIO 20**************");
function contain() {
  const container = document.getElementById("container");
  return container;
}

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
console.log("**************ESERCIZIO 21**************");
function tagTD() {
  const tds = document.querySelectorAll("td");
  return tds;
}

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
console.log("**************ESERCIZIO 22**************");
function tdText() {
  for (let i = 0; i < tagTD().length; i++)
    console.log(tagTD()[i].textContent);
}

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
console.log("**************ESERCIZIO 23**************");
function addRedBackground() {
  const allLinks = document.querySelectorAll("a");
  for (let i = 0; i < allLinks.length; i++)
    allLinks[i].style.backgroundColor = "red";
}

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
console.log("**************ESERCIZIO 24**************");
function addNewLi() {
  const myList = document.getElementById("myList");
  let newLi = document.createElement("li");
  myList.appendChild(newLi);
}

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
console.log("**************ESERCIZIO 25**************");
function clearList() {
  const myList = document.getElementById("myList");
  myList.innerHTML = "";
}

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/
console.log("**************ESERCIZIO 26**************");
function addTr() {
  const allTr = document.querySelectorAll("tr");
  for (let i = 0; i < allTr.length; i++)
    allTr[i].classList.add("test");
}

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/
console.log("**************ESERCIZIO 27**************")
function halfTree(n) {
  for (let i = 1; i <= n; i++)
    console.log("*".repeat(i));
}
halfTree(3);

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/
console.log("**************ESERCIZIO 28**************");
function tree(n) {
  for (let i = 1; i <= n; i++)
    console.log(" ".repeat(n - i) + "*".repeat(2 * i - 1));
}
tree(10);

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/
console.log("**************ESERCIZIO 29**************");
function isItPrime(x) {
  let primo = true;
  for (let i = 2; i <= x / 2; i++)
    if (x % i === 0) {
      primo = false;
      break;
    }
  return primo;
}
console.log(isItPrime(15));
