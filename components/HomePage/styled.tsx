import styled from "styled-components";

export const HeadingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-top: 16px;
`

export const HoursWrapper = styled.div`
  overflow: scroll;
  padding-bottom: 240px;

  -ms-overflow-style: none;  /* IE and Edge */
  ˚scrollbar-width: none;  /* Firefox */
  ::-webkit-scrollbar {
    display: none;
  }
`

export const PageContent = styled.div`
  max-width: 420px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100vh;
  overflow: hidden;
`

export const Br = styled.div`
  height: 16px;
`

export const Title = styled.h1``
