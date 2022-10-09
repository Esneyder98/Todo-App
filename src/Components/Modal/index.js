import React from 'react';
// Necesitamos ReactDOM para renderizar nuestro modal en el DOM
import ReactDOM from 'react-dom';
import './Modal.css'

const Modal = ({children}) => {
    return ReactDOM.createPortal(
        <div className="ModalBackground">
          {children}
        </div>,
        document.getElementById('modal')
      );
}

export {Modal};


