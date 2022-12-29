import React, { useEffect, useRef, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import * as L from './Write.style';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { clothsType, styleType } from './ClothsOptions';
import defalutImg from '../../assets/images/select.png';
import NearLocation from './near';
import City from './city';
import store from '../../utils/store';
import axios from 'axios';

export default function Write() {
  const { control, handleSubmit, register, watch } = useForm();
  const [preview, setPreview] = useState('');
  const [posts, setPosts] = useState([]);
  const [pic, setPic] = useState([]);
  const postList = useRef([]);
  const picList = useRef([]);
  const avatar = watch('avatar');
  const animatedComponents = makeAnimated(); // 옷 종류 태그 선택 애니메이션

  useEffect(() => {
    if (avatar && avatar.length > 0) {
      const file = avatar[0];
      setPreview(URL.createObjectURL(file));
    }
  }, [avatar]);

  const handle = (post) => {
    postList.current = [post, ...postList.current];
    store.setData('posts', postList.current);
    setPosts([...postList.current]);
  };

  const handleChange = (e) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      let pics = store.getData('pics');

      reader.onload = () => {
        resolve(reader.result);
        console.log('pics', pics);
        console.log('reader.result', reader.result);
        if (pics) {
          console.log('pics', pics);

          const res = [reader.result, ...pics];
          store.setData('pics', res);
        } else {
          store.setData('pics', reader.result);
        }
      };
    });
  };

  return (
    <form onSubmit={handleSubmit(handle)}>
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
                onChange={handleChange}
              />
            </L.Container2>
            <L.Container2>
              <L.UserName>
                <L.Title>유저 닉네임</L.Title>
              </L.UserName>

              <L.UserWrite>
                <City />
                <NearLocation />
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

              <L.Button type="submit">공유하기</L.Button>
            </L.Container2>
          </L.ContainerBox>
        </L.Container>
      </L.ContainerWrapper>
    </form>
  );
}
