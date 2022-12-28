import axios from 'axios';
import { useDispatch } from 'react-redux';
import { API } from '../../config/config';
import * as action from '../../redux/weather';
import * as L from './Write.style';

export default function NearLocation() {
  const API_KEY = API.WEATHER_API_KEY;
  const dispatch = useDispatch();

  const handleClickLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`,
        )
        .then((response) => {
          const kelbin = response.data.main.temp;
          const degree = (kelbin - 273.15).toFixed(1);
          dispatch(action.SETCITY(response.data.name));
          dispatch(action.SETTMEPERATURE(degree));
          dispatch(action.SETWEATHER(response.data.weather[0].main));
          dispatch(action.SETICON(response.data.weather[0].icon));
        });
    });
  };

  return (
    <L.LocationButton type="button" onClick={handleClickLocation}>
      위치 추가하기
    </L.LocationButton>
  );
}
