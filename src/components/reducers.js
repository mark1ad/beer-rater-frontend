import C from './constants';

export const beer = (state = {}, action) => {
  switch (action.type) {
    case C.ADD_BEER:
      return {
        id: action.id,
        name: action.name,
        brewery: action.brewery
      }
    default:
      return state;
  }
}

export const beers = (state=[], action) => {
  switch (action.type) {
    case C.ADD_BEER:
      // add a single beer to the state
      const beers = [
        ...state,
        beer({}, action)
      ]
      return beers;
    case C.CLEAR_BEERS:
      // remove all beers from state
      return []
    default:
      // do nothing
      return state;
  }
}