import react, { useEffect, useState } from 'react';
import styled from 'styled-components';
import WeatherView from '../../components/weather';

export default function Home() {
  const [data, setData] = useState();

  useEffect((e) => {
    const result = WeatherView(e);
    setData(result.data);
  }, []);

  return (
    <Container>
      <Search>지역을 입력하세요.</Search>
      {data}
      <Clothes></Clothes>
      <View></View>
      <Youtube></Youtube>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
`;
const Search = styled.div`
  width: 500px;
`;
const Weather = styled.div`
  width: 300px;
`;
const Clothes = styled.div`
  width: 300px;
`;
const View = styled.div`
  width: 300px;
`;
const Youtube = styled.div`
  width: 300px;
`;
