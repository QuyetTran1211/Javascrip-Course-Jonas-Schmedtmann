import * as model from './model.js';
import recipeView from './view/recipeView.js';
import searchView from './view/searchView';
import resultsView from './view/resultsView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import recipeView from './view/recipeView.js';

if (module.hot) {
  module.hot.accept();
}

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
// console.log('Test');

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);

    // console.log(id);

    if (!id) return;
    recipeView.renderSpinner();

    // 1-----------Loading recipe----------------------

    await model.loadRecipe(id);

    // 2-----------Rendering recipe----------------------
    recipeView.render(model.state.recipe);
    // const recipeView = new recipeView(model.state.recipe);
  } catch (err) {
    // alert(err);
    recipeView.renderError();
  }
};

const controlSearchResults = async function () {
  try {
    resultsView.renderSpinner();

    // 1) Get search query
    const query = searchView.getQuery();
    if (!query) return;

    // 2) Load search results
    await model.loadSearchResults(query);

    // 3) render results
    resultsView.render(model.state.search.results);
  } catch (err) {
    console.log(err);
  }
};

const init = function () {
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
};
init();
