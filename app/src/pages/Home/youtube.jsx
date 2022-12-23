import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
export default function Youtube() {
  const [data, setData] = useState('');
  const [secondData, setSecondData] = useState('');
  const API_KEY = 'AIzaSyBP9NI-ExXbOVk7o8OJEeNQgdvt6lIuMek';
  const Url = `https://youtube.com/embed/${data}`;
  const SecondUrl = `https://youtube.com/embed/${secondData}`;
  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=3&q=padding&type=video&key=${API_KEY}`,
      )
      .then((response) => {
        setData(response.data.items[0].id.videoId);
        setSecondData(response.data.items[1].id.videoId);
      });
  });
  return (
    <Container>
      <Text>오늘 입은 옷 관리하는 꿀팁은?</Text>
      <Item src={Url} frameborder="0" />
      <Item src={SecondUrl} frameborder="0" />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 7vh 0;
`;
const Item = styled.iframe`
  width: 500px
  height: 500px;
  padding: 2vh 0;
  border: none;
`;
const Text = styled.div`
  font-size: large;
`;
