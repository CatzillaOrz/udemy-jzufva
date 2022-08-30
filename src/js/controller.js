import recipeView from './view/recipeView.js';
import * as model from './model.js';
import icons from 'url:../img/icons.svg'; // parcel v2.0
const recipeContainer = document.querySelector('.recipe');
// support old browers
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { async } from 'regenerator-runtime';

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
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

    // 2) rendering recipe
    recipeView.render(model.state.recipe);
  } catch (e) {
    recipeView.renderError();
  }
};
const controlSearchResults = async function () {
  try {
    await model.loadSearchResults('pizza');
  } catch (err) {
    console.log(err);
  }
};
const init = function () {
  recipeView.addHandlerRender(controlRecipes);
};
init();
