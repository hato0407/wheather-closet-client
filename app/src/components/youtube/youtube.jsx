import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API } from '../../config/config';
import * as S from './youtube.style';
import { useSelector } from 'react-redux';

export default function Youtube() {
  const [data, setData] = useState('');
  const [secondData, setSecondData] = useState('');
  const API_KEY = API.YOUTUBE_API_KEY;
  const Url = API.YOUTUBE_EMBED + data;
  const SecondUrl = API.YOUTUBE_EMBED + secondData;
  const name = useSelector((state) => state.clothes.iconName);
  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=2&q=${
          name + '관리하는 법'
        }&type=video&key=${API_KEY}`,
      )
      .then((response) => {
        setData(response.data.items[0].id.videoId);
        setSecondData(response.data.items[1].id.videoId);
      });
  }, [API_KEY, name]);
  return (
    <S.Container>
      <S.Text>오늘 입은 옷 관리하는 꿀팁은?</S.Text>
      <S.Item src={Url} frameborder="0" />
      <S.Desc></S.Desc>
      <S.Item src={SecondUrl} frameborder="0" />
    </S.Container>
  );
}
