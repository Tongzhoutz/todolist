import classes from './LogItem.module.scss';
import MyDate from './MyDate/MyDate';
import PropTypes from 'prop-types';
import Card from '../../UI/Card/Card';
const LogItem = ({curDate, description, timeSpent}) => {
  return (
    <Card className={classes.item}>
        <MyDate curDate = {curDate} />

        <div className={classes.content}>
            <h3 className={classes.desc}>
                {description} 
            </h3>
            <p className={classes.time}>
                {timeSpent} min
            </p>

        </div>
    </Card>
  )};
LogItem.propTypes = {
  curDate: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  timeSpent: PropTypes.number.isRequired,
}

export default LogItem;