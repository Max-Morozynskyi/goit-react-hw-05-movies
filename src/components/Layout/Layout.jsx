import { Outlet, NavLink } from 'react-router-dom';
import { Header, MainNav } from './Layout.styled';

export const Layout = () => {
  return (
    <div>
      <Header>
        <MainNav>
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </MainNav>
      </Header>
      <Outlet />
    </div>
  );
};
