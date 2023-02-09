import classes from './LoadBar.module.scss';

function LoadBar() {
  return (
    <div class={classes['progress-bar__wrapper']}>
      <div class={classes['progress-bar']}>
        <div class={classes['progress-bar__value']}></div>
      </div>
    </div>
  );
}

export default LoadBar;
