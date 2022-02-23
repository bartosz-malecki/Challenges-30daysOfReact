// index.js
import React from "react";
import ReactDOM from "react-dom";
import htmlImage from "./images/html_logo.png";
import cssImage from "./images/css_logo.png";
import jsImage from "./images/js_logo.png";
import reactImage from "./images/react_logo.png";

//ex2.1

// const main = "Front End Technologies";
// const Images = () => {
//   const imagesAr = [htmlImage, cssImage, jsImage, reactImage];
//   const im = imagesAr.map((img, index) => (
//     <img src={img} key={index} alt={`${img}`} />
//   ));
//   return im;
// };

// const Header = () => (
//   <header>
//     <div className="header-wrapper">
//       <h2>{main}</h2>
//     </div>
//     <div className="img-wrapper">
//       <Images />
//     </div>
//   </header>
// );

// // JSX element, app
// const app = (
//   <div className="app">
//     <Header />
//   </div>
// );

// ex2.2

const title = "SUBSCRIBE";
const info = "Sign up with your email address to receive news and updates";

const Main = () => (
  <main>
    <div className="header-wrapper">
      <h1>{title}</h1>
      <p>{info}</p>
    </div>
    <div className="form-wrapper">
      <input placeholder="First name"></input>
      <input placeholder="Last name"></input>
      <input placeholder="Email"></input>
      <button type="submit">Subscribe</button>
    </div>
  </main>
);

// JSX element, app
const app = (
  <div className="app">
    <Main />
  </div>
);

const rootElement = document.getElementById("root");
// we render the JSX element using the ReactDOM package
ReactDOM.render(app, rootElement);
