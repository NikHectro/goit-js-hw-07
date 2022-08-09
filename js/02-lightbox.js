import { galleryItems } from './gallery-items.js';
// Change code below this line


console.log(galleryItems);
console.log(SimpleLightbox);

const galleryContainer = document.querySelector('.gallery');
const imagesMarkup = createImageMarkups(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', imagesMarkup);

function createImageMarkups(images) {
  return images.map(({ preview, original, description }) => {
    return `
  <a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
`;
  }).join('');
}

const lightbox = new SimpleLightbox('.gallery a', { captionDelay: 250, captionsData: 'alt' });
