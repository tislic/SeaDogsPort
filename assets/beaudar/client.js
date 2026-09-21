(function(n){typeof define=="function"&&define.amd?define(n):n()})(function(){"use strict";const n="preferred-color-scheme",m=window.matchMedia("(prefers-color-scheme: dark)").matches?"github-dark":"github-light",t=new URL(location.href),o=t.searchParams.get("beaudar");o&&(localStorage.setItem("beaudar-session",o),t.searchParams.delete("beaudar"),history.replaceState(void 0,document.title,t.href));let r=document.currentScript;r||(r=document.querySelector('script[src^="https://beaudar.lipk.org/client.js"],script[src^="http://localhost:3000/client.ts"]'));const e={};for(let a=0;a<r.attributes.length;a++){const i=r.attributes.item(a);e[i.name.replace(/^data-/,"")]=i.value}e.theme===n&&(e.theme=m);const s=document.querySelector("link[rel='canonical']");e.url=s?s.href:t.origin+t.pathname+t.search,e.origin=t.origin,e.pathname=t.pathname.length<2?"index":t.pathname.substring(1).replace(/\.\w+$/,""),e.title=document.title;const c=document.querySelector("meta[name='description']");e.description=c?c.content:"";const l=document.querySelector("meta[property='og:title'],meta[name='og:title']");e["og:title"]=l?l.content:"",e.session=o||localStorage.getItem("beaudar-session")||"",document.head.insertAdjacentHTML("afterbegin",`<style>
    .beaudar {
      position: relative;
      box-sizing: border-box;
      width: 100%;
      max-width: 760px;
      margin-left: auto;
      margin-right: auto;
    }
    .beaudar-frame {
      color-scheme: light;
      position: absolute;
      left: 0;
      right: 0;
      width: 1px;
      min-width: 100%;
      max-width: 100%;
      height: 100%;
      border: 0;
    }
  </style>`);const d=new URL(r.src),h=d.origin,u=new URL("beaudar.html",d.href).href;r.insertAdjacentHTML("afterend",`<div class="beaudar">
    <iframe class="beaudar-frame" title="Comments" scrolling="no" src="${u}?${new URLSearchParams(e)}" loading="lazy"></iframe>
  </div>`);const g=r.nextElementSibling;r.parentElement.removeChild(r),addEventListener("message",a=>{if(a.origin!==h)return;const i=a.data;i&&i.type==="resize"&&i.height&&(g.style.height=`${i.height}px`)})});
