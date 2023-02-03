import classes from './Loader.module.scss';

function Loader() {
  return (
    <div className={classes.loader__wrapper}>
      <span className={classes.loader}></span>
    </div>
  );
}

export default Loader;
