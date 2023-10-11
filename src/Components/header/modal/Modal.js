import { ClassNames } from '@emotion/react';
import React, { useState } from 'react';

const Modal = ({ isOpen, onClose }) =>{
    if(!isOpen){
        return null;
    }

    return(
        < div className="modal">
            <div>
                <h2>Modal Title</h2>
                <p>Modal content</p>
                <button
                    onClick={onClose}>Close</button>
            </div>
        </div>
    );
}

export default Modal;