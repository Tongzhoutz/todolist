import Logs from './components/Logs/Logs';
import LogsForm from './components/LogsForm/LogsForm';
import styles from './App.module.scss';

const App  = () =>{
  return (
    <div className={styles.app}>
     <LogsForm />
     <Logs />
    </div>
  )
}

export default App;
