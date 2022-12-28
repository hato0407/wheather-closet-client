import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as S from './Board.style';
import BoardList from '../borad/BoardList';

export default function Board() {
  // Tab
  const TABS = [
    {
      label: '시간순',
      value: 'createdDatetime',
    },
    {
      label: '좋아요',
      value: 'likedBy',
    },
  ];

  // State
  const [tab, setTab] = useState(0);
  const [boardData, setBoardData] = useState([]);

  const getBoardData = async () => {
    try {
      const result = await axios('/store/post.json');
      setBoardData(result.data);
      console.log(boardData);
    } catch (err) {
      console.log(err);
    }
  };

  //
  useEffect(() => {
    getBoardData();
  }, []);

  // Handle Event
  const onChangeTab = (idx, value) => {
    setTab(idx);

    const sortedPost = boardData.sort((a, b, sortedBy) => {
      if (a[value] < b[value]) {
        return -1;
      }
      if (a[value] > b[value]) {
        return 1;
      }
      // a must be equal to b
      return 0;
    });
    setBoardData(sortedPost);
    console.log(boardData);
  };

  return (
    <main>
      <S.MyPageWrapper>
        <S.Section>
          <S.ContentsWrapper>
            {TABS.map((el, idx) => {
              return (
                <S.TabMenu
                  onClick={() => {
                    onChangeTab(idx, el.value);
                  }}
                  key={idx}
                >
                  {el.label}
                </S.TabMenu>
              );
            })}
          </S.ContentsWrapper>
        </S.Section>
        <BoardList boardData={boardData} />
      </S.MyPageWrapper>
    </main>
  );
}
