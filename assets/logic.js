fetch('https://api.openweathermap.org/data/2.5/forecast?q={dallas}&appid=669d0117a66bacb5a8ed03c57960fe8c')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
