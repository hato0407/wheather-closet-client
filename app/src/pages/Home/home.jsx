import styled from 'styled-components';

export default function Home() {
  return (
    <Container>
      <Search>지역을 입력하세요.</Search>
      <Weather></Weather>
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
