import classes from './Logs.module.scss';
import LogItem from './LogItem/LogItem';

const Logs = () => {
  return (
    <div className={classes.logs}>
        <LogItem />
    </div>
  )};
export default Logs;
