import React, {useContext} from 'react';
import {ModalContext} from "../../context/ModalProvider";

const MainPage =(props)=> {
    const {openModal} = useContext(ModalContext);
    return (
        <div>
            <button onClick={openModal}>открыть модальное окно</button>
        </div>
    );
}
export default MainPage