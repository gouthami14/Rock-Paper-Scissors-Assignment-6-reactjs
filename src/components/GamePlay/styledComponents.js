import styled from 'styled-components/macro'

export const GamePlayMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
  width: 100vh;
  background-color: #223a5f;
  padding: 20px;
`
export const GameRulesView = styled.div`
  align-self: flex-start;
  margin-top: auto;
  @media screen and (min-width: 576px) {
    margin-bottom: 40px;
  }
`
export const PopUpView = styled.div`
  display: flex;
  flex-direction: column;
  height: 48vh;
  justify-content: space-between;
  padding: 20px;
  @media screen and (min-width: 576px) {
    height: 250px;
    width: 100%;
  }
`
export const PopupImage = styled.img`
  width: 100%;
  height: 90%;
  margin-top: auto;
`
