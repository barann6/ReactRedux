import classes from './ErrorMessage.module.scss';

function ErrorMessage() {
  return <div className={classes.errorMessage}>Ошибка подключения к серверу билетов</div>;
}

export default ErrorMessage