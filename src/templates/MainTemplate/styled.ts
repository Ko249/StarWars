import styled from 'styled-components'

export const StyledMainTemplate = styled.div`
  position: relative;
`

export const StyledMainTemplateContent = styled.div`
  min-width: 950px;
  max-width: 1170px;
  position: relative;
  margin: auto;
  min-height: 100vh;
  padding-left: 15px;
  padding-right: 15px;
  box-sizing: border-box;
  @media (min-width: 1200px) {
    width: 1170px;
  }
  @media (max-width: 1200px) {
    width: auto;
  }
  @media (max-width: 1055px) {
    min-width: 320px!important;
    max-width: none!important;
    width: 100%;
  }
`
