import styled from "styled-components";

export const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  margin: 0 auto;

  @media screen and(max-width: 800px) {
    align-items: center;
  }
`;

export const CollectionTitleContainer = styled.h1`
  font-size: 28px;
  margin-bottom: 25px;

  &:hover {
    cursor: pointer;
  }
`;

export const PreviewContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;

  @media screen and (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;
  }
`;
