import styled from 'styled-components';
import WeatherView from './weather';
import Youtube from './youtube';
import Search from './search';
export default function Home() {
  return (
    <Container>
      <Search />
      <WeatherView />
      <Clothes></Clothes>
      <View></View>
      <Youtube />
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  padding: 20vh 23vw;
  justify-content: center;
`;
const Clothes = styled.div`
  width: 300px;
`;
const View = styled.div`
  width: 300px;
`;
