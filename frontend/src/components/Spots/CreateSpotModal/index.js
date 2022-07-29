import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import CreateSpotForm from './CreateSpotForm';
import './CreateSpotFormModal.css';

function CreateSpotFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className='become-host-container'>
      <div>
        <button className = 'become-host-button' onClick={() => setShowModal(true)}>Become a Host</button>
      </div>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreateSpotForm setShowModal={setShowModal} />
        </Modal>
      )}
    </div>
  )
}

export default CreateSpotFormModal;
