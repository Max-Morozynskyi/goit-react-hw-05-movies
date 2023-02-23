import styled from '@emotion/styled';

export const Container = styled.main`
  margin: 20px auto;
  padding: 0 40px;
`;

export const MoviesFormTitle = styled.h2`
  margin: 20px 0;
`;

export const SearchFormInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  background-color: #ffffe6;
  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

export const SubmitLabel = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
`;

export const SearchFormBtn = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  background-color: #e0e0ca;
  &:hover {
    opacity: 1;
  }
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 500px;
  margin-bottom: 30px;
  background-color: #ffffe6;
  border-radius: 3px;
  overflow: hidden;
`;

export const MovieTitle = styled.p`
  display: block;
  padding: 15px;
  color: #616157;
  text-align: center;
  font-size: 20px;
`;
