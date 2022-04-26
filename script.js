const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

  // Show Loading
  function complete() {
     loader.hidden = false;
     quoteContainer.hidden = false;
    }

  // Hide Loading
  function complete() {
     if(!loader.hidden) {
        quoteConatiner.hidden = false;
        loader.hidden = true;
       }
 }


    




  