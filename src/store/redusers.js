import { combineReducers } from 'redux';

import actionTypes from './actionTypes';
import { filtersNames, tabsNames } from './actions';

const {
  SWITCH_FILTER,
  TOGGLE_TAB,
  REQUEST_TICKETS,
  RECIVE_TICKETS,
  END_LOADING,
  THROW_ERROR,
  SHOW_MORE,
} = actionTypes;

const { all, zero, one, two, thre } = filtersNames;
const { optimal } = tabsNames;

const filtersInitial = {
  all: true,
  zero: true,
  one: true,
  two: true,
  thre: true,
};

const filtersSwitchCheck = (state) =>
  Object.values(state)
    .slice(1)
    .reduce((prev, next) => prev && next, true);

const filtersSwitchHandler = (state, swichedFilter) =>
  filtersSwitchCheck({ ...state, [swichedFilter]: !state[swichedFilter] })
    ? filtersInitial
    : { ...state, all: false, [swichedFilter]: !state[swichedFilter] };

const filters = (state = filtersInitial, action) => {
  if (action.type === SWITCH_FILTER) {
    switch (action.filterName) {
      case all:
        return state.all
          ? {
              all: false,
              zero: false,
              one: false,
              two: false,
              thre: false,
            }
          : filtersInitial;
      case zero:
        return filtersSwitchHandler(state, zero);
      case one:
        return filtersSwitchHandler(state, one);
      case two:
        return filtersSwitchHandler(state, two);
      case thre:
        return filtersSwitchHandler(state, thre);
      default:
        return state;
    }
  }
  return state;
};

const currentTab = (state = optimal, action) => {
  if (action.type === TOGGLE_TAB) return action.tabName;
  return state;
};

const loading = (state = true, action) => {
  switch (action.type) {
    case REQUEST_TICKETS:
      return true;
    case END_LOADING:
      return false;
    default:
      return state;
  }
};

const fetchError = (state = false, action) => action.type === THROW_ERROR;

const tickets = (state = [], action) =>
  action.type === RECIVE_TICKETS ? state.concat(action.tickets) : state;

const showedCount = (state = 5, action) =>
  action.type === SHOW_MORE ? state + 5 : state;

export default combineReducers({
  filters,
  currentTab,
  loading,
  tickets,
  showedCount,
  fetchError,
});
