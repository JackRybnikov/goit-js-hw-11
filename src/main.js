import { sendRequest } from "./js/pixabay-api.js"

const galleryList = document.querySelector(".gallery");
const searchText = document.querySelector("#photo-search");
const searchBtn = document.querySelector(".search-btn");
const searchForm = document.querySelector(".search-form");

// getting search value
const localStorageKey = "search-text";

searchBtn.setAttribute('disabled', true);

searchText.addEventListener("input", e =>{
    e.stopPropagation();

    let text = e.target.value;

    localStorage.setItem(localStorageKey,JSON.stringify(text));
    
    if(text !== ''){
        searchBtn.removeAttribute('disabled');
    } else {
        searchBtn.setAttribute('disabled', true);
    }
});

searchBtn.addEventListener("click", e =>{
    e.stopPropagation();

    galleryList.innerHTML = `<div class="loader"></div>`;

    const search = localStorage.getItem(localStorageKey);
    localStorage.removeItem(localStorageKey);
    searchForm.reset();
    searchBtn.setAttribute('disabled', true);

    sendRequest(search);
});


/*const markup = images.map(image => {
    const {preview: small, original: big, description: alt} = image;
    return `<li class="gallery-item">
  <a class="gallery-link" href="${big}">
    <img
      class="gallery-image"
      src="${small}"
      alt="${alt}"
    />
  </a>
</li>`;
})
.join("");



const gallery = new SimpleLightbox('.gallery a', { captionDelay: 250, captionsData: "alt",});*/
