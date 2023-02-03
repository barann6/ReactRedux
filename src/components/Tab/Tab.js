import classes from './Tab.module.scss';

function Tab({id, onChange, text, checked}) {
  return (
    <>
      <input
        type="radio"
        name="tab"
        id={id}
        checked={checked}
        onChange={onChange}
        style={{ display: 'none' }}></input>
      <label htmlFor={id} className={classes.tab}>
        {text}
      </label>
    </>
  );
}

export default Tab;
