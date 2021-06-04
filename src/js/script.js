import getRefs from './get-refs';
import markup from './markup';
import notify from './error';
import ApiService from './apiService';
import { LoadMoreBtn } from './components/load-more-btn';
import { onGalleryContainerClick } from './components/basic-lightbox';
import debounce from 'lodash.debounce';

const refs = getRefs();

const loadMoreBtn = new LoadMoreBtn({
  selector: '[data-action="load-more"]',
  hidden: true,
});
const apiService = new ApiService();
const bottomElement = document.querySelector('.bottom-element');

refs.searchForm.addEventListener('submit', onSearch);
loadMoreBtn.refs.button.addEventListener('click', fetchImages);
refs.galleryContainer.addEventListener('click', onGalleryContainerClick);

console.log(refs.galleryContainer);
toTheBottom();
loadMoreBtn.hide();

function onSearch(elem) {
  elem.preventDefault();
  apiService.query = elem.currentTarget.elements.query.value;

  if (apiService.query === '') {
    return notify.errorMessage(`Введите поисковый запрос!`);
  }

  loadMoreBtn.show();
  apiService.resetPage();
  markup.clearMarkup();
  fetchImages();
}

function fetchImages() {
  loadMoreBtn.disable();
  const imageRes = apiService.fetchImages().then(data => {
    markup.imageMarkup(data);

    if (!data.length) {
      notify.errorMessage(`Ничего не нашли(`);
      loadMoreBtn.hide();
      return;
    } else if (data.length === 12) {
      loadMoreBtn.enable();
    } else {
      notify.noticeMessage(`Это все по поисковому запросу "${apiService.query}"`);
      loadMoreBtn.hide();
    }
    toTheBottom();
  });
}

function toTheBottom() {
  console.log(bottomElement);
  bottomElement.scrollIntoView({
    behavior: 'smooth',
    block: 'center',
  });
}
