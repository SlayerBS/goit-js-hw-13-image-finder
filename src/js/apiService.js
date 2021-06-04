const KEY = '4423902-dbd0f970c0cc60dbb84d66d4b';
const BASE_URL = 'https://pixabay.com/api/?image_type=photo&orientation=horizontal&q';

export default class ApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  fetchImages() {
    const url = `${BASE_URL}=${this.searchQuery}&page=${this.page}&per_page=12&key=${KEY}`;
    return fetch(url)
      .then(response => {
        if (response.status === 404) return;

        return response.json();
      })
      .then(data => {
        this.incrementPage();
        return data.hits;
      });
  }

  resetPage() {
    this.page = 1;
  }

  incrementPage() {
    this.page += 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
