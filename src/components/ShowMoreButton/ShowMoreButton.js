import { connect } from 'react-redux';

import classes from './ShowMoreButton.module.scss';
import { showMoreTickets } from '../../actions';

function ShowMoreButton({ clickHandler }) {
  return (
    <button className={classes.showMoreButton} onClick={clickHandler}>
      Показать ещё 5 билетов!
    </button>
  );
}

const mapDispatchToProps = (dispatch) => ({
  clickHandler: () => dispatch(showMoreTickets()),
});

export default connect(null, mapDispatchToProps)(ShowMoreButton);
