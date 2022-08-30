import View from './view';
import icons from 'url:../../img/icons.svg';
class ResultsView extends View {
  _parentElement = document.querySelector('.results');
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
      <a class="preview__link preview__link--active" href="#${result.id}">
        <figure class="preview__fig">
          <img src="${result.image}" alt="Test" />
        </figure>
        <div class="preview__data">
          <h4 class="preview__title">${result.title}</h4>
          <p class="preview__publisher">${result.Tpublisher}</p>
          <div class="preview__user-generated">
            <svg>
              <use href="${icons}#icon-user"></use>
            </svg>
          </div>
        </div>
      </a>
    </li>


    `;
  }
}

export default new ResultsView();
