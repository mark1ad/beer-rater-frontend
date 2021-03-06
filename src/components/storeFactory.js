import {
  createStore,
  combineReducers,
  applyMiddleware
} from 'redux';
import {
  beers,
  selectedBeer,
  selectedBrewery,
  searchTerms,
  user
} from './reducers';

let initStore = {
  beers: []
};

const logger = store => next => action => {
  // console.groupCollapsed("dispatching ", action.type)
  console.log('\n>>> Dispatching ', action.type);
  console.log('prev state ', store.getState());
  console.log('action ', action);
  next(action)
  console.log('next state ', store.getState());
  console.log('\n');
  // console.groupEnd();
}

const storeFactory = (initialState = initStore) =>
  applyMiddleware(logger)(createStore)(combineReducers({beers, selectedBeer, selectedBrewery, searchTerms, user}), initialState)
// const storeFactory = (initialState = initStore) =>
//   (createStore)(beers, initialState)

export default storeFactory;
