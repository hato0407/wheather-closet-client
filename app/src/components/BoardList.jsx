import styled from 'styled-components';

export default function BoardList() {
  return (
    <ListLayout>
      {[0, 1, 2, 3, 4].map((item) => (
        <ListItem key={item} />
      ))}
    </ListLayout>
  );
}

const ListLayout = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px 20px;
`;

// TODO Listitem 컴포넌트 분리
ListItem.defaultProps = {
  clothesImage: 'https://picsum.photos/id/22/480/480',
  heartCount: 10,
};

function ListItem({ heartCount, clothesImage }) {
  return (
    <ItemLayout>
      <ItemWrapper>
        <Clothes>
          <ClothesImage src={clothesImage} alt="" />
        </Clothes>
        <HeartWrapper>
          <HeartIcon>♡</HeartIcon>
          <HeartCount>{heartCount}</HeartCount>
        </HeartWrapper>
      </ItemWrapper>
    </ItemLayout>
  );
}

const ItemLayout = styled.li``;

const ItemWrapper = styled.div`
  position: relative;
`;

const Clothes = styled.div`
  width: 100%;
  height: 100%;
`;

const ClothesImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const HeartWrapper = styled.div`
  position: absolute;
  bottom: 10px;
  right: 30px;

  > span + span {
    margin-left: 4px;
  }
`;

// HeartIcon(임시)
const HeartIcon = styled.span`
  font-size: 20px;
`;

const HeartCount = styled.span`
  margin-left: 4px;
  font-size: 20px;
`;
