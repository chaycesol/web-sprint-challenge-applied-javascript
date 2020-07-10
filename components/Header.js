// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

// Declared Selector to create my entry point for new Div
const headerContainer = document.querySelector('.header-container')

// function to create header
function Header() {
    //create the element
    const headerDiv = document.createElement('div') //creates header div
    const dateSpan = document.createElement('span') // creates span to hold date
    const pageTitle = document.createElement('h1') // creates Lambda Times Header
    const tempField = document.createElement('span') // creates temp element

    //adding elements to DOM
    headerContainer.appendChild(headerDiv)
    headerDiv.appendChild(dateSpan)
    headerDiv.appendChild(pageTitle)
    headerDiv.appendChild(tempField)

    //adding classes per spec
    headerDiv.classList.add('header') //adding header class to header div
    dateSpan.classList.add('date') // adding date class to date span
    tempField.classList.add('temp') //adding temp field to header

    //adding html to elements
    dateSpan.textContent = "March 28, 2020"
    pageTitle.textContent = "Lambda Times"
    tempField.textContent = "98°"
    
    // console.log(headerDiv) // testing to see if it is working

}

// invoking function to create header element
Header();