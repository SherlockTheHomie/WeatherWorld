
let searchLocation = document.getElementById("search-form");
let currentCity = document.getElementById("current-city");
let currentTemp = document.getElementById("current-temp");
let currentWind = document.getElementById("current-wind");
let currentHumid = document.getElementById("current-humidity");
let currentUv = document.getElementById("current-uv");

let iconUrl = "http://openweathermap.org/img/wn/"
let dayOneIcon = document.getElementById("day-one-icon");

let cardHolder = document.getElementById("five-day");

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

let date = moment.utc().format();
let local = moment.utc(date).local().format();



function dispResults(oneCallData) {
  for (let weatherIndex = 0; weatherIndex < 5; weatherIndex++) {

function dateConversion() {
  let unixTimestap = oneCallData.daily[weatherIndex].dt;
  let milliseconds = unixTimestap * 1000;
  let dateObject = new Date(milliseconds);

  humanDateFormat = dateObject.toLocaleString("en-US", {weekday: "long"});
  
};

    dateConversion();
    
let weatherCard = document.createElement('div');
weatherCard.classList.add('card');
weatherCard.setAttribute("style", "width: 18rem");
cardHolder.append(weatherCard);

let weatherBody = document.createElement('div');
weatherBody.classList.add('card-body');
weatherCard.append(weatherBody);

let weatherTitle = document.createElement('h5');
weatherTitle.classList.add('card-title');
weatherBody.append(weatherTitle);

let weatherIcon = document.createElement('a-href');
weatherIcon.setAttribute("id", "weather-icon");
weatherBody.append(weatherIcon);

let weatherTemp = document.createElement('p');
weatherTemp.classList.add('card-text');
weatherTemp.setAttribute("id", "temp");
weatherBody.append(weatherTemp);

let weatherWind = document.createElement('p');
weatherWind.classList.add('card-text');
weatherWind.setAttribute("id", "wind");
weatherBody.append(weatherWind);

let weatherHmd = document.createElement('p');
weatherHmd.classList.add('card-text');
weatherHmd.setAttribute("id", "humidity");
weatherBody.append(weatherHmd);

let weatherDesc = document.createElement('p');
weatherDesc.classList.add('card-text');
weatherDesc.setAttribute("id", "description");
weatherBody.append(weatherDesc);

weatherTitle.textContent = humanDateFormat;
weatherTemp.textContent = "Temperature: " + oneCallData.daily[weatherIndex].temp.day + "˚F";
weatherWind.textContent = "Wind Speed :" + oneCallData.daily[weatherIndex].wind_speed + "mph";
weatherHmd.textContent = "Humidity: " + oneCallData.daily[weatherIndex].humidity + "%";
weatherDesc.textContent = oneCallData.daily[weatherIndex].weather[0].description;  
}


}

{/* <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title" id="day-one-card"></h5>
          <a href="" id="day-one-icon"></a>
          <p class="card-text" id="day-one-temp"></p>
          <p class="card-text" id="day-one-wind"></p> 
          <p class="card-text" id="day-one-humidity"></p>  
        </div>
      </div> */}


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
    console.log("This is Five Day Weather Api");
    
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
    console.log("This is the Current Weather API");
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
      console.log("This is One Call Weather API");
      dispResult(oneCallData);
      dispResults(oneCallData);
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
