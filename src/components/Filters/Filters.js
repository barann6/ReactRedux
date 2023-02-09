import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import classes from './Filters.module.scss';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import { filtersNames, switchFilter } from '../../store/actions';
const { all, zero, one, two, thre } = filtersNames;

function Filters({
  all,
  zero,
  one,
  two,
  thre,
  switchAll,
  switchZero,
  switchOne,
  switchTwo,
  switchThre,
}) {
  return (
    <div className={classes.filters}>
      <h5 className={classes.filters__title}>Количество пересадок</h5>
      <ul className={classes.filters__list}>
        <li>
          <FilterCheckbox
            text="Все"
            id="all"
            checked={all}
            onChange={switchAll}
          />
        </li>
        <li>
          <FilterCheckbox
            text="Без пересадок"
            id="none"
            checked={zero}
            onChange={switchZero}
          />
        </li>
        <li>
          <FilterCheckbox
            text="1 пересадка"
            id="one"
            checked={one}
            onChange={switchOne}
          />
        </li>
        <li>
          <FilterCheckbox
            text="2 пересадки"
            id="two"
            checked={two}
            onChange={switchTwo}
          />
        </li>
        <li>
          <FilterCheckbox
            text="3 пересадки"
            id="thre"
            checked={thre}
            onChange={switchThre}
          />
        </li>
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => ({
  all: state.filters.all,
  zero: state.filters.zero,
  one: state.filters.one,
  two: state.filters.two,
  thre: state.filters.thre,
});
const mapDispatchToProps = (dispatch) => {
  const switchHandler = bindActionCreators(switchFilter, dispatch);
  return {
    switchAll: () => switchHandler(all),
    switchZero: () => switchHandler(zero),
    switchOne: () => switchHandler(one),
    switchTwo: () => switchHandler(two),
    switchThre: () => switchHandler(thre),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
