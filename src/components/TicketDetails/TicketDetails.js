import { add, format, getMinutes, getHours, parseISO } from 'date-fns';

import classes from './TicketDetails.module.scss';

function TicketDetails({ origin, destination, date, stops, duration }) {
  const formatStopsCount = () => {
    const strStart = stops.length + ' пересад';
    switch (stops.length) {
      case 0:
        return strStart + 'ок';
      case 1:
        return strStart + 'ка';
      default:
        return strStart + 'ки';
    }
  };
  const formatDate = () => {
    const startingTime = parseISO(date);
    const endingTime = add(parseISO(date), { minutes: duration });
    return (
      `${(getHours(startingTime))}:${format(getMinutes(startingTime), 'MM')} - ` +
      `${getHours(endingTime)}:${format(getMinutes(endingTime), 'MM')}`
    );
  };
  const formatDuration = `${Math.floor(duration / 60)}ч ${duration % 60}м`;

  return (
    <>
      <section className={classes.ticketDetails}>
        <div className={classes.ticketDetails__header}>
          <div className={classes.ticketDetails__row}>
            <div className={classes.ticketDetails__data}>
              {origin} - {destination}
            </div>
            <div className={classes.ticketDetails__data}>В пути</div>
            <div className={classes.ticketDetails__data}>
              {formatStopsCount()}
            </div>
          </div>
        </div>
        <div className={classes.ticketDetails__body}>
          <div className={classes.ticketDetails__row}>
            <div className={classes.ticketDetails__data}>{formatDate()}</div>
            <div className={classes.ticketDetails__data}>{formatDuration}</div>
            <div className={classes.ticketDetails__data}>
              {stops.join(', ')}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TicketDetails;
