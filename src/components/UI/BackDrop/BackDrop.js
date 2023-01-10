import style from './BackDrop.module.scss';

const BackDrop = (props) => {
  return (
    <div className={style.backdrop}>
      {props.children}
    </div>
  )
}

export default BackDrop
