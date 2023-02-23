import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  padding: 0 40px;
  // padding: 20px 40px;
  background-color: beige;
  z-index: 10;
  box-shadow: rgba(150, 150, 120, 0.09) 0px 2px 1px,
    rgba(150, 150, 120, 0.09) 0px 4px 2px, rgba(150, 150, 120, 0.09) 0px 8px 4px,
    rgba(150, 150, 120, 0.09) 0px 16px 8px,
    rgba(150, 150, 120, 0.09) 0px 32px 16px;
`;

export const MainNav = styled.nav`
  display: flex;
  gap: 10px;
`;

export const StyledNavLink = styled(NavLink)`
  padding: 20px;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;
  color: #61614e;
  :hover {
    color: #969678;
  }
  &.active {
    // color: #969678;
    box-shadow: rgb(224, 224, 180) 3px 3px 6px 0px inset,
      rgba(237, 237, 190, 0.5) -3px -3px 6px 1px inset;
  }
`;

export const Select = styled.select`
  background-color: transparent;
  border: 1px solid rgba(200, 200, 160, 0.6);
  border-radius: 5px;
  // font-size: 16px;
  padding: 5px;
  margin: 15px;
`;
