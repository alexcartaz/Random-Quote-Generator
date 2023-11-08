/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

/*
  The quotes array has been filled with objects in accordance with project requirements
  I wanted to dynamically populate the quotes array based on a text file I generated 
  from Civilizations 4 quotes read by Leonard Nimoy but ran into an issue of
  not being able to use the fetch command in Chrome without a local web server so I tabled
  that for now (see input/civ4_quotes.txt). My work around was to manually populate the array
  with the first 5

  Extra credit: added an additional property called "context"
*/

let quotes = [
  {
    quote:"Astronomy compels the soul to look upwards and leads us from this world to another.",
    source:"Plato",
    citation: null,
    year: null,
    context: '(Read by Leonard Nimoy in the video game Civilizations 4)'
  },
  {
    quote:"Chemistry means the difference between poverty and starvation and the abundant life.",
    source:"Robert Brent",
    citation: null,
    year: null,
    context: null
  },
  {
    quote:"No freeman shall be taken, imprisoned, or in any other way destroyed, except by the lawful judgment of his peers.",
    source:null,
    citation: "The Magna Carta",
    year: null,
    context: null
  },
  {
    quote:"Corporation, n. An ingenious device for obtaining individual profit without individual responsibility.",
    source:"Ambrose Bierce",
    citation: "The Devil's Dictionary",
    year: "1911",
    context: null
  },
  {
    quote:"It has been said that democracy is the worst form of government except all the others that have been tried.",
    source:"Winston Churchill",
    citation: null,
    year: null,
    context: null
  }
];


/***
 * `getRandomQuote` function
 * generates a random number between 0 and the length of the quotes array
 * returns a random quote at the generated index
***/

function getRandomQuote(){
  let randomQuotesIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomQuotesIndex];
}

/***
 * `printQuote` function
 * gets a random quote
 * conditionally generates HTML per project specifications so that new quotes correctly update when a user clicks the "new quote" button
***/

//changes the background color of the quote div to a random color based on an array of pre-defined options
//this function, as currently designed, can select the next random color to also be the last displayed random color
function randomizeBackgroundColor(){
  let colors = ['green','blue','red','orange','yellow','purple'];
  let random_color = colors[Math.floor(Math.random() * colors.length)];
  document.getElementById('quote-box').style.backgroundColor = random_color;
}

function printQuote(){
  let q = getRandomQuote();
  
  //begin quote HTML generation
  let s = `<p class="quote">`;

  //if there is a quote, add it to the HTML
  if(q.quote){
    s += `${q.quote}`
  };

  s += `</p>\n`;
  //if author of quote is missing, make it "unknown"; add source to the HTML
  if(!q.source){
    q.source = "unknown";
  }
  s += `<p class="source">${q.source}`;

  //if there is a citation, add it to the HTML
  if(q.citation){
    s += `\n  <span class="citation">${q.citation}</span>`
  }

  //if there is a year, add it to the HTML
  if(q.year){
    s += `\n  <span class="year">${q.year}</span>`
  }

  //if there is a year, add it to the HTML
  if(q.context){
    s += `\n  <span class="context">${q.context}</span>`
  }

  //conditional logic to make the final text block formatted correctly re: line breaks
  if(!q.citation && !q.year){
    s += `</p>`;
  }else{
    s += `\n</p>`;
  }

  //randomize background color
  randomizeBackgroundColor();

  //update quote via new HTML
  document.getElementById('quote-box').innerHTML = s;
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
setInterval(printQuote, 10000);