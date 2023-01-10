import classes from './LogItem.module.scss';
import MyDate from './MyDate/MyDate';
import PropTypes from 'prop-types';
import Card from '../../UI/Card/Card';
import { useState } from 'react';
import ConfirmModal from '../../UI/ConfirmModal/ConfirmModal';

const LogItem = ({curDate, description, timeSpent, onDeleteLog}) => {

  const [showConfirm, setShowConfirm] = useState(false);
  const deleteHandler = () => {
    setShowConfirm(true);
  }
  const cancelHandler = () => {
    setShowConfirm(false);
  }

  const confirmHandler = () => {
    onDeleteLog();
    setShowConfirm(false);
  }
  return (
    <Card className={classes.item}>
        {showConfirm && <ConfirmModal confirmText="Are you sure you want to delete the item?" 
                                      onCancel={cancelHandler}
                                      onConfirm={confirmHandler} />}
        <MyDate curDate = {curDate} />

        <div className={classes.content}>
            <h3 className={classes.desc}>
                {description} 
            </h3>
            <p className={classes.time}>
                {timeSpent} min
            </p>
        </div>
        <div className={classes.delete}>
          <div onClick={deleteHandler}>❌</div>
        </div>

    </Card>
  )};
LogItem.propTypes = {
  curDate: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  timeSpent: PropTypes.number.isRequired,
}

export default LogItem;