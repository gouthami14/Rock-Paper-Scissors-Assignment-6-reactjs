import styled from 'styled-components/macro'

export const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  flex-wrap: wrap;
  margin-top: 60px;
  @media screen and (min-width: 576px) {
    width: 250px;
    height: 250px;
    margin-left: 15px;
  }
`
export const GameButton = styled.button`
  height: 150px;
  width: 150px;
  background-color: transparent;
  border-style: none;
  outline: none;
  cursor: pointer;
  @media screen and (min-width: 576px) {
    width: 250px;
    height: 250px;
    margin-top: 0px;
    margin-right: 20px;
  }
`

export const GameImage = styled.img`
  width: 150px;
  height: 150px;
  @media screen and (min-width: 576px) {
    width: 100px;
    height: 100px;
  }
`
export const ResultText = styled.p`
  color: #fff;
  font-size: 20px;
  @media screen and (min-width: 576px) {
    font-size: 14px;
  }
`
export const ResultImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 40px;
  @media screen and (min-width: 576px) {
    width: 30%;
  }
`
export const ResultName = styled.p`
  color: #fff;
  font-size: 20px;
  @media screen and (min-width: 576px) {
    font-size: 14px;
  }
`
