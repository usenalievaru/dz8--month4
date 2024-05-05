import classes from './ModalWindow.module.css'
import {useContext, useState} from "react";
import {ModalContext} from "../../context/ModalProvider";

function ModalWindow({content='No content', }) {
    const {open,closeModal} = useContext(ModalContext);

    if(open) {
        return  <div className={classes.modal_paper}>
            <div className={classes.modal}>
                {content}
                <button onClick={closeModal} style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                }}>X</button>
            </div>
        </div>
    }
    return
}

export default ModalWindow;