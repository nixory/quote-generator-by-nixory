"use strict";



const generate = () => {
    let quotes = {
        "Наполеон Хилл, журналист и писатель ":"Что разум человека может постигнуть и во что он может поверить, того он способен достичь",
        "Альберт Эйнштейн":"Стремитесь не к успеху, а к ценностям, которые он дает",
        "Флоренс Найтингейл":"Своим успехом я обязана тому, что никогда не оправдывалась и не принимала оправданий от других.",
        "Амелия Эрхарт":"Сложнее всего начать действовать, все остальное зависит только от упорства.",
        "Федор Достоевский":"Надо любить жизнь больше, чем смысл жизни."

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