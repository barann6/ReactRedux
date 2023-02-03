import classes from './Ticket.module.scss';
import TicketDetails from '../TicketDetails/TicketDetails';

function Ticket({ carrier, price, segments }) {
  const formatPrice = price
    .toString()
    .slice(0, 2)
    .concat(' ', price.toString().slice(2), ' Р');
  return (
    <section className={classes.ticket}>
      <header className={classes.ticket__header}>
        <h6 className={classes.ticket__price}>{formatPrice}</h6>
        <img src={`//pics.avs.io/99/36/${carrier}.png`} alt="carrier logo" />
      </header>
      {segments.map(({ origin, destination, date, stops, duration }, i) => (
        <TicketDetails
          origin={origin}
          destination={destination}
          date={date}
          stops={stops}
          duration={duration}
          key={i}
        />
      ))}
    </section>
  );
}

export default Ticket;
