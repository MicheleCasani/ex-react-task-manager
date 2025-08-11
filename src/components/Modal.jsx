import React from 'react'
import ReactDOM from 'react-dom'

const Modal = ({ title, content, show, onClose, onConfirm, confirmText }) => {
    if (!show) return null;

    return ReactDOM.createPortal(
        <div className="modal-backdrop" onClick={onClose}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <h2>{title}</h2>
                <div>{content}</div>
                <button onClick={onClose}>Cancel</button>
                <button onClick={onConfirm}>{confirmText}</button>
            </div>
        </div>,
        document.body
    )
}

export default Modal
