import{i as c,S as m}from"./assets/vendor-5ObWk2rO.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();document.querySelector(".list");function y(e){return e.map(f).join("")}function f(e){return`
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
        </li>`}const s=document.querySelector(".loader"),u=document.querySelector(".list");s.style.display="none";const g="48428320-38598d28b4d5228a2fffcb2e3",h="https://pixabay.com/api/";function L(e){s.style.display="";const n=`${h}?key=${g}&q=${encodeURIComponent(e)}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(n).then(o=>{if(s.style.display="none",o.ok)return o.json();throw new Error("No matching images")}).then(o=>{if(s.style.display="none",!o.hits||o.hits.length===0)u.innerHTML="",c.error({message:"Sorry, there are no images matching your search query. Please try again!",timeout:5e3,position:"topRight"});else{const a=y(o.hits);u.innerHTML=a,new m(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250,animationSlide:!0}).refresh()}}).catch(o=>{c.error({message:o.message,timeout:5e3,position:"topRight"}),s.style.display="none"})}const d=document.querySelector("#text"),p=document.querySelector(".list"),v=document.querySelector(".search"),S=document.querySelector(".loader");S.style.display="none";let i="";d.addEventListener("input",e=>{i=e.target.value,i.trim()===""&&(d.value="")});v.addEventListener("click",e=>{if(e.preventDefault(),i.length===0||i.trim()==="")return p.innerHTML="",c.error({message:"Sorry, there are no images matching your search query. Please try again!",timeout:5e3,position:"topRight"});p.innerHTML="",L(i)});
//# sourceMappingURL=index.js.map
