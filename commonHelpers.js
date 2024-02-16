import{i as h,S as y}from"./assets/vendor-7659544d.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();const u=document.querySelector(".gallery"),b=e=>{if(u.innerHTML="",e.length===0)h.error({backgroundColor:"#FFBEBE",messageColor:"#fff",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});else{const a=e.map(r=>{const{webformatURL:t,largeImageURL:o,tags:l,likes:g,views:p,comments:f,downloads:m}=r;return`<li class="gallery-item">
                        <a class="gallery-link" href="${o}">
                            <img
                            class="gallery-image"
                            src="${t}"
                            alt="${l}"
                            />
                        </a>
                        <ul class="properties">
                                <li>
                                    <h5>Likes</h5>
                                    <p>${g}</p>
                                </li>
                                <li>
                                    <h5>Views</h5>
                                    <p>${p}</p>
                                </li>
                                <li>
                                    <h5>Comments</h5>
                                    <p>${f}</p>
                                </li>
                                <li>
                                    <h5>Downloads</h5>
                                    <p>${m}</p>
                                </li>
                            </ul>
                    </li>`}).join("");u.insertAdjacentHTML("beforeend",a),new y(".gallery a",{captionDelay:250,captionsData:"alt"}).refresh()}},v=e=>{const a={key:"42388767-1d9ccb99c091176bae08c2c78",q:`${e}`,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:198};let s="?";for(let r in a)s+=`${r}=${a[r]}&`;fetch(`https://pixabay.com/api/${s}`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()}).then(r=>{b(r.hits)}).catch(r=>console.log(r))},L=document.querySelector(".gallery"),c=document.querySelector("#photo-search"),i=document.querySelector(".search-btn"),S=document.querySelector(".search-form"),n="search-text";c.value=JSON.parse(localStorage.getItem(n));c.value===""&&i.setAttribute("disabled",!0);const d=()=>{L.innerHTML='<div class="loader"></div>';const e=localStorage.getItem(n);localStorage.removeItem(n),S.reset(),i.setAttribute("disabled",!0),v(e)},w=e=>{let a=e.target.value;localStorage.setItem(n,JSON.stringify(a)),a!==""?i.removeAttribute("disabled"):i.setAttribute("disabled",!0)};window.addEventListener("keydown",e=>{e.key=="Enter"&&e.target.nodeName=="INPUT"&&e.target.type=="text"&&(e.preventDefault(),c.value!==""&&d())},!0);c.addEventListener("input",e=>{e.stopPropagation(),e.preventDefault(),w(e)});i.addEventListener("click",e=>{e.stopPropagation(),e.preventDefault(),d()});
//# sourceMappingURL=commonHelpers.js.map
