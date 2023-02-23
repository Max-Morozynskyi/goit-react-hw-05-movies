import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const MovieCard = styled.section`
  display: flex;
  gap: 40px;
  margin: 20px auto;
`;

export const MovieStats = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  gap: 15px;
`;

export const Additionals = styled(Link)`
  margin: 10px 5px;
  background-color: #fff;
  background-position: 0 90%;
  background-repeat: repeat no-repeat;
  background-size: 4px 3px;
  border-radius: 15px 225px 255px 15px 15px 255px 225px 15px;
  border-style: solid;
  border-width: 2px;
  box-shadow: rgba(0, 0, 0, 0.2) 15px 28px 25px -18px;
  box-sizing: border-box;
  color: #41403e;
  cursor: pointer;
  display: inline-block;
  font-family: Neucha, sans-serif;
  font-size: 1rem;
  line-height: 23px;
  outline: none;
  padding: 0.75rem;
  text-decoration: none;
  transition: all 235ms ease-in-out;
  border-bottom-left-radius: 15px 255px;
  border-bottom-right-radius: 225px 15px;
  border-top-left-radius: 255px 15px;
  border-top-right-radius: 15px 225px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  :hover {
    box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 8px -5px;
    transform: translate3d(0, 2px, 0);
  }

  :focus {
    box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 4px -6px;
  }
`;

export const GoBackBtn = styled(Link)`
  --b: 2px; /* border thickness */
  --s: 0.45em; /* size of the corner */
  --color: #616157;

  padding: calc(0.5em + var(--s)) calc(0.9em + var(--s));
  color: var(--color);
  --_p: var(--s);
  background: conic-gradient(
      from 90deg at var(--b) var(--b),
      #0000 90deg,
      var(--color) 0
    )
    var(--_p) var(--_p) / calc(100% - var(--b) - 2 * var(--_p))
    calc(100% - var(--b) - 2 * var(--_p));
  transition: 0.3s linear, color 0s, background-color 0s;
  outline: var(--b) solid #0000;
  outline-offset: 0.6em;
  font-size: 16px;

  border: 0;

  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  :hover,
  :focus-visible {
    --_p: 0px;
    outline-color: var(--color);
    outline-offset: 0.05em;
  }

  :active {
    background: var(--color);
    color: #fff;
  }
`;
