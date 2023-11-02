import styled from "styled-components";
import img from "../img/smallcardimg.png";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 450px;
  height: 150px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 100px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`

const Title = styled.div`
  font-size: 25px;
  color: #fcc4d9;
  margin-bottom: 10px;

`

const SubTitle = styled.div`
  font-size: 15px;
  color: #6b6b6b;
`

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin:10px;
`


const ImgBox = styled.img`

`
const SmallCard = () => {
    return (
        <Wrapper>
            <ImgBox src={img}></ImgBox>
            <TextWrapper>
                <Title>블로그 오픈 안내</Title>
                <SubTitle> 글씨가 있어요!<br/>옆에 글씨가 또 있네!<br/>옆에 글씨가 더더더 길게 있네!</SubTitle>
            </TextWrapper>
        </Wrapper>

    )
}


export default SmallCard;