import styled, { css } from 'styled-components'

export const StyledPaginationSearch = styled.div`
  display:flex;
  padding-top: 30px;
  justify-content: space-between;
  flex-wrap:wrap;
  @media (max-width: 570px) {
    justify-content: flex-end;
    height: 70px;
    align-items: center;
  }
`

export const StyledSearchHeroInput = styled.input`
  color: #333;
  font-size: 15px;
  padding: 5px 10px;
  border-radius: 5px;
  background-color: rgb(255, 255, 255);
  transition: all 0.3s;
`

export const StyledHeart = styled.div<{isFavoriteHero: boolean}>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: black;
  display: none;
  opacity: 0.5;
  color: red;
  justify-content: center;
  align-items: center;
  font-size: 100px;
  cursor: pointer;
  ${({ isFavoriteHero }) => isFavoriteHero && `
    color: gray;
  `}
`
export const StyledPagination = styled.div`
  display:flex;
  justify-content: flex-end;
`
export const StyledNextButton = styled.button`
  :disabled{opacity:0.6;}
  color: #fbea56;
  background: #333;
  padding: 3px 10px;
  font-size:15px;
`
export const StyledPrevButton = styled.button`
  :disabled{opacity:0.6;}
  color: #fbea56;
  background: #333;
  padding: 3px 10px;
  font-size:15px;
`
export const StyledCardHeroes = styled.div`
  :nth-child(5n){
    padding-right:0px
  }
  :hover ${StyledHeart} {
    display: flex;
  }
  padding: 30px 15px 0 0;
  width: calc(20% - 12px);
  height: 100%;
  position: relative;
  @media (max-width: 880px) {
    width: calc(25% - 12px);
    :nth-child(5n){
      padding-right:15px
    }
    :nth-child(4n){
      padding-right:0px
    }
  }
  @media (max-width: 710px) {
    width: calc(33.333% - 12px);
    :nth-child(4n){
      padding-right:15px
    }
    :nth-child(3n){
      padding-right:0px
    }
  }
  @media (max-width: 460px) {
    width: calc(50% - 12px);
    :nth-child(3n){
      padding-right:15px
    }
    :nth-child(2n){
      padding-right:0px
    }
  }
`
export const StyledHeroName = styled.span`
  color: #757575;
`
export const StyledCardText = styled.div`
  width: 100%;
  background: #fff;
  padding: 16px;
  box-sizing: border-box;
  font-family: fantasy;
  @media (max-width: 540px) {
    padding: 10px;
    font-size: 14px;
  }
`

export const StyledCardHeroesImage = styled.img<{ src: string }>`
  width: 100%;
  ${({ src }) => css`
    src: ${src};
  `}
`
export const StyledBoard = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-bottom:40px;
`

