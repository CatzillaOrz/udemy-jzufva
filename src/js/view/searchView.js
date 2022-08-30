class SearchView {
  _parentEl = document.querySelector('.search');

  addHandlerSearch(handler) {
    this._parentEl.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }
  _clearInput() {
    this._parentEl.querySelector('.search__field').value = '';
  }

  getQuery() {
    const query = this._parentEl.querySelector('.search__field').value;
    this._clearInput();
    return query;
  }
}

export default new SearchView();
