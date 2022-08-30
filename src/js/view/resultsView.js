import View from './view';
import icons from 'url:../../img/icons.svg';
class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recipes found for you query! Please try again!';
  _message = '';

  __generateMarkup() {
    return `
      <li class="preview">
        <a class="preview__link" href="#23456">
          <figure class="preview__fig">
            <img src="src/img/test-1.jpg" alt="Test" />
          </figure>
          <div class="preview__data">
            <h4 class="preview__name">
              Pasta with Tomato Cream ...
            </h4>
            <p class="preview__publisher">The Pioneer Woman</p>
          </div>
        </a>
      </li>

    `;
  }
  _generateMarkup() {
    return this._data
      .map(result => this._generateMarkupPreview(result))
      .join('');
  }
  _generateMarkupPreview(result) {
    return `
    <li class="preview">
      <a class="preview__link" href="#${result.id}">
        <figure class="preview__fig">
          <img src="${result.image}" alt="${result.title}" />
        </figure>
        <div class="preview__data">
          <h4 class="preview__title">${result.title}</h4>
          <p class="preview__publisher">${result.publisher}</p>
        </div>
      </a>
    </li>


    `;
  }
}

export default new ResultsView();
