"use strict";

const axios = require('axios')
const cheerio = require('cheerio')

//const generate = () => { 
    
    axios.get('https://www.forbes.ru/forbeslife/dosug/262327-na-vse-vremena-100-vdokhnovlyayushchikh-tsitat').then(html => {
            const $ = cheerio.load(html.data)
            
            var text = ''
            $(`#article_262327 > div._2LS9B > div._1eYTt > p:nth-child(${Math.floor(Math.random() * (Math.floor(100) - Math.ceil(1)) + Math.ceil(1))}) > span > b`).each((i, elem) => {
                text += `${$(elem).text()}\n`
                console.log(text)
                
                var quotes = {
                    "Наполеон Хилл, журналист и писатель ":text
                    
                }
                console.log(quotes)
            })
            
        })
        
        
//}


const generates = () => {
    let quotes = {
        "Наполеон Хилл, журналист и писатель ":text
    }
    
    let quotesAutors = Object.keys(quotes);
    
    let quoteAutor = quotesAutors[Math.floor(Math.random() * quotesAutors.length)];
    
    let quote = quotes[quoteAutor];
    
    document.querySelector("#quote").textContent = quote;
    document.querySelector("#quoteAuthor").textContent = quoteAutor;
}


document.querySelector("#generateQuotes").addEventListener("click", () => {

    generate();
})