const button = document.querySelector(".new-quote");
button.addEventListener('click', getQuote);

const endpoint = 'https://api.quotable.io/random';

async function getQuote(){
    try{
        const response = await fetch(endpoint);
        if(!response.ok){
        throw Error(response.statusText);
        }
        const json = await response.json();
        displayQuote(json.content, json.author);
    }
    catch (err){
        console.log(err);
        alert('Failed to fetch new quote.');
    }
}

function displayQuote(quote, author){
    const quoteText = document.querySelector("#js-quote-text");
    quoteText.textContent = quote;
    const authorText = document.querySelector("#js-author-text");
    authorText.textContent = author;
}

getQuote();

const button2 = document.querySelector(".daily-quote");
button2.addEventListener('click', dailyQuote);

async function dailyQuote(){
    const response = await fetch('https://api.quotable.io/random');
    const data = await response.json();
    const quote = data.content;
    const author = data.author;
    displayQuote(quote, author);
    button2.disabled = true; 
}
