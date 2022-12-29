import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as S from './board.style';
import BoardList from '../borad/BoardList';
import store from '../../utils/store';

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
  const [mode, setMode] = useState(false);
  const getBoardData = async () => {
    try {
      const result = store.getData('posts');
      if (result) {
        setMode(true);
      }
      setBoardData(result);
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
      <S.BoardWrapper>
        <S.Section>
          <S.ContentsWrapper>
            <h1>TODAY Weather Fit !</h1>
            <S.TabMenu>
              {TABS.map((el, idx) => {
                return (
                  <S.TabItem
                    onClick={() => {
                      onChangeTab(idx, el.value);
                    }}
                    key={idx}
                  >
                    {el.label}
                  </S.TabItem>
                );
              })}
            </S.TabMenu>
            {mode ? (
              <BoardList boardData={boardData} />
            ) : (
              <h2>아무런 글이 없습니다</h2>
            )}
          </S.ContentsWrapper>
        </S.Section>
      </S.BoardWrapper>
    </main>
  );
}
