// Opisany w dokumentacji
import SimpleLightbox from "simplelightbox";
// Dodatkowy import stylów
import "simplelightbox/dist/simple-lightbox.min.css";

import { galleryItems } from './gallery-items.js';


const galleryContainer = document.querySelector(".gallery");
//mapuje images i tworzę ciąg znaków z kodem html. Dla src i alt pobieram dane z tabllicy images. join łaczy tablice w ciąg znaków
const markup = galleryItems.map(image =>
	`<a class="gallery__item" href='${image.original}'>
        <img class="gallery__image"
            src='${image.preview}'
            alt='${image.description}' />
    </a>`)
	.join('');
//tworzy elementy html wylistowane w markup
galleryContainer.insertAdjacentHTML("beforeend", markup);


let lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    animationSpeed: 750,
    enableKeyboard: true,
    loop: true,
});
    lightbox.on()