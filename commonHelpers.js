import{i as g,S as p}from"./assets/vendor-7659544d.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}})();const n=document.querySelector(".gallery"),h=s=>{if(n.innerHTML="",s.length===0)g.error({backgroundColor:"#FFBEBE",messageColor:"#fff",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});else{const r=s.map(a=>{const{webformatURL:t,largeImageURL:e,tags:o,likes:i,views:u,comments:d,downloads:m}=a;return`<li class="gallery-item">
                        <a class="gallery-link" href="${e}">
                            <img
                            class="gallery-image"
                            src="${t}"
                            alt="${o}"
                            />
                        </a>
                        <ul class="properties">
                                <li>
                                    <h5>Likes</h5>
                                    <p>${i}</p>
                                </li>
                                <li>
                                    <h5>Views</h5>
                                    <p>${u}</p>
                                </li>
                                <li>
                                    <h5>Comments</h5>
                                    <p>${d}</p>
                                </li>
                                <li>
                                    <h5>Downloads</h5>
                                    <p>${m}</p>
                                </li>
                            </ul>
                    </li>`}).join("");n.insertAdjacentHTML("beforeend",r),new p(".gallery a",{captionDelay:250,captionsData:"alt"})}},f=s=>{const r={key:"42388767-1d9ccb99c091176bae08c2c78",q:`${s}`,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:198};let a="?";for(let t in r)a+=`${t}=${r[t]}&`;fetch(`https://pixabay.com/api/${a}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).then(t=>{h(t.hits)}).catch(t=>console.log(t))},y=document.querySelector(".gallery"),b=document.querySelector("#photo-search"),l=document.querySelector(".search-btn"),L=document.querySelector(".search-form"),c="search-text";l.setAttribute("disabled",!0);b.addEventListener("input",s=>{s.stopPropagation();let r=s.target.value;localStorage.setItem(c,JSON.stringify(r)),r!==""?l.removeAttribute("disabled"):l.setAttribute("disabled",!0)});l.addEventListener("click",s=>{s.stopPropagation(),y.innerHTML='<div class="loader"></div>';const r=localStorage.getItem(c);localStorage.removeItem(c),L.reset(),l.setAttribute("disabled",!0),f(r)});
//# sourceMappingURL=commonHelpers.js.map
