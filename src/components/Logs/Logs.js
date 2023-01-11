import classes from './Logs.module.scss';
import LogItem from './LogItem/LogItem';
import Card from '../UI/Card/Card';
import LogFilter from './LogFilter/LogFilter';
import { useState } from 'react';

const Logs = ({logData, onDeleteLog}) => {

  const [year, setYear] = useState(2022);

  const filteredLogData = logData.filter( item => item.curDate.getFullYear() === year);

  const yearChangeHandler = (year) => {
    setYear(year);
  }
  
  const LogDataIter = filteredLogData.map( (item, index) => 
    <LogItem key={item.id} 
             onDeleteLog={()=>onDeleteLog(index)}
             curDate={item.curDate} 
             description={item.description} 
             timeSpent={item.timeSpent}/>
  );

  const LogDataLen = LogDataIter.length;
  return (
    <Card className={classes.logs}>
      <LogFilter year={year} onYearChange={yearChangeHandler} />
      {
        LogDataLen === 0 ?  <h2 className={classes.nofoundwarning}>No Logs Found!</h2> : LogDataIter
      }
    </Card>
  )};
export default Logs;
