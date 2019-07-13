console.log('Client side javascript file is loaded!');

const formElement = document.querySelector('form');
const loc = document.querySelector('input');
const message1 = document.querySelector('#message1');
const message2 = document.querySelector('#message2');

formElement.addEventListener('submit', e => {
  e.preventDefault();
  const addres = loc.value;
  message1.textContent = 'Loading...';
  message2.textContent = '';
  if (loc.value) {
    fetch(`http://localhost:3000/weather?address=${addres}`).then(response => {
      response.json().then(data => {
        if (data.Error) {
          message1.textContent = data.Error;
        } else {
          message1.textContent = `Location is ${data.location}`;

          message2.textContent = `${data.forecast.summary}
           Temperature is ${data.forecast.temperature}.
           Chance of rain is ${data.forecast.probability}%`;
        }
      });
    });
  } else {
    alert('Please provide search');
  }
});
