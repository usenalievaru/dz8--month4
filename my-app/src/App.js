import './App.css';
import {ModalContext} from "../../my-app/src/context/ModalProvider";
import MainPage from "../../my-app/src/pages/mainPage/MainPage";
import AboutPage from "../../my-app/src/pages/aboutPage/AboutPage";
import { useState} from "react";

function App() {



  const [open,setOpen] = useState(false)
  const openModal = () => {
    setOpen(true )
  }
  const closeModal = () => {
    setOpen(false)
  }



  return (
      <div className="App">
        <ModalContext.Provider value={{open, openModal, closeModal}}>
          <MainPage/>
          <AboutPage/>
        </ModalContext.Provider>


      </div>
  );
}

export default App;
