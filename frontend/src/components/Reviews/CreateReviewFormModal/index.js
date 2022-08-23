import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Modal } from '../../../context/Modal';
import CreateReviewForm from './CreateReviewForm';

function CreateReviewFormModal() {
  const [showModal, setShowModal] = useState(false);
  const currentUser = useSelector((state) => state.session.user);

  return (
    <div className='review-form-container'>
      <div>
        {currentUser && (
          <button
          className='review-form-button'
          onClick={() => setShowModal(true)}>
            Submit a Review
          </button>
        )}
      </div>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreateReviewForm setShowModal={setShowModal} />
        </Modal>
      )}
    </div>
  );
}
