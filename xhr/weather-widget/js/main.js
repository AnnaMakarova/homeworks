const request = new XMLHttpRequest();
request.open('GET', 'https://netology-fbb-store-api.herokuapp.com/weather');
request.send();
function onLoadWeather() {
  if (this.status === 200) {
    const response = JSON.parse(this.responseText);
    setData(response);
  }
}
request.addEventListener("load", onLoadWeather);

