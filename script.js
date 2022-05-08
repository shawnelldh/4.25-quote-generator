const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

// Show Loading
function loading() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

// Hide Loading
function complete() {
    if (!loader.hidden) {
       quoteContainer.hidden = false;
       loader.hidden = true;


    }
}

// Get Quote From API
async function getQuote() {
    loading();
    const proxyUrl = 'https://whispering-tor-04671.herokuapp.com/'
    const apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
     try {
        const response = await fetch(ProxyUrl + apiUrl);
        const data = await response.json();
        // if Author is blink, add 'Unkown'
        if (data.quoteAuthor === '') {
           authorText.innerText = 'Unkwown';
         } else { 
            authorText.innerText = data.quoteAuthor;
         }
         // Reduce font size for long quotes
         if (data.quoteText.length > 120) {
              quote.Text.classList.add('long-quote');
         } else {
            quoteText.classList.remove(long-quote);
         }
         quoteText.innerText = data.quoteText;
         // Stop Loader , Show Quote
         complete();
      } catch (error) {
           gerQuote();

      }
      hh

         
         
            }


         }
         



        }
    



        




     }


}