import Logs from './components/Logs/Logs';
import LogsForm from './components/LogsForm/LogsForm';
import styles from './App.module.scss';
import { useState } from 'react';
const App  = () =>{
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

  const [logDataState, setLogData] = useState(logData);

  const saveLogHandler = (newLog) => {
    newLog.id = Date().now + "";
    console.log(newLog);
    setLogData([...logDataState, newLog]);
  }

  const deleteHandler = (index) => {
    setLogData(prevLogData => {
      const newLogData = [...prevLogData];
      newLogData.splice(index,1);
      return newLogData;
    });
  }
  
  return (
    <div className={styles.app}>
     <LogsForm onSaveLog={saveLogHandler} />
     <Logs logData={logDataState} onDeleteLog={deleteHandler} />
    </div>
  )
}

export default App;
