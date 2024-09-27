import  { ReactNode } from 'react'
import { createPortal } from 'react-dom'
import './modal.css';
interface ContextProps {
    children: ReactNode;
  }
function Modal (props: ContextProps){

    const { children } = props;

    const modalRoot = document.getElementById('modal');

  // Verifica si el modalRoot existe
  if (!modalRoot) {
    return null; // o puedes lanzar un error, dependiendo de cómo quieras manejarlo
  }



    return createPortal (
        
            <div className='ModalBackground'>
               {children}
            </div>,
            modalRoot
        
    )
}

export default Modal;