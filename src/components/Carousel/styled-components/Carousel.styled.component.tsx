import styled from "styled-components";


export const CarouselImg = styled.img`
  object-fit: cover;
  opacity: 0;
  transition: 1s;
  &.loaded {
    opacity: 1;
  }
`;
