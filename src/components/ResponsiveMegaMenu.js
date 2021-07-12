import React, { useState } from "react";
import styled from "styled-components";
import Logo from "./Logo";

const DIV = styled.div`
  position: relative;
  margin-top: 50px;

  a {
    text-decoration: none !important;
  }

  @-webkit-keyframes slideLeft {
    0% {
      opacity: 0;
      -webkit-transform: translateX(100%);
      transform: translateX(100%);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateX(0%);
      transform: translateX(0%);
    }
  }

  @keyframes slideLeft {
    0% {
      opacity: 0;
      -webkit-transform: translateX(100%);
      transform: translateX(100%);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateX(0%);
      transform: translateX(0%);
    }
  }

  @-webkit-keyframes slideRight {
    0% {
      opacity: 1;
      -webkit-transform: translateX(0%);
      transform: translateX(0%);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateX(100%);
      transform: translateX(100%);
    }
  }

  @keyframes slideRight {
    0% {
      opacity: 1;
      -webkit-transform: translateX(0%);
      transform: translateX(0%);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateX(100%);
      transform: translateX(100%);
    }
  }

  *,
  *::before,
  *::after {
    padding: 0;
    margin: 0;
    -webkit-box-sizing: inherit;
    box-sizing: inherit;
    list-style: none;
    list-style-type: none;
    text-decoration: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  a,
  button {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    cursor: pointer;
    border: none;
    outline: none;
    background: none;
    text-decoration: none;
  }

  @media only screen and (max-width: 768px) {
    a,
    button {
      cursor: default !important;
      border: none;
      outline: none;
    }
  }

  img,
  video {
    display: block;
    max-width: 100%;
    height: auto;
    -o-object-fit: cover;
    object-fit: cover;
  }

  .container {
    max-width: 80rem;
    width: 100%;
    height: auto;
    padding: 0 2rem;
    margin: 0 auto;
  }

  @media only screen and (max-width: 992px) {
    .container {
      padding: 0 1rem;
      margin: 0 auto;
    }
  }

  .header {
    position: fixed;
    display: block;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
    padding: 1rem 0;
    margin: 0 auto;
    z-index: 999;
    border: none;
    outline: none;
    background: rgba(142, 142, 142, 0.4);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  }

  .header .wrapper {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }

  .header-item-left {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 10%;
    flex: 0 0 10%;
  }

  .header-item-center {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 70%;
    flex: 0 0 70%;
  }

  .header-item-right {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 10%;
    flex: 0 0 10%;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end;
  }

  .header-item-right .menu-icon {
    font-size: 1.35rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    gap: 1rem;
    margin-left: 1rem;
    border: none;
    outline: none;
    color: #121212;
    -webkit-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;
  }

  .header .menu > ul > li {
    display: inline-block;
    line-height: 3.125rem;
    margin-left: 1.5rem;
  }

  .header .menu > ul > li > a {
    position: relative;
    font-family: inherit;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.25;
    border: none;
    outline: none;
    color: #121212;
    text-transform: capitalize;
    text-rendering: optimizeLegibility;
    -webkit-transition: color 0.3s ease-in-out;
    -o-transition: color 0.3s ease-in-out;
    transition: color 0.3s ease-in-out;
  }

  .header .menu > ul > li .menu-subs {
    position: absolute;
    width: 100%;
    height: auto;
    margin-top: 1.75rem;
    padding: 1rem 2rem;
    border: none;
    outline: none;
    z-index: 500;
    opacity: 0;
    visibility: hidden;
    border-radius: 0.25rem;
    border-top: 3px solid #00a78e;
    background: #ffffff;
    -webkit-box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
    -webkit-transition: all 0.5s ease-in-out;
    -o-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
  }

  .header .menu > ul > li .menu-subs > ul > li {
    line-height: 1;
  }

  .header .menu > ul > li .menu-subs > ul > li > a {
    display: inline-block;
    font-family: inherit;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.25;
    padding: 0.75rem 0;
    border: none;
    outline: none;
    color: #121212;
    text-transform: capitalize;
    text-rendering: optimizeLegibility;
    -webkit-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }

  .header .menu > ul > li .menu-column-1 {
    min-width: 16rem;
    max-width: 20rem;
  }

  .header .menu > ul > li .menu-subs.menu-mega {
    left: 50%;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
  }

  .header .menu > ul > li .menu-subs.menu-mega > .list-item > ul > li {
    display: block;
    line-height: 1;
  }

  .header .menu > ul > li .menu-subs.menu-mega > .list-item > ul > li > a {
    display: inline-block;
    font-family: inherit;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.25;
    padding: 0.5rem 0;
    border: none;
    outline: none;
    color: #121212;
    text-transform: capitalize;
    text-rendering: optimizeLegibility;
    -webkit-transition: color 0.3s ease-in-out;
    -o-transition: color 0.3s ease-in-out;
    transition: color 0.3s ease-in-out;
  }

  .header .menu > ul > li .menu-subs.menu-column-4 {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    max-width: 68rem;
    width: 100%;
    padding: 1.25rem 1rem;
  }

  .header .menu > ul > li .menu-subs.menu-column-4 > .list-item {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 25%;
    flex: 0 0 25%;
    padding: 0 1rem;
  }

  .header .menu > ul > li .menu-subs.menu-column-4 > .list-item .title {
    font-family: inherit;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1;
    padding: 0.75rem 0;
    border: none;
    outline: none;
    color: #00a78e;
    text-transform: uppercase;
    text-rendering: optimizeLegibility;
    -webkit-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }

  .header
    .menu
    > ul
    > li
    .menu-subs.menu-column-4
    > .list-item.text-center
    .title {
    text-align: center;
  }

  .header .menu > ul > li .menu-subs.menu-column-4 > .list-item img.responsive {
    max-width: 100%;
    width: 100%;
    height: auto;
    margin-top: 0.75rem;
    -o-object-fit: cover;
    object-fit: cover;
    vertical-align: middle;
  }

  .header .menu > ul > li .menu-subs.menu-mega > .list-item > ul > li > a:hover,
  .header .menu > ul > li .menu-subs > ul > li > a:hover {
    color: #00a78e;
  }

  .header-item-right a:hover,
  .header .menu > ul > li:hover > a {
    color: #00a78e;
  }

  @media only screen and (min-width: 768px) {
    .header .menu > ul > li.menu-item-has-children:hover .menu-subs {
      margin-top: 0.5rem;
      opacity: 1;
      visibility: visible;
    }
  }

  .menu-mobile-header,
  .menu-mobile-trigger {
    display: none;
  }

  @media only screen and (max-width: 768px) {
    .header-item-center {
      -webkit-box-flex: 0;
      -ms-flex: 0 0 70%;
      flex: 0 0 70%;
      -webkit-box-ordinal-group: 4;
      -ms-flex-order: 3;
      order: 3;
    }
    .header-item-left,
    .header-item-right {
      -webkit-box-flex: 0;
      -ms-flex: 0 0 10%;
      flex: 0 0 10%;
    }
    .wrapper {
      -webkit-box-pack: justify;
      -ms-flex-pack: justify;
      justify-content: space-between;
    }
    .header .menu-mobile-trigger {
      position: relative;
      display: block;
      cursor: pointer;
      width: 1.75rem;
      height: 1rem;
      border: none;
      outline: none;
      margin-left: 1.25rem;
      background: none;
      -webkit-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      transform: rotate(0deg);
      -webkit-transition: 0.35s ease-in-out;
      -o-transition: 0.35s ease-in-out;
      transition: 0.35s ease-in-out;
    }
    .header .menu-mobile-trigger span {
      display: block;
      position: absolute;
      width: 100%;
      height: 2px;
      left: 0;
      border: none;
      outline: none;
      opacity: 1;
      border-radius: 0.25rem;
      background: #121212;
      -webkit-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      transform: rotate(0deg);
      -webkit-transition: 0.25s ease-in-out;
      -o-transition: 0.25s ease-in-out;
      transition: 0.25s ease-in-out;
    }
    .header .menu-mobile-trigger span:nth-child(1) {
      top: 0;
    }
    .header .menu-mobile-trigger span:nth-child(2),
    .header .menu-mobile-trigger span:nth-child(3) {
      top: 0.5rem;
    }
    .header .menu-mobile-trigger span:nth-child(4) {
      top: 1rem;
    }
    .header-item-right {
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
    }
    .header .menu {
      position: fixed;
      top: 0;
      left: 0;
      width: 20rem;
      height: 100%;
      z-index: 1099;
      overflow: hidden;
      background: #ffffff;
      -webkit-transform: ${({ showMenu }) =>
        showMenu ? "translate(0%)" : "translate(-100%)"};
      -ms-transform: ${({ showMenu }) =>
        showMenu ? "translate(0%)" : "translate(-100%)"};
      transform: ${({ showMenu }) =>
        showMenu ? "translate(0%)" : "translate(-100%)"};
      -webkit-transition: all 0.5s ease-in-out;
      -o-transition: all 0.5s ease-in-out;
      transition: all 0.5s ease-in-out;
    }
    /* .header .menu.active {
      -webkit-transform: translate(0%);
      -ms-transform: translate(0%);
      transform: 
    } */
    .header .menu > ul > li {
      display: block;
      line-height: 1;
      margin: 0;
    }
    .header .menu > ul > li > a {
      display: block;
      line-height: 3.125rem;
      height: 3.125rem;
      padding: 0 3.125rem 0 1rem;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }
    .header .menu > ul > li > a i.ion {
      position: absolute;
      font-size: 1.25rem;
      line-height: 3.125rem;
      top: 0;
      right: 0;
      width: 3.125rem;
      height: 3.125rem;
      text-align: center;
      -webkit-transform: rotate(-90deg);
      -ms-transform: rotate(-90deg);
      transform: rotate(-90deg);
    }
    .header .menu .menu-mobile-header {
      position: relative;
      position: -webkit-sticky;
      position: sticky;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-box-pack: justify;
      -ms-flex-pack: justify;
      justify-content: space-between;
      top: 0;
      height: 3.125rem;
      z-index: 501;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      background: #ffffff;
    }
    .header .menu .menu-mobile-header .menu-mobile-arrow {
      display: ${({ newProduct, categories, accounts }) =>
        newProduct || categories || accounts ? "block" : "none"};
      font-size: 1.25rem;
      line-height: 3.125rem;
      width: 3.125rem;
      height: 3.125rem;
      cursor: pointer !important;
      border-right: 1px solid rgba(0, 0, 0, 0.1);
      color: #121212;
      text-align: center;
    }
    /* .header .menu .menu-mobile-header.active .menu-mobile-arrow {
      display: block;
    } */
    .header .menu .menu-mobile-header .menu-mobile-title {
      font-family: inherit;
      font-size: 1rem;
      font-weight: 500;
      line-height: inherit;
      color: #121212;
      text-transform: capitalize;
      text-rendering: optimizeLegibility;
    }
    .header .menu .menu-mobile-header .menu-mobile-close {
      font-size: 2.25rem;
      line-height: 0.125rem;
      cursor: pointer !important;
      width: 3.125rem;
      height: 3.125rem;
      border-left: 1px solid rgba(0, 0, 0, 0.1);
      color: #121212;
      text-align: center;
    }
    .header .menu .menu-section {
      height: 100%;
      overflow-y: auto;
      overflow-x: hidden;
    }
    .header .menu > ul > li .menu-subs {
      position: absolute;
      display: none;
      top: 0;
      left: 0;
      max-width: none;
      min-width: auto;
      width: 100%;
      height: 100%;
      margin: 0;
      padding: 1rem;
      padding-top: 4rem;
      opacity: 1;
      overflow-y: auto;
      visibility: visible;
      -webkit-transform: translateX(0%);
      -ms-transform: translateX(0%);
      transform: translateX(0%);
      -webkit-box-shadow: none;
      box-shadow: none;
      animation: slideRight 0.3s;
    }
    .header .menu > ul > li .menu-subs.menu-mega {
      position: absolute;
      display: none;
      top: 0;
      left: 0;
      max-width: none;
      min-width: auto;
      width: 100%;
      height: 100%;
      margin: 0;
      padding: 1rem;
      padding-top: 4rem;
      opacity: 1;
      overflow-y: auto;
      visibility: visible;
      -webkit-transform: translateX(0%);
      -ms-transform: translateX(0%);
      transform: translateX(0%);
      -webkit-box-shadow: none;
      box-shadow: none;
      animation: slideRight 0.3s;
    }
    .header .menu > ul > li .menu-subs.active {
      display: block;
      animation: slideLeft 0.5s;
    }
    .header .menu > ul > li .menu-subs.menu-column-4 > .list-item {
      -webkit-box-flex: 0;
      -ms-flex: 0 0 100%;
      flex: 0 0 100%;
      padding: 0rem;
    }
    .header
      .menu
      > ul
      > li
      .menu-subs.menu-column-4
      > .list-item
      img.responsive {
      margin-top: 0;
    }
    .header
      .menu
      > ul
      > li
      .menu-subs.menu-column-4
      > .list-item.text-center
      .title {
      margin-bottom: 1.25rem;
    }
    .header
      .menu
      > ul
      > li
      .menu-subs.menu-column-4
      > .list-item.text-center:last-child
      .title {
      margin-bottom: 0rem;
    }
    .header .menu > ul > li .menu-subs > ul > li > a {
      display: block;
    }
    .header .menu > ul > li .menu-subs.menu-mega > .list-item > ul {
      margin-bottom: 1rem;
    }
    .header .menu > ul > li .menu-subs.menu-mega > .list-item > ul > li > a {
      display: block;
    }
    .overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1098;
      opacity: ${({ showMenu }) => (showMenu ? 1 : 0)};
      visibility: ${({ showMenu }) => (showMenu ? "visible" : "hidden")};
      background: rgba(0, 0, 0, 0.55);
      -webkit-transition: all 0.5s ease-in-out;
      -o-transition: all 0.5s ease-in-out;
      transition: all 0.5s ease-in-out;
    }
    /* .overlay.active {
      opacity: 1;
      visibility: visible;
    } */
  }

  /* burger */

  .hidden {
    visibility: hidden;
    position: absolute;
    width: 0;
    height: 0;
  }

  .burger {
    display: block;
    position: relative;
    width: 2.1rem;
    height: 2.1rem;
    border-radius: 3px;
    margin: 0.5rem;
  }
  .burger span {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    position: absolute;
    margin: 0.0625rem auto 0.525rem -0.75rem;
    text-indent: -999em;
    top: 50%;
    left: 50%;
    margin-top: -0.0625rem;
    cursor: pointer;
  }
  .burger span,
  .burger span:before,
  .burger span:after {
    display: block;
    width: 1.5rem;
    height: 0.125rem;
    background-color: black;
    transition: 0.3s;
    opacity: 1;
  }
  .burger span:before,
  .burger span:after {
    position: absolute;
    content: "";
  }
  .burger span:before {
    top: -0.525rem;
  }
  .burger span:after {
    top: 0.525rem;
  }

  .burger3 input:checked + span:before,
  .burger3 input:checked + span:after {
    top: 0px;
    margin-top: -0.5875rem;
  }
  .burger3 input:checked + span {
    transform: rotate(-360deg);
    background-color: transparent;
  }
  .burger3 input:checked + span:before {
    transform: translateY(0.525rem) rotate(-45deg);
  }
  .burger3 input:checked + span:after {
    transform: translateY(0.525rem) rotate(45deg);
  }

  @-webkit-keyframes menuCloseMiddle--base {
    0% {
      background-color: black;
    }
    80% {
      background-color: black;
    }
    100% {
      background-color: rgba(0, 0, 0, 0);
    }
  }
  @keyframes menuCloseMiddle--base {
    0% {
      background-color: black;
    }
    80% {
      background-color: black;
    }
    100% {
      background-color: rgba(0, 0, 0, 0);
    }
  }
  @-webkit-keyframes menuCloseMiddle--after {
    0% {
      transform: translateY(0) rotate(0);
    }
    80% {
      transform: translateY(0.525rem) rotate(0);
    }
    100% {
      transform: translateY(0.525rem) rotate(45deg);
    }
  }
  @keyframes menuCloseMiddle--after {
    0% {
      transform: translateY(0) rotate(0);
    }
    80% {
      transform: translateY(0.525rem) rotate(0);
    }
    100% {
      transform: translateY(0.525rem) rotate(45deg);
    }
  }
  @-webkit-keyframes menuCloseMiddle--before {
    0% {
      transform: translateY(0) rotate(0);
    }
    80% {
      transform: translateY(0.525rem) rotate(0);
    }
    100% {
      transform: translateY(0.525rem) rotate(-45deg);
    }
  }
  @keyframes menuCloseMiddle--before {
    0% {
      transform: translateY(0) rotate(0);
    }
    80% {
      transform: translateY(0.525rem) rotate(0);
    }
    100% {
      transform: translateY(0.525rem) rotate(-45deg);
    }
  }

  @media (min-width: 768px) {
    .burger {
      display: none;
    }
    i.fas.fa-angle-right {
      visibility: hidden;
    }
  }

  .fas {
    font-size: 15px;
  }

  .menu-item-has-children a .fas {
    position: absolute;
    align-items: center;
    top: 50%;
    right: 5%;
    transform: translateY(-50%);
  }
`;

const ResponsiveMegaMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [checked, setChecked] = useState(false);
  const [headTitle, setHeadTitle] = useState("");
  const [goBack, setGoBack] = useState(false);
  const [subMenu, setSubMenu] = useState({
    newProduct: false,
    categories: false,
    accounts: false
  });

  const handleClick = (e) => {
    setShowMenu(e.target.checked);
    setChecked(e.target.checked);
    setGoBack(false);
    setHeadTitle("");
    setSubMenu({
      newProduct: false,
      categories: false,
      account: false
    });
  };

  const handleSubMenu = (str) => {
    // e.preventDefault();
    console.log("coming str", str);

    if (str === "newProduct") {
      setSubMenu({ newProduct: true, categories: false, accounts: false });
      setHeadTitle("New Products");
      setGoBack(true);
    } else if (str === "categories") {
      setSubMenu({ newProduct: false, categories: true, accounts: false });
      setHeadTitle("Categories");
      setGoBack(true);
    } else if (str === "accounts") {
      setSubMenu({ newProduct: false, categories: false, accounts: true });
      setHeadTitle("Accounts");
      setGoBack(true);
    } else {
      setSubMenu({
        newProduct: false,
        categories: false,
        account: false
      });
      setGoBack(false);
      setHeadTitle("");
    }
  };

  const handleback = () => {
    setGoBack(false);
    setHeadTitle("");
    setSubMenu({
      newProduct: false,
      categories: false,
      account: false
    });
  };
  console.log("subMenu", subMenu);

  return (
    <DIV
      showMenu={showMenu}
      categories={subMenu.categories}
      newProduct={subMenu.newProduct}
      accounts={subMenu.accounts}
    >
      <header className="header">
        <div className="container">
          <div className="wrapper">
            <div className="header-item-left">
              <a href="#home" className="brand">
                <Logo />
              </a>
            </div>
            {/* Section: Navbar Menu */}
            <div className="header-item-center">
              <div className="overlay" onClick={handleClick} />
              <nav className="menu">
                <div className="menu-mobile-header">
                  <button
                    type="button"
                    className="menu-mobile-arrow"
                    onClick={handleback}
                  >
                    <i className="fas fa-angle-left"></i>
                  </button>
                  <div className="menu-mobile-title">{headTitle}</div>
                  <button
                    type="button"
                    onClick={handleClick}
                    className="menu-mobile-close"
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
                <ul className="menu-section">
                  <li>
                    <a href="#home">Home</a>
                  </li>
                  <li
                    className="menu-item-has-children"
                    onClick={() => handleSubMenu("newProduct")}
                  >
                    <a href="#new-product">
                      New Products <i className="fas fa-angle-right"></i>
                    </a>
                    <div
                      className={`menu-subs menu-mega menu-column-4 ${
                        subMenu.newProduct === true ? "active" : ""
                      }`}
                    >
                      <div className="list-item text-center">
                        <a href="#new-product-id1">
                          <img
                            src="/images/image-1.jpg"
                            className="responsive"
                            alt="New Product"
                          />
                          <h4 className="title">New Product 1</h4>
                        </a>
                      </div>
                      <div className="list-item text-center">
                        <a href="#new-product-id1">
                          <img
                            src="/images/image-2.jpg"
                            className="responsive"
                            alt="New Product"
                          />
                          <h4 className="title">New Product 2</h4>
                        </a>
                      </div>
                      <div className="list-item text-center">
                        <a href="#new-product-id1">
                          <img
                            src="/images/image-3.jpg"
                            className="responsive"
                            alt="New Product"
                          />
                          <h4 className="title">New Product 3</h4>
                        </a>
                      </div>
                      <div className="list-item text-center">
                        <a href="#new-product-id1">
                          <img
                            src="/images/image-4.jpg"
                            className="responsive"
                            alt="New Product"
                          />
                          <h4 className="title">New Product 4</h4>
                        </a>
                      </div>
                    </div>
                  </li>
                  <li
                    className="menu-item-has-children"
                    onClick={() => handleSubMenu("categories")}
                  >
                    <a href="#categories">
                      Categories <i className="fas fa-angle-right"></i>
                    </a>
                    <div
                      className={`menu-subs menu-mega menu-column-4 ${
                        subMenu.categories === true ? "active" : ""
                      }`}
                    >
                      <div className="list-item">
                        <h4 className="title">Men's Fashion</h4>
                        <ul>
                          <li>
                            <a href="#fake-link">Product List</a>
                          </li>
                          <li>
                            <a href="#fake-link">Product List</a>
                          </li>
                          <li>
                            <a href="#fake-link">Product List</a>
                          </li>
                          <li>
                            <a href="#fake-link">Product List</a>
                          </li>
                        </ul>
                        <h4 className="title">Kid's Fashion</h4>
                        <ul>
                          <li>
                            <a href="#fake-link">Product List</a>
                          </li>
                          <li>
                            <a href="#fake-link">Product List</a>
                          </li>
                          <li>
                            <a href="#fake-link">Product List</a>
                          </li>
                          <li>
                            <a href="#fake-link">Product List</a>
                          </li>
                        </ul>
                      </div>
                      <div className="list-item">
                        <h4 className="title">Women's Fashion</h4>
                        <ul>
                          <li>
                            <a href="#fake-link">Product List</a>
                          </li>
                          <li>
                            <a href="#fake-link">Product List</a>
                          </li>
                          <li>
                            <a href="#fake-link">Product List</a>
                          </li>
                          <li>
                            <a href="#fake-link">Product List</a>
                          </li>
                        </ul>
                        <h4 className="title">Health &amp; Beauty</h4>
                        <ul>
                          <li>
                            <a href="#fake-link">Product List</a>
                          </li>
                          <li>
                            <a href="#fake-link">Product List</a>
                          </li>
                          <li>
                            <a href="#fake-link">Product List</a>
                          </li>
                          <li>
                            <a href="#fake-link">Product List</a>
                          </li>
                        </ul>
                      </div>
                      <div className="list-item">
                        <h4 className="title">Home &amp; Lifestyle</h4>
                        <ul>
                          <li>
                            <a href="#fake-link">Product List</a>
                          </li>
                          <li>
                            <a href="#fake-link">Product List</a>
                          </li>
                          <li>
                            <a href="#fake-link">Product List</a>
                          </li>
                          <li>
                            <a href="#fake-link">Product List</a>
                          </li>
                          <li>
                            <a href="#fake-link">Product List</a>
                          </li>
                          <li>
                            <a href="#fake-link">Product List</a>
                          </li>
                          <li>
                            <a href="#fake-link">Product List</a>
                          </li>
                          <li>
                            <a href="#fake-link">Product List</a>
                          </li>
                          <li>
                            <a href="#fake-link">Product List</a>
                          </li>
                        </ul>
                      </div>
                      <div className="list-item">
                        <img
                          src="/images/image-5.jpg"
                          className="responsive"
                          alt="Shop Product"
                        />
                      </div>
                    </div>
                  </li>

                  <li
                    className="menu-item-has-children"
                    onClick={() => handleSubMenu("accounts")}
                  >
                    <a href="#accounts">
                      Accounts <i className="fas fa-angle-right"></i>
                    </a>
                    <div
                      className={`menu-subs menu-column-1 ${
                        subMenu.accounts === true ? "active" : ""
                      }`}
                    >
                      <ul>
                        <li>
                          <a href="#fake-link">Login &amp; Register</a>
                        </li>
                        <li>
                          <a href="#fake-link">Help &amp; Question</a>
                        </li>
                        <li>
                          <a href="#fake-link">Privacy &amp; Policy</a>
                        </li>
                        <li>
                          <a href="#fake-link">Term of Cookies</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a href="#contact">Contact Us</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="header-item-right">
              <a href="#search" className="menu-icon">
                <i className="fas fa-search"></i>
              </a>
              <a href="#like" className="menu-icon">
                <i className="fas fa-heart"></i>
              </a>
              <a href="#addcart" className="menu-icon">
                <i className="fas fa-shopping-cart"></i>
              </a>
              <label className="burger burger3" htmlFor="burger3">
                <input
                  className="hidden"
                  id="burger3"
                  checked={checked}
                  onChange={handleClick}
                  type="checkbox"
                />
                <span></span>
              </label>
              {/* <div className="menu cross menu--1">
                <label
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <input type="checkbox" onChange={handleClick} />
                  <svg viewBox="15 15 70 70" xmlns="http://www.w3.org/2000/svg">
                    <path
                      className="line--1"
                      d="M0 40h62c13 0 6 28-4 18L35 35"
                    />
                    <path className="line--2" d="M0 50h70" />
                    <path
                      className="line--3"
                      d="M0 60h62c13 0 6-28-4-18L35 65"
                    />
                  </svg>
                </label>
              </div> */}
            </div>
          </div>
        </div>
      </header>
    </DIV>
  );
};

export default ResponsiveMegaMenu;
