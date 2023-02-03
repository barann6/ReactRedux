import classes from './FilterButton.module.scss';

function FilterCheckbox({checked, onChange, id, text}) {
  return (
    <>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        id={id}
        style={{ display: 'none' }}
      />
      <label htmlFor={id} className={classes.filterButton}>
        {text}
      </label>
    </>
  );
}

export default FilterCheckbox;
