import styled from "styled-components";
import img from "../img/smallcardimg.png";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 450px;
  height: 150px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 30px;
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
  margin: 10px;
`


const ImgBox = styled.img`

`
const SmallCard = ({title = '', subtitle = []}) => {

    return (
        <Wrapper>
            <ImgBox src={img}></ImgBox>
            <TextWrapper>
                <Title>{title}</Title>
                {subtitle.map((s)=><SubTitle>{s}</SubTitle>)}
            </TextWrapper>
        </Wrapper>

    )
}


export default SmallCard;