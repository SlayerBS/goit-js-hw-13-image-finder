import imageTemplate from '../templates/imageTemplate.hbs';
import getRefs from './get-refs';
import notify from './error';

const refs = getRefs();

// function renderMarkup(data) {
//   // notify.successMessage(`Yes! You found this country!`);
//   imageMarkup(data);
// }

// function countryListMarkup(data) {
//   const markup = countriesTemplate(data);
//   refs.countryContainer.innerHTML = markup;
// }

function imageMarkup(data) {
  const markup = imageTemplate(data);

  refs.imageContainer.insertAdjacentHTML('beforeend', markup);
}

function clearMarkup() {
  refs.imageContainer.innerHTML = '';
}

export default { imageMarkup, clearMarkup };
