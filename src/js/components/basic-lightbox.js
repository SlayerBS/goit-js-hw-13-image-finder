import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

export default function onGalleryContainerClick(evt) {
  evt.preventDefault();

  const isGalleryImageEl = evt.target.classList.contains('photo-card-item'); //проверка источника клика

  if (!isGalleryImageEl) {
    return;
  }
  // const openedImage = evt.target;
  const largeImageUrl = evt.target.getAttribute('data-source');

  console.log(largeImageUrl);

  const instance = basicLightbox.create(`
    <img src="${largeImageUrl}" width="100%">
`);
  instance.show();
}

export { onGalleryContainerClick };
