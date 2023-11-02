import react from "react";
import styled from "styled-components";
import SmallCard from "../component/SmallCard";


const MainBox = styled.div`
  display: flex;
  justify-content: flex-start;
  background-color: #fcc4d9;
  width: 400px;
  height: 100vh;
`
const MainTitle = styled.div`
  display: flex;
  align-items: flex-end;
  color: white;
  font-size: 50px;
  margin-bottom: 30px;
  margin-left: 30px;
`

const Wrapper=styled.div`
  display: flex;
  justify-content:space-between;
  margin:0px;
`

const CardsWrapper=styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-right: 100px;
  margin-top:80px;
  width: 60%;
  height: 80%;

`
const Main = () => {
    return (
        <Wrapper>
            <MainBox>
                <MainTitle>shweety의<br/>IT블로그</MainTitle>
            </MainBox>
            <CardsWrapper>
                <SmallCard title={"블로그 오픈 안내"} subtitle={["글씨가 있어요!"," 옆에 글씨가 또 있네!","옆에 글씨가 더더더 길게 있네!"]}></SmallCard>
                <SmallCard></SmallCard>
                <SmallCard></SmallCard>
                <SmallCard></SmallCard>
            </CardsWrapper>

        </Wrapper>
    )
}

export default Main;