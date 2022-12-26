const url = "https://api.adviceslip.com/advice"

const container = document.querySelector('.container')
const quotes = document.querySelector('.quote')
const quoteParagraph = document.querySelector(".quote-paragraph")
const quoteBtn = document.querySelector('.quote-btn')




quoteBtn.addEventListener('click', function()
{

    fetch(url)
    .then((response) => response.json())
    .then((data) => 
    {

        quoteParagraph.innerHTML = `" ${data.slip.advice} "`
        console.log(data)
        
    })

})

