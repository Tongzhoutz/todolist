import classes from './LogsForm.module.scss';
import Card from '../UI/Card/Card';
import { useState } from 'react';
const LogsForm = ({onSaveLog}) => {
  
  const [inputDate, setInputDate] = useState("");
  const [inputDesc, setInputDesc] = useState("");
  const [inputTime, setInputTime] = useState("");

  const onDateChangeHandler = (e) => {
    setInputDate(e.target.value);
  }
  const onDescChangeHandler = (e) => {
    setInputDesc(e.target.value);
  }
  const onTimeChangeHandler = (e) => {
    setInputTime(e.target.value);
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const newLog = {
      curDate: new Date(inputDate),
      description: inputDesc,
      timeSpent: inputTime
    }
    onSaveLog(newLog);
    setInputDate("");
    setInputDesc("");
    setInputTime("");
  }
  return (
    <Card>
      <form onSubmit={onSubmitHandler} className={classes.form}>
        <div className={classes.input}>
          <label id='date'>Date</label>
          <input id='date' onChange={onDateChangeHandler} value={inputDate} type='date' />
        </div>
        <div className={classes.input}>
          <label id='desc'>Cont</label>
          <input id='desc' onChange={onDescChangeHandler} value={inputDesc} type='text' />
        </div>
        <div className={classes.input}>
          <label id='time'>Time</label>
          <input id='time' onChange={onTimeChangeHandler} value={inputTime} type='number' />
        </div>
        <div className={classes.btn}>
          <button>Add</button>
        </div>
      </form>
    </Card>
  )}

export default LogsForm;
