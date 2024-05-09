import styled from "styled-components";

export const SlideWrapper = styled.div`
  width: 92%;
  margin: 0 auto;

  & .slick-list {
    margin: 0 -7px;
    & .slick-slide > div {
      padding: 0 10px;
    }
  }
`;
