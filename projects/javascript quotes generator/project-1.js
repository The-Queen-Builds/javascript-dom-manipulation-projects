// Javascript in-depth study and project-based learning.
// variables
let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

const quotes = [
  {
    quote: ' "Life is what happens to us while we are making other plans" ',
    person: "Ellen Sanders",
  },
  {
    quote:
      ' "Keep your face always toward the sunshine and shadows will fall behind you" ',
    person: "Walt Whitman",
  },
  {
    quote: ' "Doubt kills more dreams than failure ever will" ',
    person: "Suzy Kassem",
  },
  {
    quote:
      ' "A man\'s belly shall be satisfied with the fruit of his mouth: and with the increase of his lips shall he be filled" ',
    person: "The Holy Writ",
  },
  {
    quote:
      ' "The happiness of your life depends on the quality of yor thoughts" ',
    person: "Marcus Aurelius",
  },
  {
    quote: ` "You are who you are meant to be. Dance as if no one is watching, Love as if it's all you know. Dream as if you'll live forever. Live as if you'll die today." `,
    person: "James Dean",
  },
  {
    quote:
      ' "You do not find the happy life, you make it, you create and build it" ',
    person: "Camilla Eyring Kimball",
  },
  {
    quote: ` "It is during our darkest moments that we must focus to see the light" `,
    person: "Aristotle",
  },
  {
    quote: ` "The bad news is that time flies, the good news is that you are the pilot" `,
    person: `Michael Altshuler`,
  },
  {
    quote: ` "The love of beauty is taste, the creation of beauty is art`,
    person: ` Ralph Waldo Emerson`,
  },
  {
    quote: ` "May your choice reflect your hope not your fear" `,
    person: `Nelson Mandela`,
  },
  {
    quote: ` "The only way to find everything you are looking for in life is to seek God" `,
    person: ` Esther Layefa `,
  },
  {
    quote: ` "Prepare thy work without and make it fit for thyself in the field: and afterwards build thine house" `,
    person: `The Holy Writ`,
  },
  {
    quote: ` "You were born to win, but to be a winner, you must plan to win, prepare to win, and expect to win" `,
    person: `Zig Ziglar`,
  },
  {
    quote: ` "To every thing there is a season, and a time to every purpose under the heaven`,
    person: ` The Holy Writ`,
  },
];

// storing image paths in an array
const bgImages = [
  `url('images/bgimg1.jpeg')`,
  `url('images/bgimg2.jpeg')`,
  `url('images/bgimg3.jpeg')`,
  `url('images/bgimg4.jpeg')`,
  `url('images/bgimg5.jpeg')`,
  `url('images/bgimg6.jpeg')`,
  `url('images/bgimg7.jpeg')`,
  `url('images/bgimg8.jpeg')`,
  `url('images/bgimg9.jpeg')`,
  `url('images/bgimg10.jpeg')`,
  `url('images/bgimg12.jpeg')`,
  `url('images/bgimg13.jpeg')`,
  `url('images/bgimg14.jpeg')`,
  `url('images/bgimg15.jpeg')`,
];

window.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    btn.click();
  }
});

btn.addEventListener("click", function () {
  let random = Math.floor(Math.random() * quotes.length);

  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;

  setBackgroundImage(bgImages[random]);
});

function setBackgroundImage(imagePath) {
  document.body.style.background = `${imagePath} no-repeat center center / cover`;

  document.body.style.transition = `background 0.5s ease`;
}

// btn.addEventListener("click", function () {
//   for (let i = 0; i < quotes.length; i++) {
//     quote.innerText = quotes[i].quote;
//     person.innerText = quotes[i].person;
//   }
// });
// loops can't be used because it processes the whole list at a go!
// hence it is not useful for a one-time click event effect.
