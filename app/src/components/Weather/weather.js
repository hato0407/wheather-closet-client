import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

export default function Weather() {
  const API_KEY = 'a360461662224b3d0ea83d05566bf189';
  navigator.geolocation.getCurrentPosition((position) => {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const request = axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`,
      )
      .then((response) => response.data);
  });
}
