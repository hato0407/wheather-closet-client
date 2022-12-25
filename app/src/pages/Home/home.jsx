import styled from 'styled-components';
import WeatherView from '../../components/Weather/weather';
import Youtube from './youtube';
import View from './view';
export default function Home() {
  return (
    <Container>
      <WeatherView />
      <View />
      <Youtube />
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  padding: 5vh 20vw;
  justify-content: center;
  align-items: center;
`;
