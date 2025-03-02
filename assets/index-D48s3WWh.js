import{r as p,u as g,j as e,O as G,L as B,f as L,g as D,h as W,k as E,l as O,m as Q,n as q,P as F,o as V}from"./r-CxA_uJUv.js";import{c as r,u as P,a,L as U,D as H,P as K,T as J,A as X,b as Y,B as Z,C as ee,d as te,e as ae}from"./@-CfbeRS8y.js";import{A as C,m,M as ie}from"./m-c3AMWlUK.js";import{b as re,B as oe,c as ne}from"./i-D_Hid3gM.js";import"./index-D48s3WWh.js";import"./s-CHkPqRwO.js";import"./u-CTLnRSN8.js";import"./c-CaDO6e2W.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))d(c);new MutationObserver(c=>{for(const h of c)if(h.type==="childList")for(const l of h.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&d(l)}).observe(document,{childList:!0,subtree:!0});function i(c){const h={};return c.integrity&&(h.integrity=c.integrity),c.referrerPolicy&&(h.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?h.credentials="include":c.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function d(c){if(c.ep)return;c.ep=!0;const h=i(c);fetch(c.href,h)}})();var dt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function st(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}function n(s){return`@media (max-width: ${_[s]})`}function de(s){const o=[t.PR_CardParent];switch(s){case"wip":o.push(t.PR_Card_WIP);break;case"new":o.push(t.PR_Card_NEW);break}return o}const _={xs:"36em",sm:"48em",md:"62em",lg:"75em",xl:"88em",xxl:"120em",xxxl:"160em"},y={xl:"3.5em",lg:"2.4em",md:"1.5em",smMd:"1.25em",sm:"1em",xs:"0.8em"},t={BreakpointTest:r`
    display: none; /* comment if you want to show it*/
    background: var(--bd-th-default-background);
    color: var(--bd-th-default-foreground);
    width: 30px;
    height: 30px;
    z-index: 999;
    position: absolute;
    &::before {
      content: 'xxxl';
    }
    ${n("xxl")} {
      &::before {
        content: 'xxl';
      }
    }
    ${n("xl")} {
      &::before {
        content: 'xl';
      }
    }
    ${n("lg")} {
      &::before {
        content: 'lg';
      }
    }
    ${n("md")} {
      &::before {
        content: 'md';
      }
    }
    ${n("sm")} {
      &::before {
        content: 'sm';
      }
    }
    ${n("xs")} {
      &::before {
        content: 'xs';
      }
    }
  `,IconSize:r`
    width: var(--bd-th-icon-size) !important;
    height: var(--bd-th-icon-size) !important;
  `,IconWideSize:r`
    height: var(--bd-th-icon-size) !important;
  `,Scaffold:r`
    background: linear-gradient(
      174deg,
      var(--bd-th-scaffold-gradient-start) 0%,
      var(--bd-th-scaffold-gradient-end) 100%
    );
    height: 100dvh;
    width: 100vw;
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: var(--bd-th-tab-bar-standard-size) auto;

    ${n("md")} {
      background: linear-gradient(
        115deg,
        var(--bd-th-scaffold-gradient-start) 0%,
        var(--bd-th-scaffold-gradient-end) 100%
      );
      grid-template-rows: auto var(--bd-th-tab-bar-reduced-size);
      grid-template-columns: 1fr;
    }
    overflow: hidden;
  `,ContentSection:r`
    filter: drop-shadow(0px 0px 2px var(--bd-th-softshadow-primary-light))
      drop-shadow(0px 0px 15px var(--bd-th-softshadow-secondary-light));
    border-left: var(--bd-th-tab-bar-border-size)
      var(--bd-th-default-background) solid;
    background-color: var(--bd-th-default-background);
    ${n("md")} {
      border-left: none;
      border-bottom: var(--bd-th-tab-bar-border-size)
        var(--bd-th-default-background) solid;
    }
  `,ContentSectionInside:r`
    --x: var(--bd-th-quick-button-space-size);

    background-color: var(--bd-th-default-background);
    font-family: 'Noto-Sans', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    height: 100%;
    display: flex;
    flex-direction: row;
    clip-path: polygon(
      var(--x) 0,
      100% 0,
      100% 100%,
      var(--x) 100%,
      0 calc(100% - var(--x)),
      0 var(--x)
    );
    ${n("md")} {
      clip-path: polygon(
        100% 0,
        100% calc(100% - var(--x)),
        calc(100% - var(--x)) 100%,
        var(--x) 100%,
        0 calc(100% - var(--x)),
        0 0
      );
    }
  `,QuickButtonTop:r`
    position: absolute;
    background: linear-gradient(
      180deg,
      var(--bd-th-primary-gradient-start) 0%,
      var(--bd-th-primary-gradient-end) 80%
    );
    color: var(--bd-th-default-foreground-white);
    display: flex;
    align-items: start;
    top: 0;
    width: var(--bd-th-quick-button-size);
    height: var(--bd-th-quick-button-size);
    clip-path: polygon(0 0, 0% 100%, 100% 0);
    &:hover {
      background: linear-gradient(
        180deg,
        var(--bd-th-default-background) 0%,
        var(--bd-th-default-background) 80%
      ) !important;
      color: var(--bd-th-default-foreground);

      & > button {
        filter: none;
      }
    }
    ${n("md")} {
      align-items: end;
      top: initial;
      bottom: 0;
      clip-path: polygon(0 0, 0% 100%, 100% 100%);
    }
  `,QuickButtonBottom:r`
    position: absolute;
    background: linear-gradient(
      180deg,
      var(--bd-th-secondary-gradient-start) 0%,
      var(--bd-th-secondary-gradient-end) 80%
    );
    color: var(--bd-th-default-foreground-white);
    display: flex;
    align-items: end;
    bottom: 0;
    width: var(--bd-th-quick-button-size);
    height: var(--bd-th-quick-button-size);
    clip-path: polygon(0 0, 0% 100%, 100% 100%);
    &:hover {
      background: linear-gradient(
        180deg,
        var(--bd-th-default-background) 0%,
        var(--bd-th-default-background) 80%
      ) !important;
      color: var(--bd-th-default-foreground);

      & > button {
        filter: none;
      }
    }
    ${n("md")} {
      justify-content: end;
      bottom: 0;
      right: 0;
      clip-path: polygon(100% 0, 0% 100%, 100% 100%);
    }
  `,QuickButtonInside:r`
    padding: 0.5em;
    filter: drop-shadow(0px 0px 3px var(--bd-th-softshadow-primary-light));
    ${n("md")} {
      padding: 0.4em;
    }
  `,TabBar:r`
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1em;
    grid-row: 1;
    ${n("md")} {
      flex-direction: row;
      grid-row: 2;
    }
  `,TabBarItem:r`
    font-family: 'Gabarito', 'Gill Sans', 'Gill Sans MT', Calibri,
      'Trebuchet MS', sans-serif;
    font-weight: 500;
    letter-spacing: 0.025em;
    color: var(--bd-th-default-foreground);
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    width: var(--bd-th-tab-bar-item-size);
    height: var(--bd-th-tab-bar-item-size);
    border-top: var(--bd-th-tab-bar-item-border-top) solid transparent;
    border-radius: var(--bd-th-tab-bar-item-border-radius);
    & > span {
      font-size: ${y.xs};
    }
    &[data-active='true'] {
      cursor: default;
    }
    &[data-active='subpage'] {
      cursor: pointer;
    }
    &[data-active='false']:hover {
      border-top: var(--bd-th-tab-bar-item-border-top) solid
        var(--bd-th-frutiger-border-top) !important;
      background: linear-gradient(
        180deg,
        var(--bd-th-frutiger-gradient-start) 0%,
        var(--bd-th-frutiger-gradient-end) 100%
      ) !important;
      filter: drop-shadow(
        0px 4px 2px var(--bd-th-softshadow-primary-light)
      ) !important;
    }
    ${n("md")} {
      width: var(--bd-th-tab-bar-item-width-md);
      height: var(--bd-th-tab-bar-item-size);
    }
  `,AboutMePage:r`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100dvh;
    ${n("md")} {
      border-left: none;
      height: calc(100dvh - var(--bd-th-tab-bar-full-reduced-size));
    }
    &:before {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: -2;
      filter: blur(100px);
      background: linear-gradient(
        80deg,
        var(--bd-th-default-background) 0%,
        var(--bd-th-background-blue) 30%,
        var(--bd-th-background-green) 80%,
        var(--bd-th-default-background) 100%
      );
    }
  `,AM_Container:r`
    overflow: hidden;
    display: flex;
    flex-direction: column;
  `,AM_Banner:r`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    max-width: 100%;
  `,AM_Title:r`
    font-family: 'Gabarito', 'Gill Sans', 'Gill Sans MT', Calibri,
      'Trebuchet MS', sans-serif;
    font-size: 12vw;
    line-height: 0.8em;
    background: linear-gradient(
      120deg,
      var(--bd-th-title-gradient-start) 0%,
      var(--bd-th-title-gradient-end) 100%
    );
    background-clip: text;
    color: transparent;
    & > svg {
      position: absolute;
      height: 100%;
      width: 100%;
    }
    ${n("xs")} {
      font-size: 14vw;
    }
  `,AM_Bold:r`
    font-weight: 900;
    padding-bottom: 0.25em;
  `,AM_Subtitle:r`
    justify-self: flex-end;
    font-family: 'Anton SC', 'Gill Sans', 'Gill Sans MT', Calibri,
      'Trebuchet MS', sans-serif;
    font-size: 3vw;
    background: linear-gradient(
      -145deg,
      var(--bd-th-subtitle-gradient-start) 0%,
      var(--bd-th-subtitle-gradient-end) 100%
    );
    background-clip: text;
    color: transparent;
    ${n("xs")} {
      font-size: 4vw;
    }
  `,AM_DescriptionContainer:r`
    padding: 6em 30em;
    ${n("xxl")} {
      padding: 4em 20em;
    }
    ${n("xl")} {
      padding: 4em 10em;
    }
    ${n("sm")} {
      padding: 4em 6em;
    }
    ${n("xs")} {
      padding: 2em 1em;
    }
  `,AM_Description:r`
    white-space: pre-line;
    text-align: left;
    padding: var(--bd-th-padding-tight);
    border-top: var(--bd-th-tab-bar-item-border-top) solid
      var(--bd-th-frutiger-border-top) !important;
    background: linear-gradient(
      180deg,
      var(--bd-th-frutiger-gradient-start) 0%,
      var(--bd-th-frutiger-gradient-end) 100%
    ) !important;
    color: var(--bd-th-default-foreground);
    filter: drop-shadow(4px 4px 10px var(--bd-th-frutiger-glow-primary))
      drop-shadow(-4px -4px 10px var(--bd-th-frutiger-glow-secondary)) !important;
    box-sizing: border-box;
    border-radius: 1em;
    font-size: 1.75em;
    ${n("xxl")} {
      font-size: 1.4em;
    }
    ${n("md")} {
      font-size: 1.25em;
    }
    ${n("xs")} {
      font-size: 1em;
    }
  `,ProfilePic:r`
    border-radius: 100%;
    max-width: 14vw;
    max-height: 14vw;
    margin: 1vw;
  `,ProjectsPage:r`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100dvh;
    ${n("md")} {
      border-left: none;
      height: calc(100dvh - var(--bd-th-tab-bar-full-reduced-size));
    }
    &:before {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: -2;
      filter: blur(100px);
      background: linear-gradient(
        145deg,
        var(--bd-th-default-background) 0%,
        var(--bd-th-background-orange) 30%,
        var(--bd-th-background-teal) 80%,
        var(--bd-th-default-background) 100%
      );
    }
  `,PR_Container:r`
    padding: var(--bd-th-padding-standard);
    padding-top: var(--bd-th-padding-verytight);
    overflow-y: auto;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: var(--bd-th-gap-standard);
    mask-image: linear-gradient(
        to bottom,
        transparent 0,
        black var(--bd-th-padding-standard),
        black calc(100% - var(--bd-th-padding-standard)),
        transparent 100%
      ),
      linear-gradient(to left, black 25px, transparent 20px);
    ${n("md")} {
      padding: var(--bd-th-padding-tight);
      padding-top: var(--bd-th-padding-verytight);
      padding-bottom: var(--bd-th-padding-standard);
      mask-image: linear-gradient(
          to bottom,
          transparent 0,
          black var(--bd-th-padding-tight),
          black calc(100% - var(--bd-th-padding-standard)),
          transparent 100%
        ),
        linear-gradient(to left, black 25px, transparent 20px);
    }
  `,PR_Title:r`
    position: relative;
    text-align: start;
    font-family: 'Anton SC', 'Gill Sans', 'Gill Sans MT', Calibri,
      'Trebuchet MS', sans-serif;
    font-weight: 500;
    letter-spacing: 0.025em;
    color: var(--bd-th-default-foreground);
    font-size: ${y.xl};
    margin-top: var(--bd-th-padding-verytight);
    &:before {
      content: '';
      height: 100%;
      width: 100%;
      z-index: -1;
      left: -2em;
      position: absolute;
      background: linear-gradient(
        to right,
        var(--bd-th-default-background) 50%,
        transparent 100%
      );
      filter: drop-shadow(0px 4px 4px var(--bd-th-softshadow-primary-light));
    }
    ${n("md")} {
      &:before {
        content: '';
        left: var(--bd-th-padding-tight-negative);
        width: calc(100% + var(--bd-th-padding-tight));
      }
    }
    ${n("xs")} {
      margin-top: var(--bd-th-padding-verytight);
      font-size: ${y.md};
    }
  `,PR_PG_Columns:r`
    color: var(--bd-th-default-foreground);
    display: flex;
    flex-direction: row;
    height: 100%;
    min-height: 0;
    gap: var(--bd-th-gap-standard);
    ${n("md")} {
      height: unset;
      min-height: unset;
      flex-direction: column-reverse;
      justify-content: start;
    }
  `,PR_PG_Image_Logo:r`
    height: 1em;
    position: relative;
    top: 0.05em;
    padding-right: 0.25em;
    aspect-ratio: 1/1;
  `,PR_PG_Image_Logo_Bg:r`
    position: absolute;
    height: 50vh;
    bottom: -5em;
    left: -5em;
    padding-right: 0.25em;
    aspect-ratio: 1/1;
    opacity: 0.075;
    z-index: -2;
    rotate: -25deg;
    ${n("md")} {
      height: 40vh;
      bottom: -7em;
      left: -7em;
    }
    filter: var(--bd-th-bw-image-filter);
  `,PR_PG_Image:r`
    object-fit: cover;
    width: 100%;
    border-radius: 0.8em;
    margin: 1.25em 0;
    filter: drop-shadow(0px 6px 6px var(--bd-th-generic-black-shadow));
  `,PR_PG_Image_Container:r`
    align-self: center;
    width: 100%;
    height: fit-content;
    ${n("md")} {
      flex-direction: column-reverse;
      justify-content: start;
    }
  `,PR_PG_Description:r`
    color: var(--bd-th-default-foreground);
    white-space: pre-line;
    text-align: left;
    box-sizing: border-box;
    font-size: 1.75em;
    padding: 1rem 2rem;
    ${n("xxl")} {
      font-size: 1.4em;
    }
    ${n("md")} {
      font-size: 1.25em;
    }
  `,PR_PG_Credits:r`
    align-self: flex-end;
    width: 80%;
    text-align: end;
    box-sizing: border-box;
    font-size: 1.25em;
    padding: 1rem 2rem;
    ${n("xxl")} {
      font-size: 1em;
    }
  `,PR_PG_Text_Container:r`
    overflow-y: auto;
    overflow-x: hidden;
    flex-direction: column;
    display: flex;
    width: fit-content;
    max-height: 100%;
    margin: auto;
    ${n("md")} {
      overflow: unset;
      justify-content: start;
    }
  `,PR_DynamicGrid:r`
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(auto-fill, 20em);
    gap: var(--bd-th-gap-standard);
    ${n("md")} {
      grid-template-columns: 1fr;
      gap: var(--bd-th-gap-tight);
    }
  `,PR_Badge_Group:r`
    display: flex;
    flex-direction: row;
    box-shadow: 0 2px 4px var(--bd-th-generic-black-shadow-light);
  `,PR_Badge:r`
    background: linear-gradient(
      180deg,
      var(--bd-th-primary-gradient-start) 0%,
      var(--bd-th-primary-gradient-end) 100%
    );
    padding: 0.5em 0.7em;
    color: white;
    font-weight: 600;
    text-shadow: 0 2px 4px var(--bd-th-softshadow-primary-light);
  `,PR_Badge_Grey:r`
    background: linear-gradient(
      180deg,
      var(--bd-th-bw-gradient-start) 0%,
      var(--bd-th-bw-gradient-end) 100%
    );
    padding: 0.5em 0.7em;
    color: white;
    font-weight: 600;
    text-shadow: 0 2px 4px var(--bd-th-generic-black-shadow-light);
  `,PR_PG_Flex_Row:r`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: var(--bd-th-gap-verytight);
  `,PR_PG_Details_Row:r`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    gap: var(--bd-th-gap-verytight);
  `,PR_Button:r`
    cursor: pointer;
    padding: 0.7em 1em;
    color: white;
    font-weight: 600;
    background: linear-gradient(
      180deg,
      var(--bd-th-secondary-gradient-start) 0%,
      var(--bd-th-secondary-gradient-end) 100%
    );
    text-shadow: 0 2px 4px var(--bd-th-secondary-800);
  `,PR_CardParent:r`
    position: relative;
    filter: drop-shadow(0px 0px 2px var(--bd-th-softshadow-primary-light))
      drop-shadow(0px 0px 15px var(--bd-th-softshadow-secondary-light));
    &:hover #bottomRightDecoration {
      background: linear-gradient(
        180deg,
        var(--bd-th-secondary-gradient-start) 20%,
        var(--bd-th-secondary-gradient-end) 120%
      );
    }
    cursor: pointer;
  `,PR_Card:r`
    width: var(--bd-th-card-width);
    height: var(--bd-th-card-height);
    clip-path: polygon(
      0% 0%,
      100% 0,
      100% calc(100% - var(--bd-th-card-decoration-spacing)),
      calc(100% - var(--bd-th-card-decoration-spacing)) 100%,
      0 100%
    );
    ${n("md")} {
      width: 100%;
      height: var(--bd-th-card-height-md);
    }
    ${n("xs")} {
      width: 100%;
      height: var(--bd-th-card-height-xs);
    }
  `,PR_Card_WIP:r`
    filter: grayscale(100) drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.4))
      drop-shadow(0px 0px 15px rgba(0, 0, 0, 0.2));
    cursor: default;
    &:hover #bottomRightDecoration {
      background: var(--bd-th-default-background);
    }
  `,PR_Card_NEW:r`
    & > #mainCardContainer {
      clip-path: polygon(
        var(--bd-th-card-decoration-spacing-big) 0%,
        100% 0,
        100% calc(100% - var(--bd-th-card-decoration-spacing)),
        calc(100% - var(--bd-th-card-decoration-spacing)) 100%,
        0 100%,
        0% var(--bd-th-card-decoration-spacing-big)
      );
    }
  `,PR_Card_TopLeftDecoration:r`
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(
      180deg,
      var(--bd-th-primary-700) 0%,
      var(--bd-th-primary-300) 100%
    );
    width: var(--bd-th-card-decoration-size-big);
    height: var(--bd-th-card-decoration-size-big);
    clip-path: polygon(100% 0, 0 0, 0 100%);
  `,PR_Card_BottomRightDecoration:r`
    position: absolute;
    bottom: 0;
    right: 0;
    background: var(--bd-th-default-background);
    width: var(--bd-th-card-decoration-size);
    height: var(--bd-th-card-decoration-size);
    clip-path: polygon(100% 0, 0% 100%, 100% 100%);
  `,PR_Card_Background:r`
    position: absolute;
    left: 0;
    object-fit: cover;
    object-position: 100% 0;
    width: 200%;
    filter: blur(2px);
    z-index: -2;
    ${n("md")} {
      top: -15vw;
      height: 40vw;
    }
  `,PR_Card_BackgroundGradient:r`
    position: absolute;
    background: linear-gradient(
      120deg,
      transparent 10%,
      var(--bd-th-default-background) 60%
    );
    width: 100%;
    height: 100%;
    z-index: -1;
    ${n("md")} {
      background: linear-gradient(
        120deg,
        transparent 10%,
        var(--bd-th-default-background) 50%
      );
      top: -15vw;
      height: 40vw;
    }
  `,PR_Card_TextContainer:r`
    display: flex;
    flex-direction: column;
    gap: var(--bd-th-gap-big);
    justify-content: flex-end;
    height: 100%;
    box-sizing: border-box;
    padding: var(--bd-th-padding-tight);
    text-align: right !important;
    ${n("md")} {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: var(--bd-th-padding-midtight);
    }
    ${n("xs")} {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      gap: 0;
      padding: var(--bd-th-padding-verytight) var(--bd-th-padding-tight);
    }
    &:before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: var(--bd-th-card-textcontainer-height);
      z-index: -1;
      background-color: var(--bd-th-card-text-container-background);
    }
  `,PR_Card_Image_Logo:r`
    display: none;
    ${n("md")} {
      display: unset;
      aspect-ratio: 1/1;
      filter: drop-shadow(0 2px 2px var(--bd-th-generic-black-shadow));
      width: var(--bd-th-card-logo);
    }
  `,PR_Card_Title:r`
    font-family: 'Gabarito', 'Gill Sans', 'Gill Sans MT', Calibri,
      'Trebuchet MS', sans-serif;
    font-weight: 500;
    letter-spacing: 0.025em;
    color: var(--bd-th-default-foreground);
    font-size: ${y.lg};
    text-shadow:
      0px 2px var(--bd-th-default-background),
      2px 2px var(--bd-th-default-background),
      -2px -2px var(--bd-th-default-background),
      2px -2px var(--bd-th-default-background),
      -2px 2px var(--bd-th-default-background),
      -2px 0px var(--bd-th-default-background),
      2px 0px var(--bd-th-default-background),
      0px -2px var(--bd-th-default-background),
      0px 2px 5px var(--bd-th-generic-black-shadow);
    ${n("xs")} {
      font-size: ${y.smMd};
    }
  `,PR_Card_Text:r`
    color: var(--bd-th-default-foreground);
    ${n("md")} {
      display: none;
    }
  `,MascotPage:r`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100dvh;
    color: var(--bd-th-default-foreground);
    font-weight: 500;
    ${n("md")} {
      border-left: none;
      height: calc(100dvh - var(--bd-th-tab-bar-full-reduced-size));
    }
    &:before {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: -2;
      filter: blur(100px);
      background: linear-gradient(
        225deg,
        var(--bd-th-default-background) 0%,
        var(--bd-th-background-green) 30%,
        var(--bd-th-background-blue) 80%,
        var(--bd-th-default-background) 100%
      );
    }
  `,MA_Container:r`
    overflow: hidden;
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: inherit;
    ${n("md")} {
      display: flex;
    }
    &:before {
      content: '';
      width: 50%;
      height: 100%;
      right: 0;
      position: absolute;
      z-index: 90;
      background: linear-gradient(
        180deg,
        var(--bd-th-default-background) 0%,
        transparent 5%,
        transparent 90%,
        var(--bd-th-default-background) 100%
      );
      pointer-events: none;
      mask-image: linear-gradient(to left, transparent 25px, black 20px);
      ${n("md")} {
        width: 100%;
      }
    }
  `,MA_Render:r`
    position: absolute;
    left: -5vw;
    top: 0;
    max-height: 100dvh;
    ${n("xl")} {
      position: absolute;
      left: -35%;
      top: 0;
    }
    z-index: -1;
    & > img {
      height: 100dvh;
    }
  `,MA_DescriptionContainer:r`
    padding: var(--bd-th-padding-medium);
    grid-column: 2;
    background-color: var(--bd-th-card-text-container-background);
    backdrop-filter: blur(5px);
    box-sizing: border-box;
    overflow-y: auto;
    ${n("md")} {
      padding: var(--bd-th-padding-medium) 0em var(--bd-th-padding-standard) 0em;
    }
  `,MA_Title:r`
    font-family: 'Gabarito', 'Gill Sans', 'Gill Sans MT', Calibri,
      'Trebuchet MS', sans-serif;
    font-size: 10vw;
    line-height: 0.8em;
    background: linear-gradient(
      120deg,
      var(--bd-th-title-gradient-start) 0%,
      var(--bd-th-title-gradient-end) 100%
    );
    background-clip: text;
    color: transparent;
    & > svg {
      position: absolute;
      height: 100%;
      width: 100%;
    }
    ${n("md")} {
      font-size: 17vw;
    }
  `,MA_Bold:r`
    font-weight: 900;
    padding-bottom: 0.25em;
  `,MA_Description:r`
    white-space: pre-line;
    text-align: left;
    padding: 2em;
    font-size: 1.75em;
    ${n("xxl")} {
      font-size: 1.4em;
    }
    ${n("md")} {
      font-size: 1.25em;
    }
    ${n("xs")} {
      font-size: 1em;
    }
  `,PR_PG_Flex_Row_Center:r`
    justify-content: space-evenly;
    ${n("md")} {
      gap: var(--bd-th-gap-standard);
    }
  `,MA_Gallery_Item:r`
    display: flex;
    flex-direction: column;
    gap: var(--bd-th-gap-standard);
    align-items: center;
    justify-content: center;
    font-style: italic;
  `,MA_Gallery_Image:r`
    padding: 0em 1em;
    display: block;
    max-height: 10vw;
    width: auto;
    height: auto;
    ${n("md")} {
      max-height: 30vw;
    }
  `,MA_Gallery_Image_Sketch:r`
    filter: var(--bd-th-bw-image-filter);
  `,ContactPage:r`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100dvh;
    ${n("md")} {
      border-left: none;
      height: calc(100dvh - var(--bd-th-tab-bar-full-reduced-size));
    }
    &:before {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: -2;
      filter: blur(100px);
      background: linear-gradient(
        15deg,
        var(--bd-th-default-background) 0%,
        var(--bd-th-background-purple) 30%,
        var(--bd-th-background-red) 80%,
        var(--bd-th-default-background) 100%
      );
    }
  `,CO_Icons:r`
    display: unset;
    position: absolute;
    bottom: -3em;
    left: -10em;
    scale: 40%;
    z-index: -4;
    ${n("md")} {
      display: unset;
      position: unset;
      scale: 60%;
      z-index: 0;
      border-left: none;
      height: calc(100dvh - var(--bd-th-tab-bar-full-reduced-size));
    }
    filter: drop-shadow(0px 4px 0px var(--bd-th-default-foreground-white))
      drop-shadow(0px -4px 0px var(--bd-th-default-foreground-white))
      drop-shadow(4px 0px 0px var(--bd-th-default-foreground-white))
      drop-shadow(-4px 0px 0px var(--bd-th-default-foreground-white))
      drop-shadow(0px 4px 5px rgba(0, 0, 0, 0.25)) !important;
  `,CO_ObfuscatorFixOnMobile:r`
    & > a[href='obfuscated'] section {
      flex-direction: column;
    }

    ${n("md")} {
      & > a[href='obfuscated'] section {
        flex-direction: row;
      }
    }
  `,QuickButtonOption:r`
    line-height: 0;
    height: 2.5em;
    width: 2.5em;
    color: var(--bd-th-default-foreground-white);
    background: var(--bd-th-dark-transparent-20);
    filter: drop-shadow(0px 0px 3px var(--bd-th-softshadow-secondary-light));
    border: 0.2em solid var(--bd-th-default-foreground-white);
    border-radius: 100%;
    font-family: 'Gabarito', Arial, Helvetica, sans-serif;
    font-weight: 600;
    letter-spacing: 0.025em;
    text-align: center & > svg {
      width: 28px !important;
      height: 28px !important;
    }
    &:hover {
      background: var(--bd-th-default-foreground-white);
      color: var(--bd-th-secondary-800);
    }
  `,QuickButtonContainer:r`
    display: flex;
    justify-content: end;
    align-items: center;
    height: 100%;
    padding-right: var(--bd-th-padding-medium);
    gap: 1em;
    ${n("md")} {
      justify-content: start;
      align-items: center;
      padding-right: 0;
      padding-top: var(--bd-th-padding-medium);
      flex-direction: column;
    }
  `,QuickButtonBottomFloat:r`
    position: inherit;
    width: 17.5em;
    height: var(--bd-th-quick-button-size);
    bottom: 0;
    background: linear-gradient(
      180deg,
      var(--bd-th-primary-gradient-start) 0%,
      var(--bd-th-primary-gradient-end) 100%
    );
    z-index: 10;
    clip-path: polygon(
      0 0,
      calc(100% - var(--bd-th-tab-bar-button-space-minus-size)) 0,
      100% 100%,
      var(--bd-th-tab-bar-button-space-minus-size) 100%
    );
    ${n("md")} {
      right: 0;
      height: 17.5em;
      width: var(--bd-th-quick-button-size);
      clip-path: polygon(
        0 var(--bd-th-tab-bar-button-space-minus-size),
        100% 0%,
        100% calc(100% - var(--bd-th-quick-button-size)),
        0 100%
      );
    }
  `,QuickButtonBottomFloatAux:r`
    pointer-events: auto;
    position: absolute;
    bottom: 0;
    background: var(--bd-th-default-background);
    z-index: 11;
    clip-path: polygon(
      0 0,
      calc(100% - var(--bd-th-quick-button-size)) 0,
      100% 100%,
      var(--bd-th-quick-button-size) 100%,
      0 calc(100% - var(--bd-th-quick-button-size))
    );
    ${n("md")} {
      right: 0;
      clip-path: polygon(
        100% calc(100% - var(--bd-th-quick-button-size)),
        var(--bd-th-tab-bar-border-size) 100%,
        0 100%,
        0 var(--bd-th-quick-button-size),
        100% 0
      );
    }
  `,QuickButtonTopFloat:r`
    position: inherit;
    width: 14em;
    height: var(--bd-th-quick-button-size);
    background: linear-gradient(
      180deg,
      var(--bd-th-secondary-gradient-start) 0%,
      var(--bd-th-secondary-gradient-end) 80%
    );
    z-index: 10;
    clip-path: polygon(
      var(--bd-th-quick-button-size) 0,
      100% 0,
      calc(100% - var(--bd-th-quick-button-size)) 100%,
      0 100%,
      0 var(--bd-th-quick-button-size)
    );
    ${n("md")} {
      bottom: 0;
      height: 14em;
      width: var(--bd-th-quick-button-size);
      clip-path: polygon(
        100% var(--bd-th-tab-bar-button-space-minus-size),
        100% 100%,
        var(--bd-th-quick-button-size) 100%,
        0 calc(100% - var(--bd-th-quick-button-size)),
        0 0
      );
    }
  `,QuickButtonTopFloatAux:r`
    pointer-events: auto;
    position: absolute;
    background: var(--bd-th-default-background);
    z-index: 11;
    clip-path: polygon(
      var(--bd-th-quick-button-size) 0,
      100% 0,
      calc(100% - 5.6em) 100%,
      0 100%,
      0 var(--bd-th-quick-button-size)
    );
    ${n("md")} {
      bottom: 0;
      clip-path: polygon(
        100% var(--bd-th-quick-button-size),
        100% 100%,
        var(--bd-th-quick-button-size) 100%,
        0 calc(100% - var(--bd-th-quick-button-size)),
        0 0
      );
    }
  `,ShadowWrapper:r`
    position: absolute;
    top: 0;
    z-index: 11;
    filter: drop-shadow(3px 0px 2px var(--bd-th-softshadow-primary-light));
    width: 100%;
    height: 100%;
    pointer-events: none;
    ${n("md")} {
      filter: drop-shadow(3px -2px 2px var(--bd-th-softshadow-primary-light));
    }
  `,ShadowWrapperBottom:r`
    filter: drop-shadow(3px 0px 2px --bd-th-softshadow-primary-light);
    ${n("md")} {
      filter: drop-shadow(-2px -2px 2px var(--bd-th-softshadow-primary-light));
    }
  `},se=p.memo(function({open:o}){const{t:i,ready:d}=g();function c(b){document.documentElement.setAttribute("boreal-dragon-theme",b),localStorage.setItem("boreal-dragon-theme",b)}let h,l;return P(`(max-width: ${_.md})`)?(h={height:"5em",width:"5.6em"},l={height:"15em",width:"5.6em"}):(h={width:"5em",height:"5.6em"},l={width:"15em",height:"5.6em"}),d&&e.jsx(C,{children:o&&e.jsx("div",{className:a(t.ShadowWrapper),children:e.jsx(m.div,{className:a(t.QuickButtonTopFloatAux),initial:h,animate:l,exit:h,children:e.jsx("div",{className:a(t.QuickButtonTopFloat),children:e.jsxs("div",{className:a(t.QuickButtonContainer),children:[e.jsx("button",{className:a(t.QuickButtonOption),onClick:()=>c("default-light"),title:i("uiTranslations.UI_theme_light"),children:e.jsx(U,{})}),e.jsx("button",{className:a(t.QuickButtonOption),onClick:()=>c("default-dark"),title:i("uiTranslations.UI_theme_dark"),children:e.jsx(H,{})})]})})})})})}),ce=p.memo(function(){const[o,i]=p.useState(!1),{t:d,ready:c}=g();return c&&e.jsxs(m.div,{initial:{opacity:0},animate:{opacity:1},"data-testId":"bd-ts-quick-button-top",children:[e.jsx(se,{open:o}),e.jsx("div",{className:a(t.QuickButtonTop),children:e.jsx("button",{className:a(t.QuickButtonInside),onClick:()=>i(!o),title:d("uiTranslations.UI_theme"),children:e.jsx(K,{className:a(t.IconSize)})})})]})}),le=p.memo(function({open:o}){const{t:i,ready:d,i18n:c}=g();function h(f){c.changeLanguage(f)}let l,u;return P(`(max-width: ${_.md})`)?(l={height:"5em",width:"5.6em"},u={height:"18.5em",width:"5.6em"}):(l={width:"5em",height:"5.6em"},u={width:"18.5em",height:"5.6em"}),d&&e.jsx(C,{children:o&&e.jsx("div",{className:a(t.ShadowWrapper,t.ShadowWrapperBottom),children:e.jsx(m.div,{className:a(t.QuickButtonBottomFloatAux),initial:l,animate:u,exit:l,children:e.jsx("div",{className:a(t.QuickButtonBottomFloat),children:e.jsxs("div",{className:a(t.QuickButtonContainer),children:[e.jsx("button",{className:a(t.QuickButtonOption),onClick:()=>h("en"),title:i("uiTranslations.UI_language_en"),children:"EN"}),e.jsx("button",{className:a(t.QuickButtonOption),onClick:()=>h("es"),title:i("uiTranslations.UI_language_es"),children:"ES"}),e.jsx("button",{className:a(t.QuickButtonOption),onClick:()=>h("ca"),title:i("uiTranslations.UI_language_ca"),children:"CA"})]})})})})})}),he=p.memo(function(){const[o,i]=p.useState(!1),{t:d,ready:c}=g();return c&&e.jsxs(m.div,{initial:{opacity:0},animate:{opacity:1},"data-testId":"bd-ts-quick-button-bottom",children:[e.jsx(le,{open:o}),e.jsx("div",{className:a(t.QuickButtonBottom),children:e.jsx("button",{className:a(t.QuickButtonInside),onClick:()=>i(!o),title:d("uiTranslations.UI_language"),children:e.jsx(J,{className:a(t.IconSize)})})})]})}),pe=p.memo(function(){const o=P(`(max-width: ${_.md})`);return e.jsxs("div",{className:a(t.ContentSection),"data-testId":"bd-ts-content-section",children:[e.jsx(ce,{}),e.jsx("div",{className:a(t.ContentSectionInside),children:e.jsx(ie,{reducedMotion:o?"always":"user",children:e.jsx(C,{mode:"sync",children:e.jsx(G,{})})})}),e.jsx(he,{})]})}),ue=p.memo(function({children:o}){return e.jsx("div",{className:a(t.Scaffold),"data-testId":"bd-ts-scaffold",children:o})}),N={background:"linear-gradient(0deg, var(--bd-th-default-background) 0%, var(--bd-th-default-background) 100%)",zIndex:99,borderRadius:0},me={activeRight:{x:10,filter:"drop-shadow(-4px 0px 2px var(--bd-th-softshadow-primary-light))",...N},activeTop:{y:-6,filter:"drop-shadow(0px 4px 2px var(--bd-th-softshadow-primary-light))",...N},notActive:{x:0,y:0,filter:"drop-shadow(0px 4px 2px transparent)"}},be=p.forwardRef((s,o)=>{const{icon:i,text:d,isActive:c,path:h}=s;return e.jsx(B,{to:h,"data-testId":`bd-ts-tab-bar-${h}`,children:e.jsxs("button",{className:a(t.TabBarItem),ref:o,"data-active":c,children:[i,e.jsx("span",{children:d})]})})}),ge=m.create(be),fe=p.memo(function({icon:o,text:i,path:d,idx:c}){const h=P(`(max-width: ${_.md})`),l=L(),u=d!=="/"&&l.pathname.includes(d),b=l.pathname===d,f=b||u,w=u&&!b,v=h?f?"activeTop":"notActive":f?"activeRight":"notActive";return e.jsx(ge,{variants:me,whileTap:f?"":{scale:.9,opacity:.5},initial:h?{y:100}:{x:-100},animate:{x:0,y:0,transition:{type:"spring",duration:.5,delay:c*.05}},whileInView:v,icon:w?e.jsx(X,{className:a(t.IconSize)}):o,text:w?"Go back":i,isActive:w?"subpage":f,path:d})}),xe=s=>p.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1391 956",fill:"currentColor",style:{width:40},...s},p.createElement("path",{d:"M693.771 257.072c191.496 0 358.416 205.626 357.714 397.121-.783 213.408-166.218 301.109-357.714 301.109s-357.713-88.483-357.713-301.109c0-191.496 166.217-397.121 357.713-397.121zm0 60.365c-42.598 0-149.618 19.521-226.706 106.705-86.33 97.638-72.433 224.502-72.433 253.695 0 56.944 204.825-78.987 299.139-78.987s299.14 135.931 299.14 78.987c0-29.193 22.993-134.441-72.434-253.695-87.312-109.113-184.108-106.705-226.706-106.705zm107.44 288.255V465.456c0-10.92 8.865-19.785 19.784-19.785s19.785 8.865 19.785 19.785v156.321l-39.569-16.085zm-250.938 14.607V465.456c0-10.92 8.865-19.785 19.784-19.785s19.785 8.865 19.785 19.785v138.891l-1.516.578c-12.574 4.815-25.352 10.037-38.053 15.374zm-15.783 96.936c-4.445 26.07 1.655 37.281 15.653 47.516-2.686-11.539-7.993-23.285-4.156-34.389 24.076-3.943 53.455 2.516 79.273 7.714-29.46-15.555-59.188-21.203-90.77-20.841zm322.527 0c-31.581-.362-61.31 5.286-90.769 20.841 25.817-5.198 55.196-11.657 79.272-7.714 3.837 11.104-1.47 22.85-4.156 34.389 13.998-10.235 20.098-21.446 15.653-47.516zm-536.703-4.517c-57.745 14.526-110.781 51.849-153.624 100.826C178.898 665.371 117.085 624.266 0 656.675c9.026-97.577 82.199-165.351 211.968-204.159 6.377 85.825 45.358 155.851 104.132 196.256l-.042 5.421c0 20.581 1.456 40.081 4.256 58.525zm3.806-135.137c-37.26-63.917-87.153-119.534-144.026-160.193 36.877-71.959 88.515-147.566 160.549-224.111C395.487 127.73 438.702 63.043 459.733 0c-1.872 71.149-14.548 143.098-33.325 215.498l-32.601 86.063c22.547 10.746 44.288 23.013 65.206 36.835-10.814 10.193-21.167 20.988-31.004 32.304-51.238 58.946-88.358 131.924-103.889 206.881zm184.963-279.686c-.664-18.197-.633-39.141 1.963-52.219 5.567-28.052 19.051-74.445 33.676-80.124s37.624 29.02 54.071 46.049c7.674 7.945 17.798 21.133 26.818 33.543-41.261 9.782-80.591 28.071-116.528 52.751zm255.271-52.172c9.125-12.577 19.445-26.053 27.239-34.122 16.447-17.029 39.447-51.728 54.072-46.049s28.108 52.072 33.675 80.124c2.683 13.516 2.627 35.433 1.894 54.036-35.999-25.115-75.46-43.827-116.88-53.989zm165.478 93.695c21.39-14.24 43.646-26.846 66.747-37.857l-32.601-86.063C945.201 143.098 932.525 71.149 930.653 0c21.032 63.043 64.246 127.73 119.09 193.277 72.034 76.545 123.672 152.152 160.55 224.111-57.878 41.377-108.525 98.243-145.987 163.584-14.956-76.148-52.436-150.444-104.518-210.281-9.519-10.936-19.521-21.384-29.956-31.273zm141.647 311.252c60.339-40.089 100.461-110.969 106.939-198.154 129.769 38.808 202.942 106.582 211.968 204.159-117.084-32.409-178.898 8.696-166.69 156.869-43.57-49.809-97.682-87.563-156.568-101.546 2.792-18.193 4.282-37.427 4.356-57.732l-.005-3.596zm-7.094 76.84c.939 1.437 1.808 2.826 2.592 4.156 12.026 20.392 36.459 57.692 29.727 66.518-3.988 5.228-30.316 3.903-55.923.656 10.392-21.596 18.382-45.338 23.604-71.33zm-38.482 98.277c.42 2.726.744 5.3.951 7.66 2.059 23.584 8.021 67.774-1.857 72.835-5.654 2.896-27.478-8.713-48.519-22.098a276.82 276.82 0 0 0 18.566-18.206c11.401-12.288 21.736-25.672 30.859-40.191zm-614.06 59.704c-20.386 12.822-40.985 23.592-46.453 20.791-9.879-5.061-3.917-49.251-1.857-72.835a98.02 98.02 0 0 1 .333-3.185c13.561 20.759 29.691 39.136 47.977 55.229zm-65.435-86.256c-24.561 2.951-48.904 3.96-52.726-1.051-6.731-8.826 17.701-46.126 29.727-66.518l.242-.408c5.157 24.662 12.842 47.297 22.757 67.977z"})),ve=p.memo(function(){const{t:o,ready:i}=g(),d=[{text:o("uiTranslations.UI_aboutMe"),icon:Y,path:"/"},{text:o("uiTranslations.UI_projects"),icon:Z,path:"/_prj"},{text:o("uiTranslations.UI_mascot"),icon:xe,wideIcon:!0,path:"/_msc"},{text:o("uiTranslations.UI_contact"),icon:ee,path:"/_con"}];return i&&e.jsx("div",{className:a(t.TabBar),"data-testId":"bd-ts-tab-bar",children:d.map((c,h)=>e.jsx(fe,{icon:e.jsx(c.icon,{className:c.wideIcon?a(t.IconWideSize):a(t.IconSize)}),text:c.text,idx:h,path:c.path},h))})}),we="2.0.0",ye=["React","Vite","HTML5","CSS (Bootstrap)","JS/TS","GitHub Pages","C#","XAML (WPF)","Standalone (.exe)","Javascript","CSS","WinForms","Lua","Plug-in","Python","Mantine","Redux","Motion"],_e=["Clip Studio Paint","SynthV Studio","VirtualBox","Roll20 Virtual Tabletop","TTS Software","VOCALOID (V3/V4)","Blender","Visual Studio Code","This Website","Online App","Windows 8+"],ke=[{id:"4d72a1a9-e497-489e-9883-cc40cb702957",code:"BOD",isWIP:!0,isNewProject:!1,isWebApp:!1,initialRelease:"",frameworkReference:[],source:"",link:""},{id:"eacb2c82-4057-4da6-8060-8b9a993595bb",code:"ENQ",isWIP:!0,isNewProject:!1,isWebApp:!1,initialRelease:"",frameworkReference:[],source:"",link:""},{id:"0611da0d-767b-451f-93d6-22b7ed85d6e6",code:"PLS2",isNewProject:!0,isWebApp:!1,initialRelease:"28/01/2025",frameworkReference:[0,1,15,16,4,5],source:"",link:"",platformReference:9},{id:"a80b30c5-62ba-48ce-be24-065aa7ac8933",code:"RAR",isNewProject:!1,isWebApp:!0,initialRelease:"23/12/2024",frameworkReference:[0,1,15,16,4,5],platformReference:9,source:"https://github.com/kosmicteal/reactionroll",link:"https://kosmicteal.github.io/reactionroll/"},{id:"605a24f3-1942-442c-b33d-80138a83f160",code:"PLS",isNewProject:!1,isWebApp:!1,initialRelease:"03/09/2023",frameworkReference:[6,7,8],platformReference:10,source:"https://www.youtube.com/watch?v=xaGaDRI7HGs",link:""},{id:"08fc2702-0070-4edc-9b19-9b1f1badab17",code:"WEB",isNewProject:!0,isWebApp:!0,initialRelease:"14/01/2023",frameworkReference:[0,1,16,17,2,5],platformReference:9,source:"",link:""},{id:"0391e3ad-35ac-4362-b1fb-459670aec65a",code:"SPC",isNewProject:!1,isWebApp:!1,initialRelease:"16/07/2023",frameworkReference:[3,4,13],platformReference:7,source:"https://github.com/kosmicteal/spectracode",link:"https://marketplace.visualstudio.com/items?itemName=kosmicteal.spectracode"},{id:"c97af210-3739-410e-bb82-d8d5ff12fff9",code:"CTS",isNewProject:!1,isWebApp:!1,initialRelease:"31/12/2022",frameworkReference:[6,7,8],platformReference:0,source:"https://github.com/kosmicteal/ClipTheSurface",link:"https://github.com/kosmicteal/ClipTheSurface/releases/latest"},{id:"0ae5c25c-9d15-4432-ad6b-23ead186357d",code:"ESD",isNewProject:!1,isWebApp:!1,initialRelease:"31/12/2022",frameworkReference:[6,7,8],platformReference:1,source:"https://github.com/kosmicteal/EasySynthDrop",link:"https://github.com/kosmicteal/EasySynthDrop/releases/latest"},{id:"af0b215f-49b0-4c0b-a85a-4bdbf255c023",code:"KVMA",isNewProject:!1,isWebApp:!1,initialRelease:"01/12/2022",frameworkReference:[6,11],platformReference:2,source:"https://github.com/kosmicteal/KosmicVMApplets",link:"https://github.com/kosmicteal/KosmicVMApplets/releases/latest"},{id:"2ace6bcd-0cd9-4dc9-9715-e988b4aa3264",code:"PSH",isNewProject:!1,isWebApp:!0,initialRelease:"12/07/2022",frameworkReference:[2,9,10],platformReference:3,source:"private",link:""},{id:"0fecb24c-cb5b-48a3-9674-13678d495130",code:"VOC",isNewProject:!1,isWebApp:!1,initialRelease:"30/11/2021",frameworkReference:[6,7,8],platformReference:4,source:"https://github.com/kosmicteal/VoCatalogue",link:"https://github.com/kosmicteal/VoCatalogue/releases/latest"},{id:"955c0ecc-239f-41f8-b5a2-661a76c0ae61",code:"LBS",isNewProject:!1,isWebApp:!1,initialRelease:"03/08/2021",frameworkReference:[14],platformReference:6,source:"https://github.com/kosmicteal/LameBlenderScripts",link:"https://github.com/kosmicteal/LameBlenderScripts/releases/latest"},{id:"b051fe73-ed1c-4ec3-8291-3cff51a69de7",code:"VSP",isNewProject:!1,isWebApp:!1,initialRelease:"03/04/2021",frameworkReference:[12,13],platformReference:5,source:"",link:"https://github.com/kosmicteal/VocalSynthPlugins"},{id:"0a0226f7-f66e-4d86-b727-46ea16ec7b67",code:"CS",isNewProject:!1,isWebApp:!1,initialRelease:"21/02/2021",frameworkReference:[6,11],platformReference:1,source:"https://github.com/kosmicteal/ColorSynth",link:"https://github.com/kosmicteal/ColorSynth/releases/latest"}],j={meta:we,framework:ye,platform:_e,projects:ke};function je(){const s=[],o=[],i=[];return j.projects.forEach(c=>{c.isWIP?s.push(c):c.isNewProject?o.push(c):i.push(c)}),{wipList:s,newList:o,restList:i}}const Pe={projects:{wipList:[],newList:[],restList:[]}},S=te({name:"reduxSlice",initialState:Pe,reducers:{setPortfolio:s=>{const{wipList:o,newList:i,restList:d}=je();s.projects.newList=i,s.projects.wipList=o,s.projects.restList=d}},selectors:{selectProjects:s=>s.projects}});function Re(s){return D(o=>s(o))}function Ce(){const{setPortfolio:s}=S.actions,{dispatch:o}=A;return p.useEffect(()=>{o(s());const i=localStorage.getItem("boreal-dragon-theme");i?document.documentElement.setAttribute("boreal-dragon-theme",i):window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?(document.documentElement.setAttribute("boreal-dragon-theme","default-dark"),localStorage.setItem("boreal-dragon-theme","default-dark")):(document.documentElement.setAttribute("boreal-dragon-theme","default-light"),localStorage.setItem("boreal-dragon-theme","default-light"));const d=document.getElementById("primitive-loader");d&&d.remove()},[o,s]),e.jsxs(ue,{children:[e.jsx("div",{className:a(t.BreakpointTest)}),e.jsx(ve,{}),e.jsx(pe,{})]})}const Se="modulepreload",Ne=function(s){return"/"+s},I={},ct=function(o,i,d){let c=Promise.resolve();if(i&&i.length>0){document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),u=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));c=Promise.allSettled(i.map(b=>{if(b=Ne(b),b in I)return;I[b]=!0;const f=b.endsWith(".css"),w=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${b}"]${w}`))return;const v=document.createElement("link");if(v.rel=f?"stylesheet":Se,f||(v.as="script"),v.crossOrigin="",v.href=b,u&&v.setAttribute("nonce",u),document.head.appendChild(v),f)return new Promise(($,M)=>{v.addEventListener("load",$),v.addEventListener("error",()=>M(new Error(`Unable to preload CSS for ${b}`)))})}))}function h(l){const u=new Event("vite:preloadError",{cancelable:!0});if(u.payload=l,window.dispatchEvent(u),!u.defaultPrevented)throw l}return c.then(l=>{for(const u of l||[])u.status==="rejected"&&h(u.reason);return o().catch(h)})},Ie=[{langCode:"en",nativeName:"English"},{langCode:"es",nativeName:"Español"},{langCode:"ca",nativeName:"Català"}];re.use(oe).use(ne).use(W).init({backend:{loadPath:"/locales/{{lng}}/{{ns}}.json"},debug:!1,fallbackLng:"en",supportedLngs:Ie.map(s=>s.langCode)});const x=p.memo(function({fallback:o,src:i,...d}){const[c,h]=p.useState(i),l=()=>h(o),u=o||"/img/empty.gif";return e.jsx("img",{src:c||u,onError:l,style:c?void 0:{opacity:0},...d})}),ze=p.forwardRef((s,o)=>{const{t:i,ready:d}=g();return d&&e.jsx("div",{ref:o,className:a(t.AboutMePage),"data-testId":"bd-ts-am-page",children:e.jsxs("div",{className:a(t.AM_Container),"data-testId":"bd-ts-am-container",children:[e.jsxs(m.div,{className:a(t.AM_Banner),initial:{x:50,opacity:0},animate:{x:0,opacity:1,transition:{type:"spring",duration:1,delay:.2}},exit:{x:-100,opacity:0},children:[e.jsx(x,{className:a(t.ProfilePic),src:"https://github.com/kosmicteal.png"}),e.jsxs("div",{children:[e.jsxs("div",{className:a(t.AM_Title),"data-testId":"bd-ts-am-title",children:["Kosmic",e.jsx("span",{className:a(t.AM_Bold),children:"Teal"})]}),e.jsx("div",{className:a(t.AM_Subtitle),"data-testId":"bd-ts-am-subtitle",children:i("uiTranslations.AM_subtitle")})]})]}),e.jsx(m.div,{className:a(t.AM_DescriptionContainer),initial:{x:50,opacity:0},animate:{x:0,opacity:1,transition:{type:"spring",duration:1,delay:.4}},exit:{x:-100,opacity:0},children:e.jsx("div",{className:a(t.AM_Description),"data-testId":"bd-ts-am-description",children:i("uiTranslations.AM_description")})})]})})}),Te=m.create(ze);function Be(){return e.jsx(Te,{initial:{y:10,opacity:0},animate:{y:0,opacity:1},exit:{y:-10,opacity:0},transition:{duration:.2}})}const Ae=p.forwardRef((s,o)=>{const{name:i,link:d,simpleIconsLink:c}=s,{ready:h}=g();let l;return d.includes("@")?l={email:d}:l={href:d},h&&e.jsx("div",{className:a(t.CO_ObfuscatorFixOnMobile),"data-testId":"bd-ts-contact-card",children:e.jsx(E,{obfuscateChildren:!1,...l,children:e.jsxs("div",{ref:o,className:a(t.PR_CardParent),children:[e.jsxs("div",{id:"mainCardContainer",className:a(t.PR_Card),children:[e.jsx("div",{className:a(t.PR_Card_BackgroundGradient)}),e.jsxs("section",{className:a(t.PR_Card_TextContainer),children:[e.jsx(x,{src:`https://cdn.simpleicons.org/${c}/075284`,className:a(t.PR_Card_Image_Logo,t.CO_Icons)}),e.jsx("div",{className:a(t.PR_Card_Title),children:i})]})]}),e.jsx("div",{id:"bottomRightDecoration",className:a(t.PR_Card_BottomRightDecoration)})]})})})}),$e=m.create(Ae),k=p.memo(function({name:o,link:i,simpleIconsLink:d,idx:c}){return e.jsx($e,{initial:{y:10,opacity:0},animate:{y:0,opacity:1},whileHover:{scale:1.025,transition:{duration:.2}},whileTap:{scale:.9},transition:{type:"spring",duration:.5,delay:c*.05},name:o,link:i,simpleIconsLink:d})}),Me=p.forwardRef((s,o)=>{const{t:i,ready:d}=g();return d&&e.jsx("div",{ref:o,className:a(t.ProjectsPage),"data-testId":"bd-ts-co-page",children:e.jsxs("div",{className:a(t.PR_Container),children:[e.jsx("div",{className:a(t.PR_Title),"data-testId":"bd-ts-co-title",children:"Contact & Social Networks"}),e.jsx("div",{className:a(t.PR_DynamicGrid),children:e.jsx(k,{name:i("uiTranslations.CO_email"),link:"mailto:kosmicteal@gmail.com",simpleIconsLink:"gmail"})}),e.jsxs("div",{className:a(t.PR_DynamicGrid),children:[e.jsx(k,{name:"Github",link:"https://github.com/kosmicteal",simpleIconsLink:"github"}),e.jsx(k,{name:"Bluesky",link:"https://bsky.app/profile/kosmicteal.bsky.social",simpleIconsLink:"bluesky"}),e.jsx(k,{name:"YouTube",link:"https://www.youtube.com/channel/UCKpPrhNlC3iX6ri2WNmPIsQ",simpleIconsLink:"youtube"})]})]})})}),Ge=m.create(Me);function Le(){return e.jsx(Ge,{initial:{y:10,opacity:0},animate:{y:0,opacity:1},exit:{y:-10,opacity:0},transition:{duration:.2}})}const De=p.forwardRef((s,o)=>{const{t:i,ready:d}=g();return d&&e.jsxs("div",{ref:o,className:a(t.MascotPage),children:[e.jsx(m.div,{className:a(t.MA_Render),initial:{x:-50,opacity:0,zIndex:-1},animate:{x:0,opacity:1,zIndex:-1,transition:{type:"spring",duration:2,delay:.2}},children:e.jsx(x,{src:"./img/mascot/waivern_render.png"})}),e.jsx("div",{className:a(t.MA_Container),children:e.jsxs(m.div,{className:a(t.MA_DescriptionContainer),initial:{x:50,opacity:0},animate:{x:0,opacity:1,transition:{type:"spring",duration:1,delay:.4}},children:[e.jsxs("div",{className:a(t.MA_Title),children:["w",e.jsx("span",{className:a(t.MA_Bold),children:"AI"}),"vern"]}),e.jsx("div",{className:a(t.MA_Description),"data-testId":"bd-ts-ma-description",children:i("uiTranslations.MA_description")}),e.jsxs("div",{className:a(t.PR_PG_Flex_Row,t.PR_PG_Flex_Row_Center),children:[e.jsxs("div",{className:a(t.MA_Gallery_Item),children:[e.jsx(x,{className:a(t.MA_Gallery_Image,t.MA_Gallery_Image_Sketch),src:"./img/mascot/waivern_sketches.png"}),i("uiTranslations.MA_gallery_1")]}),e.jsxs("div",{className:a(t.MA_Gallery_Item),children:[e.jsx(x,{className:a(t.MA_Gallery_Image),src:"./img/mascot/waivern_concept.png"}),i("uiTranslations.MA_gallery_2")]}),e.jsxs("div",{className:a(t.MA_Gallery_Item),children:[e.jsx(x,{className:a(t.MA_Gallery_Image),src:"./img/mascot/waivern_render.png"}),i("uiTranslations.MA_gallery_3")]})]})]})})]})}),We=m.create(De);function Ee(){return e.jsx(We,{initial:{y:10,opacity:0},animate:{y:0,opacity:1},exit:{y:-10,opacity:0},transition:{duration:.2}})}const Oe=s=>{const{condition:o,...i}=s;return o?e.jsx(B,{...i,children:s.children}):e.jsx("div",{children:s.children})},Qe=p.forwardRef((s,o)=>{const{code:i,cardType:d}=s,{t:c,ready:h}=g();return h&&e.jsx(Oe,{to:`/_prj/${i}`,condition:d!=="wip","data-testId":`bd-ts-projectCard-${i}`,children:e.jsxs("div",{ref:o,className:a(de(d)),children:[d==="new"&&e.jsx("div",{id:"topLeftDecoration",className:a(t.PR_Card_TopLeftDecoration)}),e.jsxs("div",{id:"mainCardContainer",className:a(t.PR_Card),children:[e.jsx(x,{src:`/img/apps/${i}.png`,className:a(t.PR_Card_Background)}),e.jsx("div",{className:a(t.PR_Card_BackgroundGradient)}),e.jsxs("div",{className:a(t.PR_Card_TextContainer),children:[e.jsx(x,{src:`/img/logos/${i}.png`,className:a(t.PR_Card_Image_Logo)}),e.jsx("div",{className:a(t.PR_Card_Title),children:c(`projects.${i}.cardTitle`)}),e.jsx("div",{className:a(t.PR_Card_Text),children:c(`projects.${i}.cardText`)})]})]}),e.jsx("div",{id:"bottomRightDecoration",className:a(t.PR_Card_BottomRightDecoration)})]})})}),qe=m.create(Qe),R=p.memo(function({code:o,cardType:i,idx:d}){return e.jsx(qe,{initial:{y:10,opacity:0},animate:{y:0,opacity:1},whileHover:i!=="wip"?{scale:1.025,transition:{duration:.2}}:void 0,whileTap:i!=="wip"?{scale:.9}:void 0,transition:{type:"spring",duration:.5,delay:d*.05},code:o,cardType:i})}),Fe=p.memo(function(){return e.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"100vw",height:"100dvh",zIndex:9999,backdropFilter:"blur(3px)",display:"flex",alignItems:"center",justifyContent:"center"},"data-testId":"bd-ts-spinner",children:e.jsx("div",{children:e.jsx("div",{className:"loader"})})})}),Ve=p.memo(function(){const{selectProjects:o}=S.selectors,i=Re(o),{t:d,ready:c}=g();return c&&e.jsxs(p.Suspense,{fallback:e.jsx(Fe,{}),children:[e.jsx("div",{className:a(t.PR_Title),children:d("uiTranslations.PR_upcoming")}),e.jsx("div",{className:a(t.PR_DynamicGrid),children:i.wipList.map((h,l)=>e.jsx(R,{code:h.code,cardType:"wip",idx:l},h.id))}),e.jsx("div",{className:a(t.PR_Title),children:d("uiTranslations.PR_personal")}),e.jsxs("div",{className:a(t.PR_DynamicGrid),children:[i.newList.map((h,l)=>e.jsx(R,{code:h.code,cardType:"new",idx:l},h.id)),i.restList.map((h,l)=>e.jsx(R,{code:h.code,idx:l},h.id))]})]})}),Ue=p.forwardRef((s,o)=>e.jsx("div",{ref:o,className:a(t.ProjectsPage),"data-testId":"bd-ts-pr-page",children:e.jsx("div",{className:a(t.PR_Container),children:e.jsx(Ve,{})})})),He=m.create(Ue);function Ke(){return e.jsx(He,{initial:{y:10,opacity:0},animate:{y:0,opacity:1},exit:{y:-10,opacity:0},transition:{duration:.2}})}const z=p.memo(function({children:o,style:i}){const{t:d,ready:c}=g();return c&&e.jsxs("div",{className:a(t.PR_Badge_Group),"data-testId":"bd-id-badge",children:[i==="platform"&&e.jsx("div",{className:a(t.PR_Badge_Grey),children:d("uiTranslations.PR_detail_intended")})," ",e.jsx("div",{className:a(t.PR_Badge),children:o})]})}),Je=p.forwardRef((s,o)=>{const{prjId:i}=O(),{t:d,ready:c}=g(),h=d(`projects.${i}.modalLabel`)!==`projects.${i}.modalLabel`,l=h?j.projects.find(u=>i===u.code):null;return c&&h?e.jsx("div",{ref:o,className:a(t.ProjectsPage),"data-testId":"bd-ts-prds-page",children:e.jsxs("div",{className:a(t.PR_Container),"data-testId":"bd-ts-prds-container",children:[e.jsx(x,{src:`/img/logos/${i}-S.png`,className:a(t.PR_PG_Image_Logo_Bg)}),e.jsxs("div",{className:a(t.PR_Title),"data-testId":"bd-ts-prds-title",children:[e.jsx(x,{src:`/img/logos/${i}.png`,className:a(t.PR_PG_Image_Logo)}),d(`projects.${i}.modalLabel`)]}),e.jsxs("div",{className:a(t.PR_PG_Flex_Row),"data-testId":"bd-ts-prds-badges",children:[l==null?void 0:l.frameworkReference.map(u=>e.jsx(z,{children:j.framework[u]})),(l==null?void 0:l.platformReference)!==void 0&&e.jsx(z,{style:"platform",children:j.platform[0]})]}),e.jsxs("div",{className:a(t.PR_PG_Columns),children:[e.jsxs("div",{className:a(t.PR_PG_Text_Container),children:[e.jsx("div",{className:a(t.PR_PG_Description),"data-testId":"bd-ts-prds-description",children:d(`projects.${i}.modalDescription`)}),e.jsx("div",{className:a(t.PR_PG_Credits),"data-testId":"bd-ts-prds-credits",children:d(`projects.${i}.credits`)})]}),e.jsxs("div",{className:a(t.PR_PG_Image_Container),children:[e.jsx(x,{src:`/img/apps/${i}.png`,className:a(t.PR_PG_Image)}),e.jsxs("div",{className:a(t.PR_PG_Details_Row),"data-testId":"bd-ts-prds-details",children:[e.jsxs("div",{children:[d("uiTranslations.PR_detail_initialRelease"),l==null?void 0:l.initialRelease]}),e.jsxs("div",{className:a(t.PR_PG_Flex_Row),"data-testId":"bd-ts-prds-buttons",children:[l.source!==""&&l.source!=="private"&&e.jsx("a",{className:a(t.PR_Button),href:l.source,children:l.source.includes("youtube")?d("uiTranslations.PR_detail_demo"):d("uiTranslations.PR_detail_source")}),l.link!==""&&e.jsx("a",{className:a(t.PR_Button),href:l.link,children:l.isWebApp?d("uiTranslations.PR_detail_visit"):d("uiTranslations.PR_detail_download")})]})]})]})]})]})}):e.jsx("div",{ref:o,className:a(t.ProjectsPage),"data-testId":"bd-ts-404",children:e.jsxs("div",{className:a(t.PR_Container),children:[e.jsx("div",{className:a(t.PR_Title),children:"Woops, 404!"}),e.jsx("div",{className:a(t.PR_PG_Columns),children:e.jsx("div",{className:a(t.PR_PG_Description),children:d("uiTranslations.UI_404_Text")})})]})})}),Xe=m.create(Je);function T(){return e.jsx(Xe,{initial:{y:10,opacity:0},animate:{y:0,opacity:1},exit:{y:-10,opacity:0},transition:{duration:.2}})}const A=ae({reducer:{reduxSlice:S.reducer}}),Ye=Q([{path:"/",element:e.jsx(Ce,{}),children:[{path:"",element:e.jsx(Be,{},"aboutMe")},{path:"/_prj",element:e.jsx(Ke,{},"projects")},{path:"/_prj/:prjId",element:e.jsx(T,{},"projectDescription")},{path:"/_msc",element:e.jsx(Ee,{},"mascot")},{path:"/_con",element:e.jsx(Le,{},"contact")},{path:"/*",element:e.jsx(T,{},"projectDescription")}]}]);q.createRoot(document.getElementById("root")).render(e.jsx(p.StrictMode,{children:e.jsx(F,{store:A,children:e.jsx(V,{router:Ye})})}));export{ct as _,dt as c,st as g};
