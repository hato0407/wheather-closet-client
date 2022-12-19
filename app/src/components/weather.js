import axios from 'axios';
async function weatherView(position) {
  const API_KEY = 'a360461662224b3d0ea83d05566bf189';

  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const request = axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`,
    )
    .then((response) => response.data);

  return {
    type: weatherView,
    payload: request,
  };
}

export default weatherView;
