import recipeView from './view/recipeView.js';
import * as model from './model.js';
import icons from 'url:../img/icons.svg'; // parcel v2.0
const recipeContainer = document.querySelector('.recipe');
// support old browers
import 'core-js/stable';
import 'regenerator-runtime/runtime';

/* const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! ! Timeout after ${s} second`));
    }, s * 1000);
  });
};
 */
// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
/**
 *  // https://forkify-api.herokuapp.com/api/v2/recipes/:id
 * feth Recipe
 */
const showRecipe = async function () {
  try {
    recipeView.renderSpinner(recipeContainer);
    const id = window.location.hash.slice(1);
    if (!id) return;
    await model.loadRecipe(id);

    // 2) rendering recipe
    recipeView.render(model.state.recipe);
  } catch (e) {
    console.log(e);
  }
};

['hashchange', 'load'].forEach(ev => window.addEventListener(ev, showRecipe));
