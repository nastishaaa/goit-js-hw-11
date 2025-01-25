import{S as d,i as p}from"./assets/vendor-5ObWk2rO.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();document.querySelector(".list");function f(e){return e.map(y).join("")}function y(e){return`
    <li class='elem-list'>
        <div class="gallery">
            <a href="${e.largeImageURL}">
                <img src="${e.webformatURL}" alt="${e.tags}" title="${e.tags}" class='image'/>
            </a>
            <div class="image-info">
                <p><strong>Likes:</strong> ${e.likes}</p>
                <p><strong>Views:</strong> ${e.views}</p>
                <p><strong>Comments:</strong> ${e.comments}</p>
                <p><strong>Downloads:</strong> ${e.downloads}</p>
            </div>
        </div>
        </li>`}const s=document.querySelector(".loader"),c=document.querySelector(".list");s.style.display="none";const m="48428320-38598d28b4d5228a2fffcb2e3",g="https://pixabay.com/api/";function h(e){s.style.display="";const n=`${g}?key=${m}&q=${encodeURIComponent(e)}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(n).then(o=>{if(s.style.display="none",o.ok)return o.json();throw new Error("No matching images")}).then(o=>{if(s.style.display="none",!o.hits||o.hits.length===0)c.innerHTML="";else{const i=f(o.hits);c.innerHTML=i,new d(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250,animationSlide:!0}).refresh()}}).catch(o=>{console.error("Fetch error:",o),s.style.display="none"})}const L=document.querySelector("#text"),u=document.querySelector(".list"),$=document.querySelector(".search"),v=document.querySelector(".loader");v.style.display="none";let l="";L.addEventListener("input",e=>{l=e.target.value});$.addEventListener("click",e=>{e.preventDefault();const n=/^[a-zA-Zа-яА-ЯіІєЄїЇґҐ\s]+$/;if(l.length===0||!n.test(l))return u.innerHTML="",p.error({message:"Sorry, there are no images matching your search query. Please try again!",timeout:5e3,position:"topRight"});u.innerHTML="",h(l)});
//# sourceMappingURL=index.js.map
