import AviasalesService from '../service/aviasalesService';
import actionTypes from './actionTypes';
const {
  SWITCH_FILTER,
  TOGGLE_TAB,
  START_LOADING,
  RECIVE_TICKETS,
  END_LOADING,
  THROW_ERROR,
  SHOW_MORE,
} = actionTypes;

export const switchFilter = (filterName) => ({
  type: SWITCH_FILTER,
  filterName,
});

export const filtersNames = {
  all: 'all',
  zero: 'zero',
  one: 'one',
  two: 'two',
  thre: 'thre',
};

export const toggleTab = (tabName) => ({
  type: TOGGLE_TAB,
  tabName,
});

export const tabsNames = {
  cheaper: 'cheaper',
  faster: 'faster',
  optimal: 'optimal',
};

const requestTickets = () => ({
  type: START_LOADING,
});

const endFetching = () => ({
  type: END_LOADING,
});

const reciveTickets = (tickets) => ({
  type: RECIVE_TICKETS,
  tickets,
});

const handleRequestTicketsError = () => ({
  type: THROW_ERROR,
});

export const fetchTickets = () => async (dispatch) => {
  
  dispatch(requestTickets());
  let errorCount = 0;
  let searchIdResponse = '';
  while (errorCount < 10) {
    try {
      searchIdResponse = await AviasalesService.getSearchId();
      break;
    } catch {
      ++errorCount;
    }
  }
  // let tickets = [];
  while (errorCount < 10) {
    try {
      const response = await AviasalesService.getTickets(
        searchIdResponse.searchId
      );
      if (response.stop) break;
      // tickets = tickets.concat(response.tickets);
      const tickets = response.tickets;
      dispatch(reciveTickets(tickets));
    } catch {
      ++errorCount;
    }
  }
  dispatch(endFetching());
  if (errorCount >= 10) dispatch(handleRequestTicketsError());
};

export const showMoreTickets = () => ({
  type: SHOW_MORE,
});
