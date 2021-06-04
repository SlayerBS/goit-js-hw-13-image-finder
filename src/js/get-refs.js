export default function getRefs() {
  return {
    searchForm: document.querySelector('#search-form'),
    imageContainer: document.querySelector('.gallery'),
    loadMoreBtn: document.querySelector('[data-action="load-more"]'),
    galleryContainer: document.querySelector('.gallery'),
  };
}
