import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
export default function Youtube() {
  const [data, setData] = useState('안녕');
  const API_KEY = 'AIzaSyBP9NI-ExXbOVk7o8OJEeNQgdvt6lIuMek';
  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=react&type=video&key=${API_KEY}`,
      )
      .then((response) => {
        setData(response.data.items[0].id.videoId);
        console.log(response.data.items);
      });
  });
  return (
    <Container>
      <Item>{data}</Item>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  border: solid 2px blue;
`;
const Item = styled.div`
  font-size: 30px;
`;
