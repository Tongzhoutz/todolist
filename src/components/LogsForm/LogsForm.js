import classes from './LogsForm.module.scss';
import Card from '../UI/Card/Card';

const LogsForm = () => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
  }
  return (
    <Card>
      <form onSubmit={onSubmitHandler} className={classes.form}>
        <div className={classes.input}>
          <label id='date'>Date</label>
          <input id='date' type='date' />
        </div>
        <div className={classes.input}>
          <label id='desc'>Cont</label>
          <input id='desc' type='text' />
        </div>
        <div className={classes.input}>
          <label id='time'>Time</label>
          <input id='time' type='number' />
        </div>
        <div className={classes.btn}>
          <button>Add</button>
        </div>
      </form>
    </Card>
  )}

export default LogsForm;
