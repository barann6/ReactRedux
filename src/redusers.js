import { combineReducers } from 'redux';

import { filtersNames, ticketsActions } from './actions';

const { SHOW_ALL, SHOW_ZERO, SHOW_ONE, SHOW_TWO, SHOW_THRE } = filtersNames;

const { RECIVE, REQUEST, THROW_ERROR, SHOW_MORE } = ticketsActions;

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
  switch (action.type) {
    case 'SWITCH_FILTER':
      switch (action.filterName) {
        case SHOW_ALL:
          return state.all
            ? {
                all: false,
                zero: false,
                one: false,
                two: false,
                thre: false,
              }
            : filtersInitial;
        case SHOW_ZERO:
          return filtersSwitchHandler(state, 'zero');
        case SHOW_ONE:
          return filtersSwitchHandler(state, 'one');
        case SHOW_TWO:
          return filtersSwitchHandler(state, 'two');
        case SHOW_THRE:
          return filtersSwitchHandler(state, 'thre');
        default:
          return state;
      }
    default:
      return state;
  }
};

const currentTab = (state = 'optimal', action) => {
  if (action.type === 'TOGGLE_TAB')
    return action.tabName.toLowerCase().substring(5);
  return state;
};

const loading = (state = false, action) => action.type === REQUEST;

const fetchError = (state = false, action) => action.type === THROW_ERROR;

const tickets = (state = [], action) =>
  action.type === RECIVE ? action.tickets : state;

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
