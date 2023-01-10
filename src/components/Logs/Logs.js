import classes from './Logs.module.scss';
import LogItem from './LogItem/LogItem';
import Card from '../UI/Card/Card';

const Logs = ({logData, onDeleteLog}) => {

  const LogDataIter = logData.map( (item, index) => 
    <LogItem key={item.id} 
             onDeleteLog={()=>onDeleteLog(index)}
             curDate={item.curDate} 
             description={item.description} 
             timeSpent={item.timeSpent}/>
  );

  const LogDataLen = LogDataIter.length;
  return (
    <Card className={classes.logs}>
      {
        LogDataLen === 0 ?  <h2 className={classes.nofoundwarning}>No Logs Found!</h2> : LogDataIter
      }
    </Card>
  )};
export default Logs;
