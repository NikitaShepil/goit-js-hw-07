import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const listEl = document.querySelector('.gallery');
function createHtml (items) {
    return items.map((item) => {
       return `<li class="gallery__item">
       <a class="gallery__link" href="${item.original}">
          <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
       </a>
    </li>`
    }).join('');
}
listEl.insertAdjacentHTML('beforeend',createHtml(galleryItems) );

const gallery = new SimpleLightbox('.gallery__item a',{
    captions: true,
    captionDelay: 250,
    captionsData: 'alt',
    captionsPosition: 'bottom',
  }) 
