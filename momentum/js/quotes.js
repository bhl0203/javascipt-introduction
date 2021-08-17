const quotes = [
    {
        quote: "quote1",
        author: "me1;"
    },
    {
        quote: "quote2",
        author: "me2;"
    },
    {
        quote: "quote3",
        author: "me3;"
    },
    {
        quote: "quote4",
        author: "me4;"
    },
    {
        quote: "quote5",
        author: "me5;"
    },
    {
        quote: "quote6",
        author: "me6"
    },
    {
        quote: "quote7",
        author: "me7"
    },
    {
        quote: "quote8",
        author: "me8"
    },
    {
        quote: "quote9",
        author: "me9;"
    },
    {
        quote: "quote10",
        author: "me10;"
    },







]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const rand = Math.floor(Math.random() * quotes.length);
const todaysquote = quotes[rand];

quote.innerText = todaysquote.quote;
author.innerText = todaysquote.author;