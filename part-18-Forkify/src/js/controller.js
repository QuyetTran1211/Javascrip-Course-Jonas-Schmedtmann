import * as model from './model.js';
import recipeView from './view/recipeView.js';
import searchView from './view/searchView';
import resultsView from './view/resultsView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import recipeView from './view/recipeView.js';
import paginationView from './view/paginationView.js';

// if (module.hot) {
//   module.hot.accept();
// }

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
// console.log('Test');

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);

    // console.log(id);

    if (!id) return;
    recipeView.renderSpinner();

    // 0) Updates results view to mark selected search result
    resultsView.update(model.getSearchResultsPage());

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
    // resultsView.render(model.state.search.results);
    resultsView.render(model.getSearchResultsPage());

    // 4) render pagination control

    paginationView.render(model.state.search);
  } catch (err) {
    console.log(err);
  }
};

const controlPagination = function (goToPage) {
  // 1) Render NEW results
  resultsView.render(model.getSearchResultsPage(goToPage));

  // 2) Render NEW paginations buttons

  paginationView.render(model.state.search);
};

const controlServing = function (newServings) {
  // Update the recipe serving (instate)
  model.updateServings(newServings);

  // Update the recipe view
  // recipeView.render(model.state.recipe);
  recipeView.update(model.state.recipe);
};

const controlAddBookMark = function () {
  model.addBookMark(model.state.recipe);
  // console.log(model.state.recipe);
  recipeView.update(model.state.recipe);
};

const init = function () {
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServing);
  recipeView.addHandlerAddBookmark(controlAddBookMark);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
};
init();
