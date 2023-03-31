import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    --primary-color: #1a535c;
    --secondary-color: #f7fff7;
    --primary-font-family: 'Poppins', sans-serif;
    --max-content-width: 1280px;
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
    line-height: 1.3;
    font-family: var(--primary-font-family);
    color: var(--primary-color);
    background-color: var(--secondary-color);
  }

  h1 {
    font-size: 22px;
    margin-bottom: 15px;
    border-bottom: 1px solid var(--primary-color);
  }

  h2 {
    font-size: 18px;
  }

  button {
    font-family: var(--primary-font-family);
    background-color: var(--primary-color);
    color: var(--secondary-color);
    padding: 5px 10px;
    border: none;
    outline: none;
    display: flex;
    align-items: center;
    width: fit-content;
    border-radius: 5px;

    &:hover {
      cursor: pointer;
      transform: scale(1.1);
    }
  }

  li {
    padding: 2px;
    list-style-type: '✽ ';
  }

  form {
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
  }

  input, textarea {
    padding: 5px 10px;
    outline-color: var(--primary-color);
    margin: 2px 0 5px;
  }
  
  label {
    font-size: smaller;
  }

`
