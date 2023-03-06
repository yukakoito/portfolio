import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --primary-color: #1a535c;
    --secondary-color: #f7fff7;
    --primary-font-family: 'Poppins', sans-serif;
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
    box-sizing: border-box;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  body {
    line-height: 1;
    font-family: var(--primary-font-family);
    color: var(--primary-color);
    background-color: var(--secondary-color);
  }

  h1 {
    font-size: 22px;
    margin: 1em 0;
    border-bottom: 1px solid var(--primary-color);
  }

  h2 {
    font-size: 18px;
    margin: 0.5em 0;
  }

  button {
    font-family: var(--primary-font-family);
    background-color: var(--primary-color);
    color: var(--secondary-color);
    padding: 5px 10px;
    margin: 10px;
    border-radius: 25px 0;
    border: none;
    outline: none;
    display: flex;
    align-items: center;
    
    &:hover {
      cursor: pointer;
      transform: scale(1.1);
      transition: 0.5s ease-in-out;
    }
  }

  ul {
    margin: 0.5em 0 0.5em 2em;
  }

  li {
    padding: 2px;
    list-style-type: '✽ ';
  }

  img {
    height: 250px;
    width: 250px;
  }
`;