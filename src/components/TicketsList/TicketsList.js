import { connect } from 'react-redux';

import classes from './TicketsList.module.scss';
import Ticket from '../Ticket/Ticket';
import ShowMoreButton from '../ShowMoreButton/ShowMoreButton';

const applyFilters = (ticket, filters) => {
  const { all, zero, one, two, thre } = filters;
  const stops = ticket.props.children.props.segments[0].stops.length;
  return (
    all ||
    (zero && stops === 0) ||
    (one && stops === 1) ||
    (two && stops === 2) ||
    (thre && stops === 3)
  );
};

const applySort = (ticketPrev, ticketCurr, currentTab) => {
  const prev = ticketPrev.props.children.props;
  const curr = ticketCurr.props.children.props;
  switch (currentTab) {
    case 'faster':
      return prev.segments[0].duration - curr.segments[0].duration;
    case 'cheaper':
      return prev.price - curr.price;
    default:
      return 0;
  }
};

const NoTicketsMessage = (
  <div className={classes['ticketsList__no-tickets']}>
    Рейсов, подходящих под заданные фильтры, не найдено
  </div>
);

function TicketsList({ tickets, showedCount, filters, currentTab, loading }) {
  const ticketsList = tickets
    .map(({ carrier, price, segments }, index) => (
      <li key={index}>
        <Ticket carrier={carrier} price={price} segments={segments} />
      </li>
    ))
    .filter((ticket) => applyFilters(ticket, filters))
    .sort((ticketPrev, ticketCurrent) =>
      applySort(ticketPrev, ticketCurrent, currentTab)
    )
    .slice(0, showedCount);

  const showMoreButtonDisplay =
    showedCount > ticketsList.length ? null : <ShowMoreButton />;

  const noTicketsMessageDisplay =
    ticketsList.length === 0 && !loading ? NoTicketsMessage : null;

  return (
    <ul className={classes.ticketsList}>
      {ticketsList}
      {noTicketsMessageDisplay}
      {showMoreButtonDisplay}
    </ul>
  );
}

const mapStateToProps = (state) => ({
  tickets: state.tickets,
  showedCount: state.showedCount,
  filters: state.filters,
  currentTab: state.currentTab,
  loading: state.loading,
});

export default connect(mapStateToProps)(TicketsList);
