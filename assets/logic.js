
let searchLocation = document.getElementById("search-form");
let currentCity = document.getElementById("current-city");
let currentWeather = document.getElementById("current-weather");

function searchFormSubmit (event) {
  event.preventDefault();
  
  let userSearch = document.getElementById("search-input").value;

  if (!userSearch) {
    console.error('Please enter a location to search');
    return;
  }


 currentApi(userSearch);
 fiveDay(userSearch);
}

searchLocation.addEventListener("submit", searchFormSubmit);

function dispResult(curResults) {
  console.log(curResults);
  currentWeather.textContent = curResults.main;


}


function dispResults(fiveResults) {
  console.log(fiveResults);
  let dayCard = document.createElement('div');
  dayCard.classList.add('card');

  let dayBody = document.createElement('div');
  dayBody.classList.add('card-body');
  dayCard.append(dayBody);

  let dayWeather = document.createElement('h5');
  dayWeather.classList.add('card-title');

  

}


{/* <div class="card" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> 
        </div>
      </div> */}



function currentApi (locSearch) {

  let currentUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + locSearch + '&units=imperial&appid=669d0117a66bacb5a8ed03c57960fe8c';

  fetch(currentUrl)
  .then(function (response) {
    if (!response.ok) {
      throw response.json();
    }
    
    return response.json();
  })
  .then(function (srchResult) {

    console.log(srchResult);

    if (!srchResult.results.length) {
      console.log("that city no longer exists!");
      
    } else {
      
      for (var i = 0; i < srchResult.results.length; i++) {
      dispResult(srchResult.results[i]);
    }
    }
});
}


function fiveDay (locSearch) {

  let currentUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=' + locSearch + '&units=imperial&appid=669d0117a66bacb5a8ed03c57960fe8c';

  fetch(currentUrl)
  .then(function (response) {
    if (!response.ok) {
      throw response.json();
    }
    
    return response.json();
  })
  .then(function (srchResult) {

    console.log(srchResult);

    if (!srchResult.results.length) {
      console.log("that city no longer exists!");
      
    } else {
      currentCity.textContent = srchResult.city.name;
      for (var i = 0; i < srchResult.results.length; i++) {
      dispResults(srchResult.results[i]);
    }
    }
});
}



// weather[0].



// function gatherLocation () {

//   let query = searchPamp[0].split('=').pop

// }


// fetch('https://api.openweathermap.org/data/2.5/forecast?q={dallas}&appid=669d0117a66bacb5a8ed03c57960fe8c')
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);
//   });
