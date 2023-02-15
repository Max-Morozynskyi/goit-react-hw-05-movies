import { Outlet, NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <div>
      <Header>
        <nav>
          <NavLink to="/">Home</NavLink>
          {/* <Link to="/movies">Movies</Link> */}
        </nav>
      </Header>
      <Outlet />
    </div>
  );
};
