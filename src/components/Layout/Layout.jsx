import { Outlet } from 'react-router-dom';
import { Header, MainNav, Select, StyledNavLink } from './Layout.styled';
import { useEffect, useState } from 'react';

export const Layout = () => {
  const [language, setLanguage] = useState('en-US');

  useEffect(() => {
    const initLang = window.localStorage.getItem('language');
    if (!initLang) {
      return;
    } else {
      setLanguage(JSON.parse(initLang));
    }
  }, [language]);

  const changeLang = evt => {
    setLanguage(evt.target.value);
    window.localStorage.setItem('language', JSON.stringify(evt.target.value));
  };

  return (
    <div>
      <Header>
        <MainNav>
          <StyledNavLink to="/" end>
            Home
          </StyledNavLink>
          <StyledNavLink to="/movies">Movies</StyledNavLink>
        </MainNav>

        <label>
          Choose your language
          <Select name="language" value={language} onChange={changeLang}>
            <option value="en-US">English</option>
            <option value="uk">Українська</option>
            <option value="ru">Русский</option>
          </Select>
        </label>

        <div></div>
      </Header>
      <Outlet />
    </div>
  );
};
