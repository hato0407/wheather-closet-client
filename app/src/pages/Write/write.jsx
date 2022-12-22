import React, { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import styled from 'styled-components';

export default function Write() {
  return (
    <ContainerWrapper>
      <Container>
        <SubTitle>새 게시물 만들기</SubTitle>
        <ContainerBox>
          <Container2>
            <img src="/select.png" alt="select_image" />
            <SeleteButton>사진 선택하기</SeleteButton>
          </Container2>
          <Container2>
            <UserName>
              <Title>유저 닉네임</Title>
            </UserName>
            <UserWrite>
              <Description>위치 추가</Description>
            </UserWrite>
            <UserWrite>
              <Description>옷 종류 태그</Description>
            </UserWrite>
            <UserWrite>
              <Description>스타일 구분</Description>
            </UserWrite>
            <Button>공유하기</Button>
          </Container2>
        </ContainerBox>
      </Container>
    </ContainerWrapper>
  );
}
const ContainerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 1100px;
  height: 650px;
  box-shadow: rgba(149, 157, 165, 0.3) 0px 8px 24px;
`;

const ContainerBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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

const UserName = styled.div`
  width: 300px;
  height: 30px;
  margin-bottom: 80px;
`;

const UserWrite = styled.div`
  width: 300px;
  height: 30px;
  margin: 20px 0px 20px 0px;
  border-bottom: solid 1px #ececec;
`;

const Title = styled.h5`
  color: #5e5f61;
  margin: 0;
  margin-top: 20px;
`;

const SubTitle = styled.h4`
  color: #5e5f61;
  font-size: 20px;
  opacity: 0.8;
`;

const Description = styled.p`
  color: #5e5f61;
  font-size: 14px;
  font-weight: bold;
`;

const SeleteButton = styled.button`
  height: 35px;
  margin: 0px 0px 20px 0px;
  background-color: #fff500;
  border: solid #ffffff;
  border-radius: 8px;
  opacity: 0.7;
`;

const SeleteInput = styled.input`
  height: 35px;
  margin: 0px 0px 20px 0px;
  background-color: #fff500;
  border: solid #ffffff;
  border-radius: 8px;
  opacity: 0.7;
`;

const Button = styled.button`
  height: 35px;
  margin-top: 45px;
  background-color: #fff500;
  border: solid #ffffff;
  border-radius: 8px;
  opacity: 0.7;
`;
