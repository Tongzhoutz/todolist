import classes from './MyDate.module.scss';
const MyDate = ({curDate}) => {
  const month = curDate.toLocaleString('default', {month: 'short'});
  const date = curDate.getDate();
  return (
    <div className={classes.date}>
        <div className={classes.month}>
            {month}
        </div>
        <div className={classes.day}>
            {date}
        </div>
    </div>
)}

export default MyDate;