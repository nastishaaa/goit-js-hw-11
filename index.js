import{S as p,i as f}from"./assets/vendor-5ObWk2rO.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();document.querySelector(".list");function m(e){return e.map(y).join("")}function y(e){return`
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
        </li>`}const i=document.querySelector(".loader"),c=document.querySelector(".list");i.style.display="none";const g="48428320-38598d28b4d5228a2fffcb2e3",h="https://pixabay.com/api/";function L(e){i.style.display="";const n=`${h}?key=${g}&q=${encodeURIComponent(e)}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(n).then(o=>{if(i.style.display="none",o.ok)return o.json();throw new Error("No matching images")}).then(o=>{if(i.style.display="none",!o.hits||o.hits.length===0)c.innerHTML="";else{const l=m(o.hits);c.innerHTML=l,new p(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250,animationSlide:!0}).refresh()}}).catch(o=>{console.error("Fetch error:",o),i.style.display="none"})}const u=document.querySelector("#text"),d=document.querySelector(".list"),v=document.querySelector(".search"),$=document.querySelector(".loader");$.style.display="none";let s="";u.addEventListener("input",e=>{s=e.target.value,s.trim()===""&&(u.value="")});v.addEventListener("click",e=>{e.preventDefault();const n=/^[a-zA-Zа-яА-ЯіІєЄїЇґҐ\s]+$/;if(s.length===0||s.trim()===""||!n.test(s))return d.innerHTML="",f.error({message:"Sorry, there are no images matching your search query. Please try again!",timeout:5e3,position:"topRight"});d.innerHTML="",L(s)});
//# sourceMappingURL=index.js.map
