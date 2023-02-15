import { Routes, Route } from 'react-router-dom';
import { Header } from './Header/Header';
import { Home } from 'pages/Home/Home';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        {/* <Route path="movies" element={<About />} />
        <Route path="movies/:movieId" element={<About />} /> */}
      </Route>
    </Routes>
  );
};
