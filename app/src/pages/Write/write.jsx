import styled from 'styled-components';

export default function Write() {
  return (
    <Container>
      <SubTitle>새 게시물 만들기</SubTitle>
      <Container_box>
        <Container2>
          <img src="/select.png" alt="select_image" />
          <Button>사진 선택하기</Button>
        </Container2>
        <Container2>
          <Container3>유저 닉네임</Container3>
          <Container3>위치 추가</Container3>
          <Container3>옷 종류 태그</Container3>
          <Container3>스타일 구분</Container3>
        </Container2>
      </Container_box>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 700px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

const Container_box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0;
`;

const Container2 = styled.div`
  border: 2px solid #f0f1f3;
  border-radius: 3px;
  width: 600px;
  height: 500px;
  box-sizing: border-box;
  padding: 28px 24px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  + div {
    width: 340px;
    margin-left: 40px;
  }
`;

const Container3 = styled.div`
  width: 300px;
  height: 30px;
  margin: 20px 0px 20px 0px;
`;

const Title = styled.h2`
  font-weight: bold;
  font-size: 40px;
  color: #151618;
  margin: 0;
  margin-top: 20px;
`;

const SubTitle = styled.h4`
  color: #5e5f61;
  font-size: 20px;
  margin: 0;
  opacity: 0.8;
`;

const Description = styled.p`
  color: #5e5f61;
  font-size: 14px;
  font-weight: bold;

  + p {
    margin-left: 10px;
    color: #4b7bf4;
  }
`;

const Description2 = styled.p`
  color: #2063b1;
  font-size: 14px;
  font-weight: bold;
  margin: 0;
  margin-bottom: 20px;
`;

const Button = styled.button`
  width: 150px;
  height: 35px;
  margin: 0px 0px 20px 0px;
  background-color: #fff500;
  border: solid #ffffff;
  border-radius: 8px;
  opacity: 0.7;
`;
