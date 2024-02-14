let btn = document.querySelector("button");
let form = document.querySelector("form");
let input = document.querySelector("input");
let temp = document.querySelector('.temp');
let loc = document.querySelector('.time_location p');
let timeDate = document.querySelector('.time_location span');
// let conditionText = document.querySelector('.weather_condition span');
let conditionText = document.querySelector('.weather_condition span');
let conditionImg = document.querySelector ('.weather_condition img');
// const apiUrl = 'http://api.weatherapi.com/v1/current.json?key=6edf43c10f834d6d8da70930231612 &q=Mumbai&aqi=no';
// Make a get Request 


 form.addEventListener('submit',function(e){
  e.preventDefault(); // It will prevent from page refresh after submitting the form 
  let value = input.value;
  // console.log(value);
  const apiUrl = 'http://api.weatherapi.com/v1/current.json?key=6edf43c10f834d6d8da70930231612 &q='+value+'&aqi=no';
  fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
    temp.innerText = data.current.temp_c;
    loc.innerText = data.location.name;
    timeDate.innerText = data.location.localtime;
    conditionText.innerText = data.current.condition.text;
    let imgSrc = data.current.condition.icon;
    conditionImg.src = "https:"+imgSrc;
    

  })
  .catch(error => {
    alert("Please Use Correct name");
    console.error('Error:', error);
  });
 })


