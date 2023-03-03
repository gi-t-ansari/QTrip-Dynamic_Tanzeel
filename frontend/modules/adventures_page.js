
import config from "../conf/index.js";

//Implementation to extract city from query params

  // TODO: MODULE_ADVENTURES
  // 1. Extract the city id from the URL's Query Param and return it
  let arr =[];
  function getCityFromURL(search) {
  let params=new URLSearchParams(search);
  let city= params.get("city");
  return city;
  }



//Implementation of fetch call with a paramterized input based on city
async function fetchAdventures(city) {
    try{
    let advCityFetch= await fetch(config.backendEndpoint + `/adventures?city=${city}`);
    let advCity= await advCityFetch.json();
    return advCity;
    }
    catch(e){
    return null;
    }
    }
  // TODO: MODULE_ADVENTURES
  // 1. Fetch adventures using the Backend API and return the data

//Implementation of DOM manipulation to add adventures for the given city from list of adventures
function addAdventureToDOM(adventures) {
  // TODO: MODULE_ADVENTURES
  // 1. Populate the Adventure Cards and insert those details into the DOM
  adventures.forEach(element=>{
    let cardElement= document.createElement("div");
    cardElement.className="col-6 col-lg-3 mb-4";
    cardElement.style="position:relative";
    cardElement.innerHTML=`
    <a href="/detail/?adventure=${element.id}" id=${element.id}>
    <div class="category-banner">${element.category}</div>
    <div class="activity-card">
    <img scr=${element.image} class ="activity-card-image" class="card-img-top"/>
    <div>
    <div class="d-flex justify-content-between p-2 fs-5">
    <h6 class="text-center">${element.name}</h6>
    <h6> ₹${element.costPerHead}</h6>
    </div>
    <div class="d-flex justify-content-between p-2 fs-5">
    <p class="text-center">Duration</p>
    <p>${element.duration}hours</p>
    </div>
    </div>
    </div>
    </div>
    </a>`;
    document.getElementById("data").appendChild(cardElement);
    });
}

//Implementation of filtering by duration which takes in a list of adventures, the lower bound and upper bound of duration and returns a filtered list of adventures.
function filterByDuration(list, low, high) {
  // TODO: MODULE_FILTERS
  // 1. Filter adventures based on Duration and return filtered list

}

//Implementation of filtering by category which takes in a list of adventures, list of categories to be filtered upon and returns a filtered list of adventures.
function filterByCategory(list, categoryList) {
  // TODO: MODULE_FILTERS
  // 1. Filter adventures based on their Category and return filtered list

}

// filters object looks like this filters = { duration: "", category: [] };

//Implementation of combined filter function that covers the following cases :
// 1. Filter by duration only
// 2. Filter by category only
// 3. Filter by duration and category together

function filterFunction(list, filters) {
  // TODO: MODULE_FILTERS
  // 1. Handle the 3 cases detailed in the comments above and return the filtered list of adventures
  // 2. Depending on which filters are needed, invoke the filterByDuration() and/or filterByCategory() methods


  // Place holder for functionality to work in the Stubs
  return list;
}

//Implementation of localStorage API to save filters to local storage. This should get called everytime an onChange() happens in either of filter dropdowns
function saveFiltersToLocalStorage(filters) {
  // TODO: MODULE_FILTERS
  // 1. Store the filters as a String to localStorage

  return true;
}

//Implementation of localStorage API to get filters from local storage. This should get called whenever the DOM is loaded.
function getFiltersFromLocalStorage() {
  // TODO: MODULE_FILTERS
  // 1. Get the filters from localStorage and return String read as an object


  // Place holder for functionality to work in the Stubs
  return null;
}

//Implementation of DOM manipulation to add the following filters to DOM :
// 1. Update duration filter with correct value
// 2. Update the category pills on the DOM

function generateFilterPillsAndUpdateDOM(filters) {
  // TODO: MODULE_FILTERS
  // 1. Use the filters given as input, update the Duration Filter value and Generate Category Pills

}
export {
  getCityFromURL,
  fetchAdventures,
  addAdventureToDOM,
  filterByDuration,
  filterByCategory,
  filterFunction,
  saveFiltersToLocalStorage,
  getFiltersFromLocalStorage,
  generateFilterPillsAndUpdateDOM,
};
