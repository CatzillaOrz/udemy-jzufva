import recipeView from './view/recipeView.js';
import * as model from './model.js';
import searchView from './search/searchView.js';
import resultsView from './view/resultsView.js';
const recipeContainer = document.querySelector('.recipe');

// support old browers
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { async } from 'regenerator-runtime';

// https://forkify-api.herokuapp.com/v2

/**
 *  // https://forkify-api.herokuapp.com/api/v2/recipes/:id
 * feth Recipe
 */
const controlRecipes = async function () {
  try {
    recipeView.renderSpinner(recipeContainer);
    const id = window.location.hash.slice(1);
    if (!id) return;
    await model.loadRecipe(id);
    recipeView.render(model.state.recipe);
  } catch (e) {
    recipeView.renderError();
  }
};
const controlSearchResults = async function () {
  try {
    const query = searchView.getQuery();
    if (!query) return;
    await model.loadSearchResults(query);
  } catch (err) {
    console.log(err);
  }
};
const init = function () {
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
};

init();

controlSearchResults();
