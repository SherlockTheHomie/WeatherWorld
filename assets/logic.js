
let searchLocation = document.getElementById("search-form");
let currentCity = document.getElementById("current-city");
let currentTemp = document.getElementById("current-temp");
let currentWind = document.getElementById("current-wind");
let currentHumid = document.getElementById("current-humidity");
let currentUv = document.getElementById("current-uv");

let iconUrl = " http://openweathermap.org/img/wn/"
let dayOneIcon = document.getElementById("day-one-icon");

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

function dispResult(oneCallData) {
  console.log(oneCallData);
  currentTemp.textContent = "Temperature: " + oneCallData.current.temp + "˚F";
  currentWind.textContent = "Wind: " + oneCallData.current.wind_speed + "MPH";
  currentHumid.textContent = "Humidity: " + oneCallData.current.humidity + "%";
  currentUv.textContent = "UV Index: " + oneCallData.current.uvi;
}


function dispResults(fiveResults) {
  console.log(fiveResults);
  let fiveResults.list[].weather[].icon
  dayOneIcon.iconUrl = fiveResults.list[0].weather[0].icon;
  
  
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
  .then(function (fiveResults) {

    dispResults(fiveResults);
    
  });
}

// Current Weather API Fetch
function currentApi (locSearch) {

  let currentUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + locSearch + '&units=imperial&appid=669d0117a66bacb5a8ed03c57960fe8c';

  fetch(currentUrl)
  .then(function (response) {
    if (!response.ok) {
      throw response.json();
    }
    return response.json();
  })
  .then(function (curResult) {
    currentCity.textContent = curResult.name;
    console.log(curResult);
  oneCall(curResult);
    });
};

function oneCall(curResult) {
  let locLat = curResult.coord.lat;
  let locLon = curResult.coord.lon;
  let currentUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + locLat + '&lon=' + locLon + '&units=imperial&appid=669d0117a66bacb5a8ed03c57960fe8c';

  fetch(currentUrl)
    .then(function (response) {
      if (!response.ok) {
        throw response.json();
      }
      return response.json();
    })
    .then(function (oneCallData) {
      dispResult(oneCallData);
  });
};

// Five Day API Fetch


// function citySearch () {
//   let cityCoords = `https://api.openweathermap.org/data/2.5/weather?q=Austin&appid=f85be298446b14abaf2660208bb00bf7`;
//   fetch(cityCoords)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (fiveDayData) {
//         console.log("This is the openWeather fetch for lat and lon")
//         console.log(fiveDayData.coord);
//         console.log(fiveDayData.coord.lon);
//         console.log(fiveDayData.coord.lat);
//         newFunc(fiveDayData);
//     });
//   };
  

//   function newFunc(fiveDayData) {
//       let cityLon = fiveDayData.coord.lon;
//       let cityLat = fiveDayData.coord.lat;
//       let oneCall = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + cityLat + '&lon=' + cityLon + '&exclude=current&appid=f85be298446b14abaf2660208bb00bf7';
//       fetch(oneCall)
//         .then(function (response) {
//           return response.json();
//         })
//         .then(function (oneCallData) {
//           console.log("This is the oneCall data");
//           console.log(oneCallData);
//         });
//   }




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
