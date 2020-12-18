'use strict';
// for (let i = 0; i < 2; i++) {
//   console.log(i);
// }
// // console.log(i);
// function ww(a, b) {
//   let sum = a + b;
//   console.log(sum);
// }
// ww(10, 20);

// let ar = [1, 2, 3, 4];
// let newArray = ar.map(function (number) {
//   return number * number;
// });

// let newArray1 = ar.map((n) => n * n);

// console.log(ar);
// console.log(newArray);
// console.log(newArray1);
// if (10 > 1) {
//   var a = 10;
//   console.log(a);
// }
// console.log(a);
// if (10 > 1) {
//   var a = 10;
//   a += 5;
//   console.log(a);
// }
// console.log(a);

//

// randomWords[Math.floor(Math.random() * randomWords.length)];

// var pickRandomWord = function (words) {
//   return words[Math.floor(Math.random() * words.length)];
// };
// var randomWords = [
//   'бесформенный',
//   'Пространство сознания',
//   'Истина',
//   'Нерождённый',
//   'Бессмертный',
//   'Сострадательный',
//   'Любящий',
// ];

// let rDom = document.getElementById('rr');
// rDom.innerHTML =
//   'ТЫ ЕСТЬ - ' + randomWords[Math.floor(Math.random() * randomWords.length)];

// const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
// const personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false,
// };
// for (let i = 0; i < 2; i++) {
//   const a = prompt("Один из последних просмотренных фильмов?", ""),
//     b = prompt("На сколько оцените его?", "");
//   personalMovieDB.movies[a] = b;
// }
// console.log(personalMovieDB);

// let num = 50;
// while (num <= 56) {
//   console.log(num);
//   num++;
// }

// let num = 50;
// do {
//   console.log(num);
//   num++;
// } while (num <= 55);

// let num = 50;
// for (let i = 1; i < 8; i++) {
//   console.log(num);
//   num++;
// }
// let num = 50;
// for (let i = 1; i <= 7; i++) {
//   if (i === 6) {
//     // break;
//     // continue;
//   }
//   console.log(i);
// }
// / const numberOfFilms = getElementById('col');
// ("Сколько фильмов вы уже посмотрели?", "");
// const personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false,
// };
// for (let i = 0; i < 2; i++) {
//   const a = prompt("Один из последних просмотренных фильмов?", ""),
//     b = prompt("На сколько оцените его?", "");
//   personalMovieDB.movies[a] = b;
// }
// console.log(personalMovieDB);
// document.querySelector('#col').innerText = 'Hello World';
// let name = {
//   firstName: 'Bill',
//   lastName: 'Geits',
//   getName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };
// console.log(name.getName());
// class Name {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
//   sayName() {
//     console.log(`Your Name is: ${this.firstName} ${this.lastName}`);
//   }
// }
// let name1 = new Name('Yury', 'Alexandrov');
// name1.sayName();

// function makearray(n) {
//   this.length = n;
//   for (var i = 1; i <= n; i++) this[i] = 0;
//   return this;
// }

// hexa = new makearray(16);
// for (var i = 0; i < 10; i++) hexa[i] = i;
// hexa[10] = 'a';
// hexa[11] = 'b';
// hexa[12] = 'c';
// hexa[13] = 'd';
// hexa[14] = 'e';
// hexa[15] = 'f';

// function hex(i) {
//   if (i < 0) return '00';
//   else if (i > 255) return 'ff';
//   else return '' + hexa[Math.floor(i / 16)] + hexa[i % 16];
// }

// function setbgColor(r, g, b) {
//   var hr = hex(r);
//   var hg = hex(g);
//   var hb = hex(b);
//   document.bgColor = '#' + hr + hg + hb;
// }

// function fade(sr, sg, sb, er, eg, eb, step) {
//   for (var i = 0; i <= step; i++) {
//     setbgColor(
//       Math.floor(sr * ((step - i) / step) + er * (i / step)),
//       Math.floor(sg * ((step - i) / step) + eg * (i / step)),
//       Math.floor(sb * ((step - i) / step) + eb * (i / step))
//     );
//   }
// }

// function fadein() {
//   fade(255, 255, 255, 0, 0, 0, 225);
// }

// function fadeout() {
//   fade(0, 0, 0, 255, 255, 255, 225);
// }
// function showFirstMessage() {
//   console.log('Hello World!');
// }
// showFirstMessage();

// function ret() {
//   let num = 50;
//   return num;
// }
// const anotherNum = ret();
// console.log(anotherNum);
// const calc = (a, b) => a + b;
// console.log(calc(20, 20));
// const logg = 'Привет всем';
// console.log(logg.slice(7, 11));
// const test = '12.2px';
// console.log(parseInt(test));
// console.log(parseFloat(test));
// if (0 === 1) {
//   console.log(true);
// } else {
//   console.log(false);
// }

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function () {
    personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    while (
      personalMovieDB == '' ||
      personalMovieDB == null ||
      isNaN(personalMovieDB)
    ) {
      numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
  },
  rememberMyFilms: function () {
    for (let i = 0; i < 2; i++) {
      const a = prompt('Один из последних просмотренных фильмов?', ''),
        b = prompt('На сколько оцените его?', '');
      if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
      } else {
        console.log('error');
        i--;
      }
    }
  },
  detectPersonalLevel: function () {
    if (personalMovieDB.count < 10) {
      console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
      console.log('Вы киноман');
    } else {
      console.log('Произошла ошибка');
    }
  },
  showMyDB: function (hidden) {
    if (!hidden) {
      console.log(personalMovieDB);
    }
  },
  toggleVisibleMyDB: function () {
    if (personalMovieDB.privat) {
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }
  },
  writeYourGenres: function () {
    for (let i = 1; i < 2; i++) {
      let genres = prompt(`Введите ваши любимые жанры через запятую`);
      if (genres === '' || genres == null) {
        console.log('Вы ввели некорректные данные или не ввели их вовсе');
        i--;
      } else {
        personalMovieDB.genres = genres.split(', ');
        personalMovieDB.genres.sort();
      }
    }
    personalMovieDB.genres.forEach((item, i) => {
      console.log(`Любимый жанр ${i + 1} - это ${item}`);
    });
  },
};
