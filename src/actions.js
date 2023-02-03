import AviasalesService from './service/aviasalesService';

export const switchFilter = (filterName) => ({
  type: 'SWITCH_FILTER',
  filterName,
});

export const toggleTab = (tabName) => ({
  type: 'TOGGLE_TAB',
  tabName,
});

const requestTickets = () => ({
  type: 'REQUEST',
});

const reciveTickets = (tickets) => ({
  type: 'RECIVE',
  tickets,
});

const handleRequestTicketsError = () => ({
  type: 'THROW_ERROR',
});

export const fetchTickets = () => (dispatch) => {
  dispatch(requestTickets());
  return AviasalesService.searchIdRequest()
    .then(({ searchId }) => AviasalesService.getTicketsList(searchId))
    .then(({ tickets }) => dispatch(reciveTickets(tickets)))
    .catch(() => dispatch(handleRequestTicketsError()));
};

export const showMoreTickets = () => ({
  type: 'SHOW_MORE'
});

export const filtersNames = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_ZERO: 'SHOW_ZERO',
  SHOW_ONE: 'SHOW_ONE',
  SHOW_TWO: 'SHOW_TWO',
  SHOW_THRE: 'SHOW_THRE',
};

export const tabsNames = {
  SHOW_CHEAPER: 'SHOW_CHEAPER',
  SHOW_FASTER: 'SHOW_FASTER',
  SHOW_OPTIMAL: 'SHOW_OPTIMAL',
};

export const ticketsActions = {
  REQUEST: 'REQUEST',
  RECIVE: 'RECIVE',
  THROW_ERROR: 'THROW_ERROR',
  SHOW_MORE: 'SHOW_MORE',
};