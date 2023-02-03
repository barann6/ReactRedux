import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import classes from './TabsPanel.module.scss';
import Tab from '../Tab/Tab';
import { tabsNames, toggleTab } from '../../actions';
const { SHOW_CHEAPER, SHOW_FASTER, SHOW_OPTIMAL } = tabsNames;

function TabsPanel({ currentTab, showCheaper, showFaster, SHOWOptimal }) {
  return (
    <ul className={classes.tabs}>
      <li>
        <Tab
          checked={currentTab === 'cheaper'}
          id="cheap"
          text="Самый дешевый"
          onChange={showCheaper}
        />
      </li>
      <li>
        <Tab
          checked={currentTab === 'faster'}
          id="fast"
          text="Самый быстрый"
          onChange={showFaster}
        />
      </li>
    </ul>
  );
}

const mapStateToProps = (state) => ({
  currentTab: state.currentTab,
});
const mapDispatchToProps = (dispatch) => {
  const togglehHandler = bindActionCreators(toggleTab, dispatch);
  return {
    showCheaper: () => togglehHandler(SHOW_CHEAPER),
    showFaster: () => togglehHandler(SHOW_FASTER),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TabsPanel);
