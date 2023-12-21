import React, { useState } from 'react';
import Button from './components/Button';
import Modal from './components/Modal';
import './App.scss';

const App = () => {
  const [showFirstModal, setShowFirstModal] = useState(false);
  const [showSecondModal, setShowSecondModal] = useState(false);

  const openFirstModal = () => {
    setShowFirstModal(true);
  };

  const openSecondModal = () => {
    setShowSecondModal(true);
  };

  const closeFirstModal = () => {
    setShowFirstModal(false);
  };

  const closeSecondModal = () => {
    setShowSecondModal(false);
  };

  return (
    <div className="app">
      <Button
        backgroundColor="lightblue"
        text="Open first modal"
        onClick={openFirstModal}
      />
      <Button
        backgroundColor="lightgreen"
        text="Open second modal"
        onClick={openSecondModal}
      />

{showFirstModal && (
  <Modal
    header="Modal 1"
    closeButton={true}
    text="SomeText"
    closeModal={closeFirstModal}
    actions={<button>OK</button>}
    customClass="modal1" 
  />
)}

{showSecondModal && (
  <Modal
    header="Modal 2"
    closeButton={true}
    text="SomeText2"
    closeModal={closeSecondModal}
    actions={<button>Cancel</button>}
    customClass="modal2" 
  />
)}
    </div>
  );
};

export default App;
