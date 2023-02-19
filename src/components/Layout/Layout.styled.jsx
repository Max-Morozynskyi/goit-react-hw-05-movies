import styled from '@emotion/styled';

export const Header = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  width: 100vw;
  padding: 20px 40px;
  background-color: beige;
  z-index: 10;
  box-shadow: rgba(150, 150, 120, 0.09) 0px 2px 1px,
    rgba(150, 150, 120, 0.09) 0px 4px 2px, rgba(150, 150, 120, 0.09) 0px 8px 4px,
    rgba(150, 150, 120, 0.09) 0px 16px 8px,
    rgba(150, 150, 120, 0.09) 0px 32px 16px;
`;

export const MainNav = styled.nav`
  display: flex;
  gap: 40px;
`;
