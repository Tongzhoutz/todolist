import classes from './MyDate.module.scss';

const MyDate = () => {
  return (
    <div className={classes.date}>
        <div className={classes.month}>
            April
        </div>
        <div className={classes.day}>
            19
        </div>
    </div>
)}

export default MyDate;