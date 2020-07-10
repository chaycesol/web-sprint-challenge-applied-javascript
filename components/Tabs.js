// adding import axios statement;
import axios from 'axios'; 

// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element

const topicTabsURL = "https://lambda-times-backend.herokuapp.com/topics"
const tabDiv = document.querySelector('.topics')

function tabMaker() {
    // let responseData = null //ended up not needing this but keep to ask question why?
    axios.get(topicTabsURL)
        .then(response => {
            const topicTabs = response.data.topics;

            topicTabs.forEach(elm => {
                const tab = document.createElement('div');
                tab.classList.add('tab');

                tab.textContent = elm;
                // debugger // used to see elms populate target div properly
                tabDiv.appendChild(tab);
            })
            
        })
    }        

tabMaker();