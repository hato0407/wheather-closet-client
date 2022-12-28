import React, { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import * as L from './Write.style';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { clothsType, styleType } from './ClothsOptions';
import defalutImg from '../../assets/images/select.png';
import axios from 'axios';
const BASE_URL = 'http://localhost:4000';

export default function Write() {
  const { control, handleSubmit, register, watch } = useForm();
  const [preview, setPreview] = useState(''); // 미리보기

  const [content, setContent] = useState('');
  const [uploadedImg, setUploadedImg] = useState({
    fileName: '',
    fillPath: '',
  });

  const onChange = (e) => {
    setContent(e.target.files[0]);
  }; // input type = 'img' 에다가 적용함

  const onClick = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('img', content);
    // 서버의 upload API 호출
    await axios
      .post('/api/upload', formData)
      .then((res) => {
        const { fileName } = res.data;
        console.log(fileName);
        setUploadedImg({ fileName, filePath: `${BASE_URL}/img/${fileName}` });
        alert('The file is successfully uploaded');
      })
      .catch((err) => {
        console.error(err);
      });
  }; // 공유하기 버튼에 적용함

  // 사진 전송하기
  const avatar = watch('avatar');
  const animatedComponents = makeAnimated(); // 옷 종류 태그 선택 애니메이션

  useEffect(() => {
    if (avatar && avatar.length > 0) {
      const file = avatar[0];
      setPreview(URL.createObjectURL(file));
    }
  }, [avatar]);

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <L.ContainerWrapper>
        <L.Container>
          <L.SubTitle>새 게시물 만들기</L.SubTitle>
          <L.ContainerBox>
            <L.Container2>
              <L.Imgbox>
                <L.SelectImg
                  src={preview ? preview : defalutImg}
                  alt="select_image"
                />
                <h5>{uploadedImg.fileName}</h5>
              </L.Imgbox>
              <L.SeleteButton type="button">
                <L.Label for="picture">사진 선택하기</L.Label>
              </L.SeleteButton>

              <L.InputImg
                {...register('avatar')}
                id="picture"
                name="avatar"
                type="file"
                accept="image/*"
                onChange={onChange}
              />
            </L.Container2>
            <L.Container2>
              <L.UserName>
                <L.Title>유저 닉네임</L.Title>
              </L.UserName>

              <L.UserWrite>
                <L.Description>위치 추가</L.Description>
              </L.UserWrite>
              <L.UserWrite>
                <L.Description>
                  스타일 구분
                  <Controller
                    name="styleType"
                    render={({ field }) => (
                      <Select {...field} options={styleType} />
                    )}
                    control={control}
                    defaultValue=""
                  />
                </L.Description>
              </L.UserWrite>
              <L.UserWrite>
                <L.Description>
                  옷 종류 태그
                  <Controller
                    name="clothsType"
                    render={({ field }) => (
                      <Select
                        {...field}
                        closeMenuOnSelect={false}
                        options={clothsType}
                        components={animatedComponents}
                        isMulti
                      />
                    )}
                    control={control}
                    defaultValue=""
                  />
                </L.Description>
              </L.UserWrite>

              <L.Button type="submit" onClick={onClick}>
                공유하기
              </L.Button>
            </L.Container2>
          </L.ContainerBox>
        </L.Container>
      </L.ContainerWrapper>
    </form>
  );
}
