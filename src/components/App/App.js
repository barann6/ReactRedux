import { connect } from 'react-redux';

import classes from './App.module.scss';
import Logo from '../Logo/Logo';
import Filters from '../Filters/Filters';
import TabsPanel from '../TabsPanel/TabsPanel';
import Loader from '../Loader/Loader';
import TicketsList from '../TicketsList/TicketsList';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

function App({ fetchError, loading }) {
  const displayLoader = loading ? <Loader /> : null;
  const displayErrorMessage = fetchError ? <ErrorMessage /> : null;
  return (
    <>
      <header>
        <Logo />
      </header>
      <main className={classes.loyaut}>
        <Filters />
        <div>
          <TabsPanel />
          {displayLoader}
          {displayErrorMessage}
          <TicketsList />
        </div>
      </main>
    </>
  );
}

const mapStateToProps = (state) => ({
  fetchError: state.fetchError,
  loading: state.loading,
});

export default connect(mapStateToProps)(App);
