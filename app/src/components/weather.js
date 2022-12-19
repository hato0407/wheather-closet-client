import axios from 'axios';
async function WeatherView(props) {
  const API_KEY = 'a360461662224b3d0ea83d05566bf189';

  const lat = props.coords.latitude;
  const lng = props.coords.longitude;
  const request = axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`,
    )
    .then((response) => response.data);

  return {
    type: WeatherView,
    payload: request,
  };
}

export default WeatherView;
