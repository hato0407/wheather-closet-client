import React, { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import styled from 'styled-components';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

export default function Write() {
  const { control, handleSubmit, register, watch } = useForm();
  const [preview, setPreview] = useState('');
  const avatar = watch('avatar');

  useEffect(() => {
    if (avatar && avatar.length > 0) {
      const file = avatar[0];
      setPreview(URL.createObjectURL(file));
    }
  }, [avatar]);

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  const animatedComponents = makeAnimated();

  const clothsOptions = [
    { value: 'padding', label: '패딩', isFixed: true },
    { value: 'coat', label: '코트', isFixed: true },
    { value: 'jacket', label: '자켓' },
    { value: 'suit', label: '정장' },
    { value: 'gloves', label: '장갑' },
    { value: 'muffler', label: '목도리' },
    { value: 'slacks', label: '슬랙스' },
    { value: 'jeans', label: '청바지' },
    { value: 'sweatsuit', label: '트레이닝복' },
  ];

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ContainerWrapper>
        <Container>
          <SubTitle>새 게시물 만들기</SubTitle>
          <ContainerBox>
            <Container2>
              <img src={preview} alt="select_image" />
              <SeleteButton>
                <Label for="picture">사진 선택하기</Label>
              </SeleteButton>
              <Imgbox>
                <InputImg
                  {...register('avatar')}
                  id="picture"
                  name="avatar"
                  type="file"
                  accept="image/*"
                />
              </Imgbox>
            </Container2>
            <Container2>
              <UserName>
                <Title>유저 닉네임</Title>
              </UserName>

              <UserWrite>
                <Description>위치 추가</Description>
              </UserWrite>
              <UserWrite>
                <Description>
                  <label>스타일 구분</label>
                  <Controller
                    name="styleType"
                    render={({ field }) => (
                      <Select
                        {...field}
                        options={[
                          { value: 'casual', label: '캐쥬얼' },
                          { value: 'street', label: '스트릿' },
                          { value: 'formal', label: '포멀' },
                        ]}
                      />
                    )}
                    control={control}
                    defaultValue=""
                  />
                </Description>
              </UserWrite>
              <UserWrite>
                <Description>
                  옷 종류 태그
                  <Select
                    closeMenuOnSelect={false}
                    components={animatedComponents}
                    defaultValue=""
                    isMulti
                    options={clothsOptions}
                  />
                </Description>
              </UserWrite>

              <Button type="submit">공유하기</Button>
            </Container2>
          </ContainerBox>
        </Container>
      </ContainerWrapper>
    </form>
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
  height: 50px;
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

const Button = styled.button`
  height: 35px;
  margin-top: 45px;
  background-color: #fff500;
  border: solid #ffffff;
  border-radius: 8px;
  opacity: 0.7;
`;

const Imgbox = styled.div`
  width: 400px;
  height: 400px;
`;
const InputImg = styled.input`
  width: 0;
  height: 0;
`;

const Label = styled.label`
  cursor: pointer;
`;
