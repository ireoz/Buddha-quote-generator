let apiQuotes = [];
let apiBuddhaQuotes = [];
const quoteE = document.querySelector('#quote');
const authorE = document.querySelector('#author');


// Show New Quote
function newQuote() {
// pick a random quote from apiQuotes array
const quote = apiBuddhaQuotes[Math.floor(Math.random() * apiBuddhaQuotes.length)]
// check Quote lengh to determine styling
quote.text.length > 80 ? quoteE.classList.add('long-quote'): quoteE.classList.remove('long-quote');
quoteE.innerHTML = quote.text;
authorE.innerHTML = quote.author;
}

// Get quotes from API
async function getQuotes() {
    const apiURL = 'https://type.fit/api/quotes';
    try {
        const response = await fetch(apiURL);
        apiQuotes = await response.json();
        // filter quotes for Buddha author only
        apiBuddhaQuotes = apiQuotes.filter((e) => e.author = 'Buddha')
        newQuote();
    } catch (error) {
        // Catch Error Here
    }
}


// 
getQuotes();