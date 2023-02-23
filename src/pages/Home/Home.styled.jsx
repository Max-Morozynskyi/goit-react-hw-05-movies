import styled from '@emotion/styled';

export const HomeTitle = styled.h2`
  text-align: center;
  margin: 20px 0;
`;

export const FilmList = styled.ul`
  max-width: 100vw;
  margin-bottom: 20px;

  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  justify-content: center;
`;

export const FilmListItem = styled.li`
  cursor: pointer;
  max-width: 400px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  transition: transform 500ms;
  :hover {
    transform: scale(1.05);
  }
`;
