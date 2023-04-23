import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const listEl = document.querySelector('.gallery');
function createHtml (items) {
    return items.map((item) => {
       return `<li class="gallery__item">
        <a class="gallery__link" href="${item.original}">
          <img
            class="gallery__image"
            src="${item.preview}"
            data-source="${item.original}"
            alt="${item.description}"
          />
        </a>
      </li>`
    }).join('');
}
listEl.insertAdjacentHTML('beforeend',createHtml(galleryItems) );

listEl.addEventListener('click' ,onImgClick )
function onImgClick(evt){
    evt.preventDefault();
    if(evt.target.nodeName !== 'IMG'){
        return;
    }
    const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">
`)

instance.show()

    document.addEventListener('keydown',onEscPress);
    
    document.body.addEventListener('click', onBackdropClick);
    
}



function onEscPress  (evt){
  if(evt.code === 'Escape'){
      instance.close();
      document.removeEventListener("keydown", onEscPress);
  }
}



function onBackdropClick(evt) {
  
  if (evt.target === document.querySelector('#basicLightbox')) {
  
    instance.close();
    
    document.body.removeEventListener('click', onBackdropClick);
  }
}
