import Notiflix from 'notiflix';
import axios from 'axios';
import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";

const lightbox = new SimpleLightbox('.gallery a', {animationSpeed: 400, captionsData: 'alt',captionDelay: 250});

const ref = {
    searchForm: document.querySelector(".search-form"),
    searchInput: document.querySelector(".search-form__input"),
    searchButton: document.querySelector(".search-form__btn"),
    galleryRef: document.querySelector(".gallery"),
    btnLoad: document.querySelector('.load-more')
}

let page = 1;
let inputValue = "";
const BASE_URL = "https://pixabay.com/api/";
const MY_KEY = "key=31470169-9c9cb372459e41628308e9796"
const IMG_TYPE = "image_type=photo&oriental=horizontal&safeswarch=true"
const QUANTITY_PER_PAGE = `per_page=${40}`

ref.searchForm.addEventListener("submit", makeSubmit)
ref.btnLoad.addEventListener('click', loadMore)

function makeSubmit(e) {
    preventDefaultOn(e);
    clearOldMarkup();

    page = 1;

    inputValue = writeInputValue(e);
    if (inputValue === "") {
        Notiflix.Notify.failure('Pls typing anything...')
    }

    makeResult(page);
}

function loadMore(e) {
    preventDefaultOn(e);
    page += 1;

    makeResult(page)
}

function preventDefaultOn(event) {
    event.preventDefault();
}

function clearOldMarkup() {
    ref.galleryRef.innerHTML = "";
}

function writeInputValue(event) {
    return event.srcElement[0].value;
}

async function makeResult(page) {
    const data = await fetchAxios(page);
    const markup = await makeMarkup(data);
    lightbox.refresh();
}

function makeMarkup(data) {
    const allTotalHits = data.totalHits;
    // console.log(data.hits[0])
    if (ref.searchInput.value) {
        if (page === 1) {
            if (allTotalHits === 0) {
                Notiflix.Notify.failure('Sorry, there are no images matching your search query. Please try again.')
                btnLoadOff()
            } else {
                Notiflix.Notify.success(`Yuhu, we found ${allTotalHits} images`);
                btnLoadOn()
            }
        } else {
            const calculateQuantityImg = allTotalHits - 40 * (page-1);
            if (calculateQuantityImg < 40) {
                Notiflix.Notify.failure('Were sorry, but youve reached the end of search results.')
                btnLoadOff()
            } else {
                Notiflix.Notify.success(`Yuhu, we found ${calculateQuantityImg} images`);
                btnLoadOn()
            }
            // console.log(calculateQuantityImg)
        }

        const markup = data.hits.map(({largeImageURL, webformatURL, tags, likes, views, comments, downloads})=>{
            // console.log(largeImageURL)
            return `
            <div class="photo-card">
            <div class="thumb">
                <a class = gallery__item href = "${largeImageURL}">
                    <img class="card-img" src="${webformatURL}" alt="${tags}" loading="lazy"/>
                </a>
            </div>
                <div class="info">
                    <p class="info-item">
                        <b class="info-item-span">Likes:</b>
                        ${likes}
                    </p>
                    <p class="info-item">
                        <b class="info-item-span">Views:</b>
                        ${views}
                    </p>
                    <p class="info-item">
                        <b class="info-item-span">Comments:</b>
                        ${comments}
                    </p>
                    <p class="info-item">
                        <b class="info-item-span">Downloads:</b>
                        ${downloads}
                    </p>
                </div>
            </div>`
        })

        return ref.galleryRef.insertAdjacentHTML('beforeend', markup.join(''));
    }
    return
}

function btnLoadOff() {
    ref.btnLoad.classList.add('visually-hidden');
}

function btnLoadOn() {
    ref.btnLoad.classList.remove('visually-hidden')
}

async function fetchAxios(page) {
    let urlObject = await axios.get(`${BASE_URL}?${MY_KEY}&q=${inputValue}&${IMG_TYPE}&${QUANTITY_PER_PAGE}&page=${page}`);
    const data = urlObject.data;
    
    return data;
}


