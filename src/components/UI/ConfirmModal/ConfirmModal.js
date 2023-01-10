import styles from './ConfirmModal.module.scss';
import Card from '../Card/Card';
import BackDrop from '../BackDrop/BackDrop';

const ConfirmModal = ({confirmText, onCancel, onConfirm}) => {
  return (
    <BackDrop>
    <Card className={styles.confirm}>
      <div className={styles.text}>
        <p>{confirmText}</p>
      </div>

      <div className={styles.btns}>
        <button className={styles.OKbtn} onClick={onConfirm}>Confirm</button>
        <button onClick={onCancel}>Cancel</button>
      </div>
    </Card>
    </BackDrop>
  )
}

export default ConfirmModal
