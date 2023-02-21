import { Outlet, NavLink } from 'react-router-dom';
import { Header, MainNav } from './Layout.styled';
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
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </MainNav>

        <label>
          Choose your language
          <select name="language" value={language} onChange={changeLang}>
            <option value="en-US">English</option>
            <option value="uk">Українська</option>
            <option value="ru">Русский</option>
          </select>
        </label>

        <div></div>
      </Header>
      <Outlet />
    </div>
  );
};
