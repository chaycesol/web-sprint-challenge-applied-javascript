import axios from 'axios';

// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

// Creating the API endpoint as a variable so its easy to handle in the function 
const articleURL = "https://lambda-times-backend.herokuapp.com/articles"

// using axios to grab article data
axios.get(articleURL)
    .then(response =>{
        //grabbing the response
        const responseData = response.data.articles;
        // grabbing the arrays within the array
        const javascript = responseData.javascript;
        const bootstrap = responseData.bootstrap;
        const technology = responseData.technology;
        const jquery = responseData.jquery;
        const node = responseData.node;

        //iterating through each of the arrays to pull out the articles
        javascript.forEach(element =>{
            const articleCard = cardMaker(element)
            // debugger // see if each card is being made properly
            cardContainer.appendChild(articleCard)
        })
        bootstrap.forEach(element =>{
            const articleCard = cardMaker(element)
            // debugger // see if each card is being made properly
            cardContainer.appendChild(articleCard)
        })
        technology.forEach(element =>{
            const articleCard = cardMaker(element)
            // debugger // see if each card is being made properly
            cardContainer.appendChild(articleCard)
        })
        jquery.forEach(element =>{
            const articleCard = cardMaker(element)
            // debugger // see if each card is being made properly
            cardContainer.appendChild(articleCard)
        })
        node.forEach(element =>{
            const articleCard = cardMaker(element)
            // debugger // see if each card is being made properly
            cardContainer.appendChild(articleCard)
        })
        .catch(err => {
            console.log(err)
          });
    })


//declaring entry point for card div
const cardContainer = document.querySelector('.cards-container')

function cardMaker(articleDataObj) {
    // grabbing data from api
    const articleHeadline = articleDataObj.headline;
    const articleAuthor = articleDataObj.authorName;
    const authorPhoto = articleDataObj.authorPhoto;

    //creating card elements to hold articles
    const cardDiv = document.createElement('div')
    const headlineDiv = document.createElement('div')
    const authorDiv = document.createElement('div')
    const imgDiv = document.createElement('div')
    const authorImg = document.createElement('img')
    const authorName = document.createElement('span')

    //adding classes to divs and elements per spec above
    cardDiv.classList.add('card') // adds card element to card div
    headlineDiv.classList.add('headline') // adds headline class to headline div
    authorDiv.classList.add('author') // adds author class to author div
    imgDiv.classList.add('img-container') // adds img container class to img div

    //appending elements to card div
    cardDiv.appendChild(headlineDiv)
    cardDiv.appendChild(authorDiv)
    authorDiv.appendChild(imgDiv)
    imgDiv.appendChild(authorImg)
    authorDiv.appendChild(authorName)
    
    //adding content to the fields
    headlineDiv.textContent = articleHeadline;;
    authorName.textContent = articleAuthor;
    authorImg.src = authorPhoto;

    return cardDiv
}

// cardMaker();