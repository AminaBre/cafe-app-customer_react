import React from 'react';
import './Styles/Modal.css'

export const Modal = ({ show, close}) => {
    return (
        <div className="modal-wrapper" 
        style={{
            display: show ? 'block' : 'none'
            //transform: show ? 'translateY(0vh)' : 'translateY(-100vh)',
            //opacity: show ? '1' : '0'
        }}>
            <div className="modal-content">
            <div className="modal-header">
            <button onClick={close} classnName="btn-x-cancel">x</button>
            </div>
                <div className="modal-body">
                    <h2 className="modal-menu-text">Meny</h2>
                    <p>What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <div className="modal-footer">
                        <button onClick={close} classnName="btn-cancel">Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
};
