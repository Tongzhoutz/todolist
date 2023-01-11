import style from './BackDrop.module.scss';
import ReactDom from 'react-dom';

const backdropRoot = document.getElementById("backdrop-root");

const BackDrop = (props) => {
  return (
    ReactDom.createPortal(
    <div className={style.backdrop}>
      {props.children}
    </div>,
    backdropRoot
    ));
};

export default BackDrop
