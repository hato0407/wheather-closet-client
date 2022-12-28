import styled from 'styled-components';

export const WeatherContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #f1f5fe;
  padding: 2vh 2vw;
  box-sizing: border-box;
  margin: 5vh 0;
  border-radius: 20px;
`;
export const WeatherWrap = styled.span`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: white;
  border: solid 1px #e8ebee;
  border-radius: 20px;
  align-items: center;
  padding: 5vh 20vw;
`;
export const Temperature = styled.div`
  font-size: 70px;
`;
export const City = styled.h2`
  font-size: 40px;
  font-weight: bold;
  padding: 2vh 0;s
`;
export const Icon = styled.img`
  width: 100px;
`;
export const Weather = styled.h3`
  font-size: 30px;
`;
