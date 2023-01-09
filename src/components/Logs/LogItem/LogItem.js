import classes from './LogItem.module.scss';
import MyDate from './MyDate/MyDate';

const LogItem = () => {
  return (
    <div className={classes.item}>
        <MyDate />

        <div className={classes.content}>
            <h3 className={classes.desc}>
                Learn React
            </h3>
            <p className={classes.time}>
                40 min
            </p>

        </div>
    </div>
  )}

export default LogItem;