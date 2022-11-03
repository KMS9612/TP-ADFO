import CardContainer from "../../../../common/card/card";
import * as BS from "./board.styles";

export default function BoardListPresenter(props: any) {
  return (
    <BS.Wrapper>
      {/* 카드 div */}
      {/* 무한스크롤 적용시키기?*/}
      <BS.CategoryWrapper>
        <BS.FindText>FIND</BS.FindText>
        <BS.Text>빠르게 인플루언서를 찾아보세요!</BS.Text>
        <BS.CategoryGridBox>
          {props.DataCard.map((el: any, index: number) => (
            <BS.CategoryBox key={index}>
              <BS.TestImgCategory src="https://source.unsplash.com/random" />
              {/* {el.Category} */}
            </BS.CategoryBox>
          ))}
        </BS.CategoryGridBox>
      </BS.CategoryWrapper>

      <BS.CardGridBox>
        {props.DataCard.map((el: any, index: number) => (
          <div key={index}>
            <CardContainer />
            {/* {el.title} */}
          </div>
        ))}
      </BS.CardGridBox>
    </BS.Wrapper>
  );
}