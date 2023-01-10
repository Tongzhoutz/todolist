import classes from './Logs.module.scss';
import LogItem from './LogItem/LogItem';
import Card from '../UI/Card/Card';

const Logs = () => {
  const logData = [
    {
      id: '001',
      curDate: new Date(2023, 1, 9), 
      description: 'Learn React', 
      timeSpent: 40,
    },
    {
      id: '002',
      curDate: new Date(2022, 12, 17), 
      description: 'Buy Bacon', 
      timeSpent: 20,
    },
    {
      id: '003',
      curDate: new Date(2022, 10, 21), 
      description: 'Teach Econometrics', 
      timeSpent: 20,
    },
    {
      id: '004',
      curDate: new Date(2022, 8, 8), 
      description: 'Learn Leetcode', 
      timeSpent: 50,
    }
  ];
  const LogDataIter = logData.map(item => 
    <LogItem key={item.id} 
             curDate={item.curDate} 
             description={item.description} 
             timeSpent={item.timeSpent}/>
  );

  return (
    <Card className={classes.logs}>
      {LogDataIter}
    </Card>
  )};
export default Logs;
